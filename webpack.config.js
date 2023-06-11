const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/main.ts", // 入口
  mode: "development",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: "file-loader", // 使用 file-loader 處理圖片
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css", // 指定生成的 CSS 文件名
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".vue"],
  },
  output: {
    path: path.resolve(__dirname, "dist"), // 輸出位置
    filename: "index.js", // 輸出檔案名稱
  },
};
