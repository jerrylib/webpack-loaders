module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  mode: 'production',
  // devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: [{
        loader: './loaders/demo2/async-loader.js',
        options: {
          userId: '180505'
        }
      }, {
        loader: './loaders/demo1/demo-loader.js?userName=jiaqi'
      }, {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }]
    }]
  }
}