import { LoadingManager, Texture, TextureLoader, WebGLRenderer } from 'three'
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { type GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export class ThreeJSLoaderWrapper {
  private static _instance: ThreeJSLoaderWrapper | null = null

  private static readonly _loaderManager = new LoadingManager()

  private static readonly _dracoLoader = new DRACOLoader(ThreeJSLoaderWrapper._loaderManager)

  private static readonly _gltfLoader = new GLTFLoader(ThreeJSLoaderWrapper._loaderManager)

  static readonly _ktx2Loader = new KTX2Loader(ThreeJSLoaderWrapper._loaderManager)

  private static readonly _imageLoader = new TextureLoader(ThreeJSLoaderWrapper._loaderManager)

  private static  _base = ''

  static getInstance(): ThreeJSLoaderWrapper {
    if (ThreeJSLoaderWrapper._instance === null) {
      ThreeJSLoaderWrapper._instance = new ThreeJSLoaderWrapper()
      ThreeJSLoaderWrapper._gltfLoader.setDRACOLoader(ThreeJSLoaderWrapper._dracoLoader)
      ThreeJSLoaderWrapper._dracoLoader.setDecoderPath(`${ThreeJSLoaderWrapper._base}draco/`)
      ThreeJSLoaderWrapper._ktx2Loader.setTranscoderPath(`${ThreeJSLoaderWrapper._base}basis/`)
    }
    return ThreeJSLoaderWrapper._instance
  }

  public static initKTX2Loader(renderer: WebGLRenderer, base: string) {
    ThreeJSLoaderWrapper._ktx2Loader.detectSupport(renderer)
    ThreeJSLoaderWrapper._base = base
  }

  get loaderManager(): LoadingManager {
    return ThreeJSLoaderWrapper._loaderManager
  }

  async loadTexture(url: string, includeBase: boolean = false): Promise<Texture> {
    return ThreeJSLoaderWrapper._imageLoader.loadAsync(
      `${includeBase ? `${ThreeJSLoaderWrapper._base}${url}` : `${url}`}`,
    )
  }

  async loadGPUTexture(url: string): Promise<Texture> {
    return ThreeJSLoaderWrapper._ktx2Loader.loadAsync(`${ThreeJSLoaderWrapper._base}${url}`)
  }

  async loadEnvironmentMap(url: string) {
    return ThreeJSLoaderWrapper._ktx2Loader.loadAsync(`${ThreeJSLoaderWrapper._base}${url}`)
  }

  async loadGLTFModel(model: string): Promise<GLTF> {
    return ThreeJSLoaderWrapper._gltfLoader.loadAsync(`${ThreeJSLoaderWrapper._base}${model}`)
  }

  async parseGLTFModel(buffer: ArrayBuffer, url: string): Promise<GLTF> {
    return ThreeJSLoaderWrapper._gltfLoader.parseAsync(buffer, url)
  }
}
