import Vue from 'vue'
import App from '@/App'
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  el:'#root',
  render: h => h(App),
  router //当我们安装上router的时候，每个组件对象当中都可以通过this.$router拿到路由器对象
        // 同时每个组件对象都可以通过this.$route拿到当前路由对象
})