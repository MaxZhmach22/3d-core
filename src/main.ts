import type {ICoreUpdate} from "./core/interfaces/ICoreUpdate.ts";
import {Vector3} from "three";

export class GameInitializer implements ICoreUpdate
{
    public init(): void {
        console.log('Game initialized', new Vector3(1, 2, 3))
    }

    public update(): void {
        console.log('Game updated')
    }
}

export const GAM = {
    BackgroundOpt: Symbol.for('BackgroundOpt'),
    GyroScopeOpt: Symbol.for('GyroScopeOpt'),
    GameInitializer: Symbol.for('GameInitializer')
}

export type { ICoreUpdate} from "./core/interfaces/ICoreUpdate";
