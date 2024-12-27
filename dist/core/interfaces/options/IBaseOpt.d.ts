export interface IBaseOpt {
    camera: {
        fov: number;
        aspect: number;
        near: number;
        far: number;
        position: {
            x: number;
            y: number;
            z: number;
        };
    };
    antialias: boolean;
    colorSpace: string;
}
