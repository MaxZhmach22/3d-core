import { CompressedTexture, type WebGLRenderer } from 'three'
import {ResourcesLoader} from "./resources-loader";
import {ArchiveExtractor} from "./archive-extractor";
import {ModelsResources} from "./models-resources";
import {TexturesResources} from "./textures-resources";
import {injectable} from "inversify";

@injectable()
export class ResourceLoader {
  public init(renderer: WebGLRenderer): void {
    ResourcesLoader.initKTX2Loader(renderer)
  }

  public async load(modelsPath: string, texturesPath: string): Promise<void> {
    const loader = ResourcesLoader.getInstance()
    await this.loadModelResources(loader, modelsPath)
    await this.loadTextureResources(loader, texturesPath)
  }

  private async loadModelResources(
    loader: ResourcesLoader,
    archivePath: string,
  ) {
    const extractor = new ArchiveExtractor(archivePath)

    try {
      await extractor.extract()

      for (const file in extractor.files) {
        const fileContent = extractor.getFileContent(file)
        const blob = new Blob([fileContent])
        const url = URL.createObjectURL(blob)
        // @ts-expect-error Тип не определен
        const model = await loader.parseGLTFModel(fileContent.buffer, url)
        ModelsResources.set(file.split('.')[0], model)
      }
    } catch (error: unknown) {
      // @ts-expect-error Тип ошибки не определен
      console.error(error.message)
    }
  }

  private async loadTextureResources(
    loader: ResourcesLoader,
    archivePath: string,
  ) {
    const extractor = new ArchiveExtractor(archivePath)

    try {
      await extractor.extract()

      for (const file in extractor.files) {
        const fileContent = extractor.getFileContent(file)
        const isKtx2 = file.includes('.ktx2')
        if (isKtx2) {
          const texture = await new Promise<CompressedTexture>((resolve, reject) => {
            // @ts-expect-error Тип не определен
            ResourcesLoader._ktx2Loader.parse(fileContent.buffer, resolve, reject)
          })
          TexturesResources.set(file.split('.')[0], texture)
        } else {
          const blob = new Blob([fileContent], {
            type: 'application/octet-stream',
          })
          const url = URL.createObjectURL(blob)
          const texture = await loader.loadTexture(url)
          TexturesResources.set(file.split('.')[0], texture)
          URL.revokeObjectURL(url)
        }
      }
    } catch (error: unknown) {
      // @ts-expect-error Тип ошибки не определен
      console.error(error.message)
    }
  }
}