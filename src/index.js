// import Vue from 'vue/dist/vue.esm.js' //带解析器版本的js
import Vue from 'vue' //不带解析器版本的js runtime-only版本
import App from '@/App'



//第一种写法 
//使用带解析器的版本的vue去解析
// 定义带注册App  通过模板解析器去解析App
// new Vue({
//   el:'#root',
//   components:{
//     App
//   },
//   template:'<App />'
// })


//第二种写法
//使用不带解析器版本的vue去解析
new Vue({
  el:'#root',
  render: h => h(App)  // 第一定义并注册App    第二步解析渲染 （使用自己安装的解析器）App
})
