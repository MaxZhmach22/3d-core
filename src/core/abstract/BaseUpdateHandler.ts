import {IUpdateHandler} from "../interfaces/base/IUpdateHandler";
import {Clock} from "three";
import {TaskManager} from "../core-utils/task-manager";
import {ICommonDebugOpt} from "../interfaces/options/ICommonDebugOpt";
import {IUpdate} from "../interfaces/base/IUpdate";
import {IThreeJsBase} from "../interfaces/base/IThreeJsBase";
import gsap from "gsap";
import GUI, {Controller} from "lil-gui";
import {findGUIFolder} from "../core-utils/utils";

export abstract class BaseUpdateHandler implements IUpdateHandler {
    protected deltaTime: number = 0
    protected clock = new Clock()
    protected performanceFolderController: Controller

    constructor(
        protected readonly threeJSBase: IThreeJsBase,
        protected readonly commonDebugOpt: ICommonDebugOpt,
        protected readonly updatables: IUpdate[],
        protected readonly allPassedTime: {value: number},
        protected readonly gui: GUI
    ) {
        gsap.ticker.remove(gsap.updateRoot)
        this.performanceFolderController = this.addDebugGUI()
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

    public addDebugGUI(): Controller {
        const perfFolder = findGUIFolder(this.gui, 'Performance')
        return perfFolder.add(this.commonDebugOpt, 'timeScale', 0.1, 2).name('Time Scale');
    }

    public abstract reset(): void
    public abstract initUpdateLoop(): void
}
