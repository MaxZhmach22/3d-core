export declare class ArchiveExtractor {
    private archiveUrl;
    private _files;
    get files(): Record<string, Uint8Array<ArrayBufferLike>>;
    constructor(archiveUrl: string);
    extract(retries?: number, delay?: number): Promise<void>;
    getFileContent(fileName: string): Uint8Array;
}
