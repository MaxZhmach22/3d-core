import {AsyncContainerModule} from "inversify";
import {BASETYPES} from "./config/BaseTypes";
import {IBaseOpt} from "./interfaces/options/IBaseOpt";
import {ColorSpace, PerspectiveCamera, Scene, WebGLRenderer} from "three";
import {IThreeJsBase} from "./interfaces/base/IThreeJsBase";
import {ICommonDebugOpt} from "./interfaces/options/ICommonDebugOpt";
import GUI from "lil-gui";
import {ResourceLoader} from "./loading/ResourceLoader";

/**
 * Build base DI module with base three.js objects and game settings from json file
 * @param canvas
 * @param basePath
 * @param gameConfigJSON
 */
export function buildBaseDIModule(canvas: HTMLCanvasElement, basePath: string, gameConfigJSON: any): AsyncContainerModule{
    return new AsyncContainerModule(async (bind) => {
;
        const baseOpt: IBaseOpt = gameConfigJSON.baseOpt;
        bind<IBaseOpt>(BASETYPES.BaseOpt).toConstantValue(baseOpt);

        const commonDebugOpt: ICommonDebugOpt = gameConfigJSON.commonDebugOpt;
        bind<ICommonDebugOpt>(BASETYPES.CommonDebugOpt).toConstantValue(commonDebugOpt);

        const passedTime = { value: 0 }
        bind<{value: number}>(BASETYPES.PassedTime).toConstantValue(passedTime);

        const renderer = new WebGLRenderer({
            canvas: canvas,
            antialias: baseOpt.antialias,
            powerPreference: 'high-performance',
        })

        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.outputColorSpace = baseOpt.colorSpace as ColorSpace
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        const camera = new PerspectiveCamera(
            baseOpt.camera.fov,
            window.innerWidth / window.innerHeight,
            baseOpt.camera.near,
            baseOpt.camera.far)

        camera.position.copy(baseOpt.camera.position)

        const threeJsBase: IThreeJsBase = {
            renderer: renderer,
            scene: new Scene(),
            camera: camera,
        }

        bind<IThreeJsBase>(BASETYPES.ThreeJsBase).toConstantValue(threeJsBase);

        const resourceLoader = new ResourceLoader();
        resourceLoader.init(renderer, basePath);
        bind<ResourceLoader>(BASETYPES.ResourceLoader).toConstantValue(resourceLoader);

        const gui = new GUI({ title: 'Debug', width: 300 })
        bind<GUI>(BASETYPES.GUI).toConstantValue(gui)

        gui.addFolder('Performance')
    })
}

export async function getConfigJSON(url: string){
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        return await response.json();
    } catch (error: any) {
        console.error(error.message);
    }
}
