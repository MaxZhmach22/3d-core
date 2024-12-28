import { AsyncContainerModule } from 'inversify';
/**
 * Build base DI module with base three.js objects and game settings from json file
 * @param canvas
 * @param gameConfigJSON
 */
export declare function buildBaseDIModule(canvas: HTMLCanvasElement, gameConfigJSON: any): AsyncContainerModule;
export declare function getConfigJSON(url: string): Promise<any>;
