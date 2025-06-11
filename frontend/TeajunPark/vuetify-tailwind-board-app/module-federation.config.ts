export const mfConfig = {
  name: "vuetifyTailwindBoardApp",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/bootstrap",
  },
  shared: ["vue"],
  dts: false
};
