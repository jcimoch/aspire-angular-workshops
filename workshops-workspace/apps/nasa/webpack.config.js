const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: () => [
          require('postcss-short')(),
        ]
      }
  }
]
},
plugins: []
}
