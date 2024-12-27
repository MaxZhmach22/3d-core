import { AsyncContainerModule } from 'inversify';
/**
 * Build base DI module with base three.js objects and game settings from json file
 * @param canvas
 * @param gameSettingsPath
 */
export declare function buildBaseDIModule(canvas: HTMLCanvasElement, gameSettingsPath?: string): AsyncContainerModule;
