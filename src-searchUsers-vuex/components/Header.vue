<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyword" />
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "",
  data(){
    return {
      keyword:''
    }
  },
  methods:{
    search(){
      // 如果我们提交给actions需要传递参数，那么参数必须只能一个值
      // 如果是多个值，必须封装为一个对象去传递
      this.$store.dispatch('search',this.keyword)
    }
  }
};
</script>

<style scoped>
</style>
