import { Euler, EulerOrder, Vector2, Vector3 } from 'three';
import { default as GUI } from 'lil-gui';
export declare function findGUIFolder(gui: GUI, folderName: string): GUI;
/**
 * Lerp between two rotations
 * @param startRotation
 * @param endRotation
 * @param alpha
 * @param order
 */
export declare function lerpingRotation(startRotation: Euler, endRotation: Euler, alpha: number, order?: EulerOrder): Euler;
/**
 * Wait for a certain amount of time
 * @param time
 * @returns {Promise<unknown>}
 */
export declare function sleep(time: number): Promise<void>;
/**
 * Set the texture offset and repeat based on atlas coordinates
 * @param mesh - The mesh to apply the texture to
 * @param atlasConfig - The atlas configuration containing frame data
 * @param id - The identifier for the frame in the atlas
 */
export declare function getSpriteOffset(atlasConfig: any, id: string): Vector2;
export declare function getLengthVector(vector: Vector3): number;
/**
 * Map a value from one range to another
 * @param value
 * @param inMin
 * @param inMax
 * @param outMin
 * @param outMax
 */
export declare function mapRange(value: number, inMin: number, inMax: number, outMin: number, outMax: number): number;
