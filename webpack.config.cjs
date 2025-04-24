const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/ui/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader"
      },
      {
        test: /\.worker\.ts$/,

      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "public", to: "./" }
      ]
    })
  ],
  devtool: "source-map",
  mode: "development",
  experiments: {
    outputModule: true
  }
};