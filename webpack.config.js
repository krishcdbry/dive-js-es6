module.exports = {
  entry: `${__dirname}/src/app.js`
  , output: {
      path: `${__dirname}/dist/final.js`
  }
  , module: {
    loaders: [
      {
        test: '/\.js$/',
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
