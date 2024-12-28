import { IUpdateHandler } from '../interfaces/base/IUpdateHandler';
import { Clock } from 'three';
import { ICommonDebugOpt } from '../interfaces/options/ICommonDebugOpt';
import { IUpdate } from '../interfaces/base/IUpdate';
import { IThreeJsBase } from '../interfaces/base/IThreeJsBase';
export declare abstract class BaseUpdateHandler implements IUpdateHandler {
    protected readonly threeJSBase: IThreeJsBase;
    protected readonly commonDebugOpt: ICommonDebugOpt;
    protected readonly updatables: IUpdate[];
    protected readonly allPassedTime: {
        value: number;
    };
    protected deltaTime: number;
    protected clock: Clock;
    constructor(threeJSBase: IThreeJsBase, commonDebugOpt: ICommonDebugOpt, updatables: IUpdate[], allPassedTime: {
        value: number;
    });
    get getDeltaTime(): number;
    handleUpdate(): void;
    abstract reset(): void;
    abstract initUpdateLoop(): void;
}
