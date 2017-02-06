
export default {
  context: __dirname + '/src',
  entry: {
    app: './index'
  },
  output: {
    path: __dirname + '/dist',
    libraryTarget: 'umd',
    library: 'trivial'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'stage-2'] }
        }]
      },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  }
};