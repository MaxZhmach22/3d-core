import {IUpdateHandler} from "../interfaces/base/IUpdateHandler";
import {Clock} from "three";
import {TaskManager} from "../core-utils/task-manager";
import {ICommonDebugOpt} from "../interfaces/options/ICommonDebugOpt";
import {IUpdate} from "../interfaces/base/IUpdate";
import {IThreeJsBase} from "../interfaces/base/IThreeJsBase";
import gsap from "gsap";
import GUI, {Controller} from "lil-gui";
import {findGUIFolder} from "../core-utils/utils";
import {injectable} from "inversify";
import {ThreePerf} from "three-perf";

@injectable()
export abstract class BaseUpdateHandler implements IUpdateHandler {
    protected deltaTime: number = 0
    protected clock = new Clock()
    protected timeScaleController: Controller
    protected perf: ThreePerf | null = null
    protected perfomanceFolder: GUI

    constructor(
        protected readonly threeJSBase: IThreeJsBase,
        protected readonly commonDebugOpt: ICommonDebugOpt,
        protected readonly updatables: IUpdate[],
        protected readonly allPassedTime: {value: number},
        protected readonly gui: GUI,
        protected readonly IS_PROD: boolean
    ) {
        gsap.ticker.remove(gsap.updateRoot)
        this.changeSpeed = this.changeSpeed.bind(this)

        if (!IS_PROD) {
            this.perf = new ThreePerf({
                anchorY: 'bottom',
                anchorX: 'left',
                domElement: document.body,
                renderer: this.threeJSBase.renderer,
                memory: true,
                enabled: this.commonDebugOpt.perfDebug,
            })
        }

        this.perfomanceFolder = findGUIFolder(this.gui, 'Performance')
        this.timeScaleController = this.addDebugGUI(this.perfomanceFolder)[0]

        if (!IS_PROD) window.addEventListener('keydown', this.changeSpeed)
    }

    public get getDeltaTime(): number {
        return this.deltaTime
    }

    public handleUpdate(): void {
        this.deltaTime = this.clock.getDelta() * this.commonDebugOpt.timeScale
        this.allPassedTime.value += this.deltaTime

        TaskManager.update(this.deltaTime)
        gsap.updateRoot(this.allPassedTime.value)

        this.updatables.forEach((updatable: IUpdate) => {
            updatable.update(this.deltaTime, this.threeJSBase.camera)
        })
    }

    public addDebugGUI(folder: GUI): Controller[] {
        return [
            folder.add(this.commonDebugOpt, 'timeScale', 0.1, 3).name('Time Scale'),
            folder
                .add(this.commonDebugOpt, 'perfDebug')
                .name('Statistics')
                .onChange((value: boolean) => {
                    if (!this.perf) return
                    this.perf.enabled = value
                    this.perf.visible = value
                })
        ];
    }

    protected changeSpeed(event: KeyboardEvent): void {
        if(event.key === '+' || event.key === '-') {
            const value = event.key === '+' ? 0.1 : -0.1
            if (this.commonDebugOpt.timeScale + value < 0) return
            else if (this.commonDebugOpt.timeScale + value > 3) return
            this.commonDebugOpt.timeScale += value
            this.timeScaleController.updateDisplay()
        }
    }

    public abstract reset(): void
    public abstract initUpdateLoop(): void
}
