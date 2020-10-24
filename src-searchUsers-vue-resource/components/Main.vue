<template>
  <div>
    <h2 v-if="isFirst">欢迎光临，请输入关键字进行搜索</h2>
    <h2 v-else-if="isLoading">正在搜索中，请稍后</h2>
    <h2 v-else-if="errMsg">请求失败--{{ errMsg }}</h2>
    <div class="row" v-else>
      <div class="card" v-for="(user,index) in users" :key="user.username">
        <a :href="user.userUrl" target="_blank">
          <img
            :src="user.userImg"
            style="width: 100px"
          />
        </a>
        <p class="card-text">{{user.username}}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource) //声明使用插件，就是调用插件内部的install方法
console.log(Vue.prototype)
export default {
  name: "",
  data() {
    return {
      isFirst: true,
      isLoading: false,
      users: [],
      errMsg: "",
    };
  },
  mounted() {
    this.$bus.$on("searchAjax", this.searchAjax);
  },
  methods: {
    searchAjax(q) {
      //发请求
      // 请求之前变为正在搜索
      this.isFirst = false
      this.isLoading = true

      this.$http({
        url: "https://api.github.com/search/user",
        method: "get",
        params: {
          q,
        },
      })
        .then((response) => {
          // avatar_url: "https://avatars1.githubusercontent.com/u/28438?v=4";
          // login: "aa";
          // url: "https://api.github.com/users/aa";
          
          this.isLoading = false
          this.errMsg = ''
          let users = response.data.items.map(item => ({
            username : item.login,
            userImg:item.avatar_url,
            userUrl:item.url
          }))
          this.users = users
        })
        .catch((error) => {
          this.isLoading = false
          this.users = []
          this.errMsg = error.statusText  //使用vue-resource请求的错误信息和axios不一样
        });
    },
  },
};
</script>

<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>

