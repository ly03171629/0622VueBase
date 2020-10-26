//第一步：安装

//第二步：引入并声明使用
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)




//第三步：向外暴露一个路由器对象
import Home from '@/pages/Home'
import About from '@/pages/About'
import Message from '@/pages/Message'
import News from '@/pages/News'
import MessageDetail from '@/pages/MessageDetail'
import NewsDetail from '@/pages/NewsDetail'


export default new VueRouter({
  //这个配置对象内部是后面我们要去定义的路由，还可以设置路由模式
  mode:'history',
  routes:[
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'message',
          component:Message,
          children:[
            {
              path:'msgdetail/:msgId',
              component:MessageDetail,
              name:'msgDetail',  //命名路由
              // props:true  // props  
              //   如果写的是布尔值，代表会把解析的params参数除了给最后的路由对象，
              //   还有把params参数映射为路由组件对象的属性数据去使用
              //   这种写法只能映射params参数

              // props:{username:'赵丽颖'}  //props写为对象，只能映射静态数据 额外想给组件对象其它的数据

              // {path:'',params:{},query:{}}
              //props如果用函数，可以把params和query参数都映射为路由组件的属性去使用
              props(route){
                return {msgId:route.params.msgId,content:route.query.content}
              }
            }
          ]
        },
        {
          path:'news',
          component:News,
          children:[
            {
              path:'newsdetail/:newsId',
              component:NewsDetail,
              name:'newsDetail'
            }
          ]
        },
        {
          path:'',
          redirect:'message'
        }
      ]
    },
    {
      path:'/about',
      component:About
    },
    {
      //重定向路由
      path:'/',
      redirect:'/home',//redirect重定向
    }
  ]
})


//第四步：在Vue的配置对象当中注册使用路由器对象