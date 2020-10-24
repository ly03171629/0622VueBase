//第一步 安装vuex

//第二步  引入vuex并声明使用
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)



//state是一个对象，包含了多个属性数据的对象，这个state就是以后我们存储数据的地方
const state = {
  count:0
}
//mutations是一个对象，包含了多个方法数据的对象，这个mutations是专门用来直接修改数据的方法对象
//直接修改的意思，就是只能给state当中的数据进行赋值操作，不允许出现 if  for  异步
const mutations = {
  INCREMENT(state){
    state.count++
  },
  DECREMENT(state){
    state.count--
  }
}

//actions是一个对象，包含了多个方法数据的对象，这个actions是专门用来和组件当中用户操作进行对接的方法对象
//也就是说这里面的方法是用来让用户去触发的
//actions方法对象还有一个作用，当接收到用户触发以后，去提交给相应的mutations对数据进行相关操作
//actions方法当中可以写 if   for   异步
const actions = {
  iincrement(context){
    //context本质就是我们的store对象，它是对store对象做了封装，比store对象东西多，store对象内部有的东西，context都有
    context.commit('INCREMENT')
  },
  decrement(context){
    context.commit('DECREMENT')
  },
  incrementIfOdd(context){
    if(context.state.count % 2 === 1){
      context.commit('INCREMENT')
    }
  },
  incrementAsync({commit}){
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000);
  }

}



//getters 也是一个对象，包含了多个方法数据的对象，这个对象内部都是根据已有的state内部数据计算而产生的新的数据
const getters = {
}

//第三步： 向外要暴露一个对象,这个对象是一个Store对象，实例化的时候需要传递一个配置对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

//第四步： 在Vue的配置对象当中声明使用store对象




