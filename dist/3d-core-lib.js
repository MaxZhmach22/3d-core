class e {
  init() {
    console.log("Game initialized");
  }
  update() {
    console.log("Game updated");
  }
}
const i = {
  BackgroundOpt: Symbol.for("BackgroundOpt"),
  GyroScopeOpt: Symbol.for("GyroScopeOpt"),
  GameInitializer: Symbol.for("GameInitializer")
};
export {
  i as GAM,
  e as GameInitializer
};
