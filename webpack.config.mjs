import path from "path";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import NodemonPlugin from "nodemon-webpack-plugin";

// Use export as a function to inspect `--mode`
export default (env, argv) => {
  const is_production = argv.mode == "production";

  return {
    entry: {
      site: ["./src/css/site.less", "./src/js/site.js"],
    },
    externals: {
      moment: "moment",
    },
    output: {
      filename: "js/[name].js?[contenthash]",
      chunkFilename: "js/[name].js?[contenthash]",
      publicPath: "./",
      path: path.resolve(path.join("readthedocs_theme", "static")),
    },
    optimization: {
      minimize: is_production,
      minimizer: [
        new TerserPlugin({
          // Avoids creating a `.LICENSE.txt` file
          extractComments: false,
          terserOptions: {
            sourceMap: true,
          },
        }),
        new CssMinimizerPlugin(),
      ],
      chunkIds: "named",
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/].*\.js/,
            name: "vendor",
            chunks: "initial",
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          resolve: {
            // Disable Webpack 5 full resolution for ES modules
            fullySpecified: false,
          },
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader",
            },
            {
              loader: "less-loader",
              options: {
                lessLogAsWarnOrErr: true,
                lessOptions: {
                  // LESS loader will try to load these before Webpack resolver
                  // kicks in, which is the recommended method. These include
                  // paths are a hack to theme.config and the theme loading
                  // pattern. See `src/sui/theme.config` for more.
                  paths: [
                    path.resolve(path.join(".")),
                    path.resolve(path.join("src/sui/")),
                    path.resolve(
                      path.join("node_modules/@readthedocs/sui-common-theme/"),
                    ),
                    path.resolve(path.join("node_modules/fomantic-ui-less/")),
                  ],
                },
              },
            },
          ],
        },
        {
          test: /\.jpe?g$|\.gif$|\.png$|\.svg$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]?[contenthash]",
                outputPath: "css/images/",
                publicPath: "../css/images/",
              },
            },
          ],
        },
        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          type: "asset/resource",
          generator: {
            filename: "css/fonts/[name][ext]?[contenthash]",
            publicPath: "../",
          },
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        DEBUG_MODE: !is_production,
      }),
      new MiniCssExtractPlugin({
        filename: "css/[name].css?[contenthash]",
        chunkFilename: "css/[name].css?[contenthash]",
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jquery: "jquery",
        "window.jQuery": "jquery",
        jQuery: "jquery",
      }),
      new NodemonPlugin({
        exec: "uv run pelican content",
        script: "",
        args: [],
        watch: [path.resolve("readthedocs_theme"), path.resolve("content")],
        ext: "md,rst,html",
        delay: "1000",
        verbose: true,
      }),
    ],
    resolve: {
      alias: {
        "../../theme.config": path.resolve(path.join("src/sui/theme.config")),
      },
      extensions: [".less", ".js", ".json", ".overrides", ".variables"],
    },

    // Development options
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: ["./node_modules/"],
    },
    devServer: {
      open: false,
      hot: false,
      liveReload: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      devMiddleware: {
        publicPath: path.resolve("output"),
        index: true,
      },
      static: {
        directory: path.resolve("output"),
        serveIndex: true,
      },
      allowedHosts: "all",
      watchFiles: ["output/**/*.html"],
      client: {
        overlay: false,
      },
    },
    devtool: "source-map",
  };
};
