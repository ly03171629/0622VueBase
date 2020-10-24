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
      this.$bus.$emit('searchAjax',this.keyword)
    }
  }
};
</script>

<style scoped>
</style>
