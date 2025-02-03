const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const NodemonPlugin = require("nodemon-webpack-plugin");

// Use export as a function to inspect `--mode`
module.exports = (env, argv) => {
  const is_production = argv.mode == "production";

  return {
    entry: {
      site: ["./src/css/site.less", "./src/js/site.js"],
    },
    externals: {
      moment: "moment",
    },
    output: {
      filename: "js/[name].js?[fullhash]",
      chunkFilename: "js/[name].js?[fullhash]",
      publicPath: "./",
      path: path.join(__dirname, "readthedocs_theme", "static"),
    },
    optimization: {
      minimize: is_production,
      minimizer: [new TerserPlugin(), new CssMinimizerPlugin({})],
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
            },
          ],
        },
        {
          test: /\.jpe?g$|\.gif$|\.png$|\.svg$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]?[fullhash]",
                outputPath: "css/images/",
                publicPath: "images/",
              },
            },
          ],
        },
        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]?[fullhash]",
                outputPath: "css/fonts/",
                publicPath: "fonts/",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        DEBUG_MODE: !is_production,
      }),
      new MiniCssExtractPlugin({
        filename: "css/[name].css?[fullhash]",
        chunkFilename: "css/[name].css?[fullhash]",
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jquery: "jquery",
        "window.jQuery": "jquery",
        jQuery: "jquery",
      }),
      new NodemonPlugin({
        exec: "poetry run pelican content",
        script: "",
        args: [],
        watch: [
          path.join(__dirname, "readthedocs_theme"),
          path.join(__dirname, "content"),
        ],
        ext: "md,rst,html",
        delay: "1000",
        verbose: true,
      }),
    ],
    resolve: {
      alias: {
        "../../theme.config": path.join(__dirname, "src/sui/theme.config"),
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
      allowedHosts: "all",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      static: [
        {
          directory: path.join(__dirname, "output"),
        },
        {
          directory: path.join(__dirname, "readthedocs_theme", "static"),
          publicPath: "/theme/css/",
        },
        {
          directory: path.join(__dirname, "readthedocs_theme", "static"),
          publicPath: "./",
        },
      ]
    },
  };
};
