<template>
  <div>
    <Header></Header>
    <div class="container">
      <Add :addComment="addComment"></Add>
      <List :comments="comments" :deleteComment="deleteComment"></List>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Add from '@/components/Add'
import List from '@/components/List'
export default {
  name: '',
  components:{
    Header,
    Add,
    List
  },
  data(){
    return {
      comments:[
        {id:1,content:'嘿嘿',username:'aaa'},
        {id:2,content:'呵呵',username:'bbb'},
        {id:3,content:'哈哈',username:'ccc'}
      ]
    }
  },
  methods:{
    addComment(comment){
      this.comments.unshift(comment)
    },
    deleteComment(index){
      this.comments.splice(index,1)
    }
  }
}
</script>

<style scoped>

</style>
