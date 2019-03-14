const path = require("path");

module.exports = {
    mode: "development",
    entry: "./web/public/index.js",
    output: {
      path: path.resolve(__dirname, "web/dist"),
      filename: "bundle.js",
    },
    devServer: {
      hot: true,
      port: 8080,
      historyApiFallback: true,
      contentBase: path.join(__dirname,'./web/public')
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: [/node_modules/],
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"]
              }
            }
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          }
        ]
      },
      resolve: {
        alias: {
          'react-native$': 'react-native-web'
        }
      }
}