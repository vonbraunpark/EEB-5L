import * as path from "node:path";
import { defineConfig } from "@rspack/cli";
import {DefinePlugin, rspack} from "@rspack/core";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import { VueLoaderPlugin } from "vue-loader";

import { mfConfig } from "./module-federation.config";

const isDev = process.env.NODE_ENV === "development";

// Target browsers, see: https://github.com/browserslist/browserslist
const targets = ["chrome >= 87", "edge >= 88", "firefox >= 78", "safari >= 14"];

export default defineConfig({
  context: __dirname,
  entry: {
    main: "./src/index.tsx",
  },
  resolve: {
    extensions: ["...", ".ts", ".tsx", ".jsx"],
  },

  devServer: {
    port: 3200,
    historyApiFallback: true,
    watchFiles: [path.resolve(__dirname, "src")],

    setupMiddlewares: (middlewares, devServer) => {
      const envOrigins = process.env.MFE_CORS_ORIGIN ?? "";
      const allowedOrigins = envOrigins
          .split(",")
          .map(o => o.trim())
          .filter(Boolean);

      if (devServer?.app) {
        devServer.app.use((req, res, next) => {
          const origin = req.headers.origin;
          if (origin && allowedOrigins.includes(origin)) {
            res.setHeader("Access-Control-Allow-Origin", origin);
          }

          res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,POST,PUT,DELETE");
          res.setHeader("Access-Control-Allow-Headers", "*");

          if (req.method === "OPTIONS") {
            res.sendStatus(200);
          } else {
            next();
          }
        });
      }

      return middlewares;
    },
  },

  output: {
    // You need to set a unique value that is not equal to other applications
    uniqueName: "vue_board_app",
    // publicPath must be configured if using manifest
    publicPath: `${process.env.MFE_PUBLIC_SERVICE || 'http://localhost'}:3200/`,
  },

  experiments: {
    css: true,
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          experimentalInlineMatchResource: true,
        },
      },
      {
        test: /\.css$/,
        use: ["postcss-loader"],
        type: "css",
      },
      {
        test: /\.svg$/,
        type: "asset",
      },
      {
        test: /\.(jsx?|tsx?)$/,
        use: [
          {
            loader: "builtin:swc-loader",
            options: {
              jsc: {
                parser: {
                  syntax: "typescript",
                  tsx: true,
                },
              },
              env: { targets },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new rspack.HtmlRspackPlugin({
      template: "./index.html",
    }),
    new DefinePlugin({
      "process.env.VUE_APP_BASE_URL": JSON.stringify(process.env.VUE_APP_BASE_URL),
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    new ModuleFederationPlugin(mfConfig),
  ].filter(Boolean),
  optimization: {
    minimizer: [
      new rspack.SwcJsMinimizerRspackPlugin(),
      new rspack.LightningCssMinimizerRspackPlugin({
        minimizerOptions: { targets },
      }),
    ],
  },
});
