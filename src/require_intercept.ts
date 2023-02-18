// REQUIRE-INTERCEPT
import Module from "module";

const _require = Module.prototype.require;

Module.prototype.require = new Proxy(Module.prototype.require, {
  apply(target, arg, argList) {
    let name = argList[0];

    if (/vscode/g.test(name)) {
      name = "vscode";
    }

    return Reflect.apply(target, arg, argList);
  },
});
