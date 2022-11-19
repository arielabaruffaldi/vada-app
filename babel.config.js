module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    "plugins": [
      ["module-resolver", {
        "root": ["./src"],
        "alias": {
          "@theme": "./src/theme",
          '@assets': './src/assets',
          '@atoms': './src/components/atoms',
          '@molecules': './src/components/molecules',
          '@organisms': './src/components/organisms',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@store': './src/store',
          '@containers': './src/containers',
          '@navigation': './src/navigation',
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
