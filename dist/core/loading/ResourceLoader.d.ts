import { WebGLRenderer } from 'three';
export declare class ResourceLoader {
    init(renderer: WebGLRenderer): void;
    load(modelsPath: string, texturesPath: string): Promise<void>;
    private loadModelResources;
    private loadTextureResources;
}
