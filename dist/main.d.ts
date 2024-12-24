import { ICoreUpdate } from './core/interfaces/ICoreUpdate.ts';
export declare class GameInitializer implements ICoreUpdate {
    init(): void;
    update(): void;
}
export declare const GAM: {
    BackgroundOpt: symbol;
    GyroScopeOpt: symbol;
    GameInitializer: symbol;
};
export type { ICoreUpdate } from './core/interfaces/ICoreUpdate';
