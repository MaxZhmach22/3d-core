import { IUpdateHandler } from '../interfaces/base/IUpdateHandler';
import { Clock } from 'three';
import { ICommonDebugOpt } from '../interfaces/options/ICommonDebugOpt';
import { IUpdate } from '../interfaces/base/IUpdate';
import { IThreeJsBase } from '../interfaces/base/IThreeJsBase';
import { default as GUI, Controller } from 'lil-gui';
export declare abstract class BaseUpdateHandler implements IUpdateHandler {
    protected readonly threeJSBase: IThreeJsBase;
    protected readonly commonDebugOpt: ICommonDebugOpt;
    protected readonly updatables: IUpdate[];
    protected readonly allPassedTime: {
        value: number;
    };
    protected readonly gui: GUI;
    protected deltaTime: number;
    protected clock: Clock;
    protected performanceFolderController: Controller;
    constructor(threeJSBase: IThreeJsBase, commonDebugOpt: ICommonDebugOpt, updatables: IUpdate[], allPassedTime: {
        value: number;
    }, gui: GUI);
    get getDeltaTime(): number;
    handleUpdate(): void;
    addDebugGUI(): Controller;
    abstract reset(): void;
    abstract initUpdateLoop(): void;
}
