const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // file to include
        exclude: /(node_modules|bower_components)/, // files to exclude
        loader: 'babel-loader', // loader -> single loader , // use -> multiple
        options: { presets: ['env'] }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] }, // import modules withour the extensions, 
  //webpack will resolve if we did not specify these extensions during import
  output: {
    path: path.resolve(__dirname, "dist/"), // output bundled files
    publicPath: "/dist/", // files are served from here by webpack-dev-server
    // on-demand-loading or loading external resources like images
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/", // bundled file will be here
    hotOnly: true
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ]
};