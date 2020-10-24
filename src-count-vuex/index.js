import Vue from 'vue'
import App from '@/App'
import store from '@/store'

new Vue({
  el:'#root', 
  render: h => h(App),
  store   //只有在这声明使用store对象，那么结果就是每个组件对象当中都可以通过this.$store找到这个store对象
})