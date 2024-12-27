import {IUpdateHandler} from "../interfaces/base/IUpdateHandler";
import {Clock} from "three";
import {TaskManager} from "../core-utils/task-manager";
import {ICommonDebugOpt} from "../interfaces/options/ICommonDebugOpt";
import {IUpdate} from "../interfaces/base/IUpdate";
import {IThreeJsBase} from "../interfaces/base/IThreeJsBase";

export abstract class BaseUpdateHandler implements IUpdateHandler {
    protected deltaTime: number = 0
    protected clock = new Clock()

    constructor(
        protected readonly threeJSBase: IThreeJsBase,
        protected readonly commonDebugOpt: ICommonDebugOpt,
        protected readonly updatables: IUpdate[],
        protected allPassedTime: number = 0,
    ) {}

    public get getDeltaTime(): number {
        return this.deltaTime
    }

    public handleUpdate(): void {
        this.deltaTime = this.clock.getDelta() * this.commonDebugOpt.timeScale
        this.allPassedTime += this.deltaTime

        TaskManager.update(this.deltaTime)

        this.updatables.forEach((updatable: IUpdate) => {
            updatable.update(this.deltaTime, this.threeJSBase.camera)
        })
    }

    public abstract reset(): void
    public abstract initUpdateLoop(): void
}
