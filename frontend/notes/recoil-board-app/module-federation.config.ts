export const mfConfig = {
  name: "recoilBoardApp",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App",
  },
  shared: {
    react: { singleton: true, requiredVersion: "^18.2.0" },
    "react-dom": { singleton: true, requiredVersion: "^18.2.0" },
    "@mui/material": { singleton: true, requiredVersion: "^7.0.1" },
    "react-router-dom": { singleton: true, requiredVersion: "^6.30.0" },
  },
  dts: false
};
