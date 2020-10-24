<template>
  <div>
    <h2 v-if="isFirst">欢迎光临，请输入关键字进行搜索</h2>
    <h2 v-else-if="isLoading">正在搜索中，请稍后</h2>
    <h2 v-else-if="errMsg">请求失败--{{ errMsg }}</h2>
    <div class="row" v-else>
      <div class="card" v-for="(user, index) in users" :key="user.username">
        <a :href="user.userUrl" target="_blank">
          <img :src="user.userImg" style="width: 100px" />
        </a>
        <p class="card-text">{{ user.username }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
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

    //async 代表异步的意思 
    //async 都是在函数前面写的，代表这个函数是一个异步函数
    //async 函数一定返回的是promise对象  不看函数的return
    //async 函数返回的promise成功还是失败  看 return

    //async 函数返回的promise成功和失败状态  return的结果不一样，成功和失败的状态就不一样

    // 1、如果返回的是非promise对象的正常值，那么这个promise就是成功的   包含我们所有的数据类型（数字 字符串 undefined null 布尔值  数组  函数  对象 ） 
    // 2、如果返回的是promise对象 那么就看返回的promise是成功还是失败
    //   如果返回的是成功的promise那么，我们的promise对象就是成功的
    //   如果返回的是失败的promise那么，我们的promise对象就是失败的

    // 3、如果函数抛出异常，那么我们的promise对象也是失败的



    //async和await 是es8当中正式使用的  webpack在解析的时候需要引入babel的补丁包


    async searchAjax(q) {
      //发请求
      // 请求之前变为正在搜索
      this.isFirst = false
      this.isLoading = true

      // await等待promise成功的结果
      try {
        let response = await axios({
        url: "https://api.github.com/search/users",
        method: "get",
        params: {
          q,
        },
      })
        this.isLoading = false
          this.errMsg = ''
          let users = response.data.items.map(item => ({
            username : item.login,
            userImg:item.avatar_url,
            userUrl:item.url
          }))
          this.users = users
      } catch (error) {
        this.isLoading = false
          this.users = []
          this.errMsg = error.message
      }
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

