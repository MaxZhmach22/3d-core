import {AsyncContainerModule} from "inversify";
import {BASETYPES} from "./config/BaseTypes";
import {IBaseOpt} from "./interfaces/options/IBaseOpt";
import {PerspectiveCamera, Scene, SRGBColorSpace, WebGLRenderer} from "three";
import {IThreeJsBase} from "./interfaces/base/IThreeJsBase";

export function buildBaseDIModule(canvas: HTMLCanvasElement, gameSettingsPath: string = "./gameConfig.json"): AsyncContainerModule{
    return new AsyncContainerModule(async (bind) => {
        const gameConfig = await getData(gameSettingsPath);
        console.log(gameConfig);

        const baseOpt: IBaseOpt = gameConfig.baseOpt;
        bind<IBaseOpt>(BASETYPES.BaseOpt).toConstantValue(baseOpt);

        const renderer = new WebGLRenderer({
            canvas: canvas,
            antialias: baseOpt.antialias,
            powerPreference: 'high-performance',
        })

        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.outputColorSpace = SRGBColorSpace
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        const threeJsBase: IThreeJsBase = {
            renderer: renderer,
            scene: new Scene(),
            camera: new PerspectiveCamera(
                baseOpt.camera.fov,
                window.innerWidth / window.innerHeight,
                baseOpt.camera.near,
                baseOpt.camera.far),
        }

        bind<IThreeJsBase>(BASETYPES.ThreeJsBase).toConstantValue(threeJsBase);
    })
}

async function getData(url: string){
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
