module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    "plugins": [
      ["module-resolver", {
        "root": ["./src"],
        "alias": {
          "@theme": "./src/theme",
        },
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ]
      }]
    ]
  };
};