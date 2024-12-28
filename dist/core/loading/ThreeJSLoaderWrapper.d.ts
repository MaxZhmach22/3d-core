import { LoadingManager, Texture, WebGLRenderer } from 'three';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
export declare class ThreeJSLoaderWrapper {
    private static _instance;
    private static readonly _loaderManager;
    private static readonly _dracoLoader;
    private static readonly _gltfLoader;
    static readonly _ktx2Loader: KTX2Loader;
    private static readonly _imageLoader;
    private static readonly _base;
    static getInstance(): ThreeJSLoaderWrapper;
    static initKTX2Loader(renderer: WebGLRenderer): void;
    get loaderManager(): LoadingManager;
    loadTexture(url: string, includeBase?: boolean): Promise<Texture>;
    loadGPUTexture(url: string): Promise<Texture>;
    loadEnvironmentMap(url: string): Promise<import('three').CompressedTexture>;
    loadGLTFModel(model: string): Promise<GLTF>;
    parseGLTFModel(buffer: ArrayBuffer, url: string): Promise<GLTF>;
}
