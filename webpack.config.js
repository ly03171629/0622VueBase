const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: ["@babel/polyfill", './src/index.js'],

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
        use: [ 'vue-style-loader','style-loader', 'css-loader' ]
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
    new CopyWebpackPlugin([{
      from:path.resolve(__dirname,'src/public'),
      to:path.resolve(__dirname,'dist'),
      ignore:['index.html']
    }])
  ],

  // mode:'development',

  devServer:{
    port:9000,
    open:true,
    quiet:true,
    proxy: {
      // /api代表的是路径当中以什么开头，也是在告诉webpack-dev-server 哪些请求需要代理转发
      // 首先要发送请求，不应该直接往目标服务器去发请求，这样一定跨域
      // 所以首先我们往本地服务器去发请求，这样webpack才能知道你发的是什么请求
      
      // 发送的路径      http://localhost:9000/api/users/info
      // 最终的目标路径  http://localhost:4000/users/info

      "/api": {
          target: "http://localhost:4000", //这一步完成后http://localhost:4000/api/users/info
          pathRewrite: {"^/api" : ""}, //这一步走完 http://localhost:4000/users/info
          changeOrigin:true  //这一项代表同源策略有任何一项改变都去转发
      }


    }
  },

  devtool:'cheap-module-eval-source-map',

  resolve:{
    extensions: [".js", ".json", ".vue"], //配置可以省略的文件后缀
    alias: {
      '@':path.resolve(__dirname,'src') //配置@作为src目录绝对路径的别名
    }
  }

};