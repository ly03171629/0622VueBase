const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },

  //配置loader的地方
  module: {
    rules: [
      //解析es6
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      //解析css
      {
        test: /\.css$/,
        use: [ 'vue-style-loader', 'css-loader' ]
      },

      //解析图片
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            }
          }
        ]
      },
      //配置Vue所需loader
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }

    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/public/index.html'
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
  ],

  // mode:'development',

  devServer:{
    port:9000,
    open:true,
    quiet:true
  },

  devtool:'cheap-module-eval-source-map',

  resolve:{
    extensions: [".js", ".json", ".vue"], //配置可以省略的文件后缀
    alias: {
      '@':path.resolve(__dirname,'src') //配置@作为src目录绝对路径的别名
    }
  }

};