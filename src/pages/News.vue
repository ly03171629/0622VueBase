<template>
  <div role="tabpanel" class="tab-panel" id="News">
    <ul class="list-group">
      <li class="list-group-item" v-for="(n,index) in news" :key="n.id">
        {{n.content}}
        <!-- 这里不用router-link 用router-link我们称为声明式导航，这里我们准备用编程式导航-->
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="button"
          aria-pressed="false"
          autocomplete="off"
          @click="handlerNews(n)"
        >{{n.id}}</button>
      </li>
    </ul>
    <button @click="$router.back()">返回</button>
    <div class="alert alert-success" role="alert">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data(){
    return {
      news:[
        {id:1,content:'newsOne'},
        {id:2,content:'newsTwo'},
        {id:3,content:'newsThree'},
      ]
    }
  },
  methods:{
    handlerNews(n){
      //push会保存历史记录
      // this.$router.push(`/home/news/newsdetail/${n.id}?content=${n.content}`)

      //replace不会保存历史记录
      this.$router.replace({name:'newsDetail',params:{newsId:n.id},query:{content:n.content}})
    }
  }
};
</script>

<style scoped>
</style>
