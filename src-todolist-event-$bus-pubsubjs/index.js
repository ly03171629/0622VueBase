import Vue from 'vue'
import App from '@/App'

//这样写没问题，就是得多实例化一个Vue的实例vm
// Vue.prototype.$bus = new Vue() //这样把一个Vue的实例添加到Vue的原型当中，我们叫做安装总线

new Vue({
  beforeCreate(){
    Vue.prototype.$bus = this //安装总线
  },
  el:'#root',
  render: h => h(App)
})