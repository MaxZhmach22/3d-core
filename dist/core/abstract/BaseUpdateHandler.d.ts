import { IUpdateHandler } from '../interfaces/base/IUpdateHandler';
import { Clock } from 'three';
import { ICommonDebugOpt } from '../interfaces/options/ICommonDebugOpt';
import { IUpdate } from '../interfaces/base/IUpdate';
import { IThreeJsBase } from '../interfaces/base/IThreeJsBase';
import { default as GUI, Controller } from 'lil-gui';
import { ThreePerf } from 'three-perf';
export declare abstract class BaseUpdateHandler implements IUpdateHandler {
    protected readonly threeJSBase: IThreeJsBase;
    protected readonly commonDebugOpt: ICommonDebugOpt;
    protected readonly updatables: IUpdate[];
    protected readonly allPassedTime: {
        value: number;
    };
    protected readonly gui: GUI;
    protected readonly IS_PROD: boolean;
    protected deltaTime: number;
    protected clock: Clock;
    protected timeScaleController: Controller;
    protected perf: ThreePerf | null;
    protected perfomanceFolder: GUI;
    protected isPerfEnabled: boolean;
    constructor(threeJSBase: IThreeJsBase, commonDebugOpt: ICommonDebugOpt, updatables: IUpdate[], allPassedTime: {
        value: number;
    }, gui: GUI, IS_PROD: boolean);
    get getDeltaTime(): number;
    handleUpdate(): void;
    addDebugGUI(folder: GUI): Controller[];
    protected changeSpeed(event: KeyboardEvent): void;
    abstract reset(): void;
    abstract initUpdateLoop(): void;
}
