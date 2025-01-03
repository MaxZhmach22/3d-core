import { Euler, type EulerOrder, Vector2, Vector3 } from 'three'
import type GUI from 'lil-gui'

export function findGUIFolder(gui: GUI, folderName: string) {
  const folder = gui.folders.find((folder: GUI) => folder['_title'] === folderName)
  if (!folder) {
    throw new Error(`Folder with name ${folderName} not found`)
  }
  return folder
}

/**
 * Lerp between two rotations
 * @param startRotation
 * @param endRotation
 * @param alpha
 * @param order
 */
export function lerpingRotation(
  startRotation: Euler,
  endRotation: Euler,
  alpha: number,
  order: EulerOrder = 'XYZ',
): Euler {
  const start = startRotation.toArray() as [number, number, number]
  const end = endRotation.toArray() as [number, number, number]
  const result = start.map((v, i) => v + (end[i] - v) * alpha)
  return new Euler(result[0], result[1], result[2], order)
}

/**
 * Wait for a certain amount of time
 * @param time
 * @returns {Promise<unknown>}
 */
export async function sleep(time: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

/**
 * Set the texture offset and repeat based on atlas coordinates
 * @param mesh - The mesh to apply the texture to
 * @param atlasConfig - The atlas configuration containing frame data
 * @param id - The identifier for the frame in the atlas
 */
export function getSpriteOffset(atlasConfig: any, id: string): Vector2 {
  // eslint-disable-next-line max-len
  const frameData = atlasConfig.frames.find(
    (frame: any) => frame.filename.toLowerCase() === id.toLowerCase(),
  )
  if (!frameData) throw new Error(`Frame with id ${id} not found in atlas config`)

  const { x, y, h } = frameData.frame
  const { size } = atlasConfig.meta
  const offsetY = y / size.h
  return new Vector2(x / size.w, offsetY)
}

export function getLengthVector(vector: Vector3): number {
  return vector.x * vector.x + vector.y * vector.y + vector.z * vector.z
}

/**
 * Map a value from one range to another
 * @param value
 * @param inMin
 * @param inMax
 * @param outMin
 * @param outMax
 */
// eslint-disable-next-line max-len
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
) {
  return ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin
}
