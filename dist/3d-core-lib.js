import { Vector3 as o } from "three";
class t {
  init() {
    console.log("Game initialized", new o(1, 2, 3));
  }
  update() {
    console.log("Game updated");
  }
}
const a = {
  BackgroundOpt: Symbol.for("BackgroundOpt"),
  GyroScopeOpt: Symbol.for("GyroScopeOpt"),
  GameInitializer: Symbol.for("GameInitializer")
};
export {
  a as GAM,
  t as GameInitializer
};
