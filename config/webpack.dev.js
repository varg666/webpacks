const path = require('path');

module.exports = {
  entry: {
    main: ['./src/main.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  devServer: {
    contentBase: "dist",
    overlay: true
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: [{
          loader: 'babel-loader'
        }],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.html$/,
        use: [{
            loader: 'file-loader',
            options: {
              name: '[name].html'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src']
            }
          }
        ]
      },
      {
        test: /\.(jpg|git|png)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]'
          }
        }]
      }
    ]
  }
}
