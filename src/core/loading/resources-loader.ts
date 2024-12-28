import { LoadingManager, Texture, TextureLoader, WebGLRenderer } from 'three'
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { type GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export class ResourcesLoader {
  private static _instance: ResourcesLoader | null = null

  private static readonly _loaderManager = new LoadingManager()

  private static readonly _dracoLoader = new DRACOLoader(ResourcesLoader._loaderManager)

  private static readonly _gltfLoader = new GLTFLoader(ResourcesLoader._loaderManager)

  static readonly _ktx2Loader = new KTX2Loader(ResourcesLoader._loaderManager)

  private static readonly _imageLoader = new TextureLoader(ResourcesLoader._loaderManager)

  // @ts-ignore
  private static readonly _base = import.meta.env.BASE_URL

  static getInstance(): ResourcesLoader {
    if (ResourcesLoader._instance === null) {
      ResourcesLoader._instance = new ResourcesLoader()
      ResourcesLoader._gltfLoader.setDRACOLoader(ResourcesLoader._dracoLoader)
      ResourcesLoader._dracoLoader.setDecoderPath(`${ResourcesLoader._base}draco/`)
      ResourcesLoader._ktx2Loader.setTranscoderPath(`${ResourcesLoader._base}basis/`)
    }
    return ResourcesLoader._instance
  }

  public static initKTX2Loader(renderer: WebGLRenderer) {
    ResourcesLoader._ktx2Loader.detectSupport(renderer)
  }

  get loaderManager(): LoadingManager {
    return ResourcesLoader._loaderManager
  }

  async loadTexture(url: string, includeBase: boolean = false): Promise<Texture> {
    return ResourcesLoader._imageLoader.loadAsync(
      `${includeBase ? `${ResourcesLoader._base}${url}` : `${url}`}`,
    )
  }

  async loadGPUTexture(url: string): Promise<Texture> {
    return ResourcesLoader._ktx2Loader.loadAsync(`${ResourcesLoader._base}${url}`)
  }

  async loadEnvironmentMap(url: string) {
    return ResourcesLoader._ktx2Loader.loadAsync(`${ResourcesLoader._base}${url}`)
  }

  async loadGLTFModel(model: string): Promise<GLTF> {
    return ResourcesLoader._gltfLoader.loadAsync(`${ResourcesLoader._base}${model}`)
  }

  async parseGLTFModel(buffer: ArrayBuffer, url: string): Promise<GLTF> {
    return ResourcesLoader._gltfLoader.parseAsync(buffer, url)
  }
}
