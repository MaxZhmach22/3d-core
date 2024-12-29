import { CompressedTexture, type WebGLRenderer } from 'three'
import {ThreeJSLoaderWrapper} from "./ThreeJSLoaderWrapper";
import {ArchiveExtractor} from "./ArchiveExtractor";
import {ModelsResources} from "./ModelsResources";
import {TexturesResources} from "./TexturesResources";
import {injectable} from "inversify";

@injectable()
export class ResourceLoader {
  public init(renderer: WebGLRenderer, basePath: string): void {
    ThreeJSLoaderWrapper.initKTX2Loader(renderer, basePath)
  }

  public async load(modelsPath: string, texturesPath: string): Promise<void> {
    const loader = ThreeJSLoaderWrapper.getInstance()
    await this.loadModelResources(loader, modelsPath)
    await this.loadTextureResources(loader, texturesPath)
  }

  private async loadModelResources(
    loader: ThreeJSLoaderWrapper,
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
    loader: ThreeJSLoaderWrapper,
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
            ThreeJSLoaderWrapper._ktx2Loader.parse(fileContent.buffer, resolve, reject)
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
