import Vue from "vue"
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex)

const state = {
  isFirst: true,
  isLoading: false,
  users: [],
  errMsg: "",
}

const mutations = {
  REQUESTING(state){
    state.isFirst = false
    state.isLoading = true
  },
  REQUSTSUCCESS(state,users){
    state.users = users
    state.isLoading = false
    state.errMsg = ''
  },
  REQUESTFAILD(state,error){
    state.isLoading = false
    state.users = []
    state.errMsg = error.message
  }
}

const actions = {
  async search(context,q){
    //发请求
      // 请求之前变为正在搜索
      context.commit('REQUESTING')
      // await等待promise成功的结果
      try {
        let response = await axios({
        url: "https://api.github.com/search/users",
        method: "get",
        params: {
          q,
        },
      })
        
          let users = response.data.items.map(item => ({
            username : item.login,
            userImg:item.avatar_url,
            userUrl:item.url
          }))

          context.commit('REQUSTSUCCESS',users)
          
      } catch (error) {
        context.commit('REQUESTFAILD',error)
      }
  }
}

const getters = {

}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})