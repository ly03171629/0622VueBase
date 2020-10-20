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
      //数据在哪定义： 就看哪个组件用还是哪些个组件用   
      comments:[
        {id:1,username:'aaa',content:'Vue不错'},
        {id:2,username:'bbb',content:'Vue挺好'},
        {id:3,username:'ccc',content:'Vue666'},
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
