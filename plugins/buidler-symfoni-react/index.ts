import { extendConfig } from "@nomiclabs/buidler/config";
// import { lazyObject } from "@nomiclabs/buidler/plugins";

// Everything in a plugin must happen inside an exported function
export default function() {
  extendConfig((config, userConfig) => {
    if (userConfig.react == undefined) {
      config.react = {};
    }
    if (userConfig.paths?.react === undefined) {
      config.paths = { ...config.paths, react: "./frontend/src/buidler" };
    }
  });
}
