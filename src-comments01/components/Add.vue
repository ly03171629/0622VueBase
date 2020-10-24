<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="username" />
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea
          class="form-control"
          rows="6"
          placeholder="评论内容"
          v-model="content"
        ></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="addC">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "",
  props:['addComment'],
  data(){
    return {
      username:'',
      content:''
    }
  },
  methods:{
    addC(){
      //把收集的数据组装成一个新的对象  然后想办法添加comments数组当中
      let {username,content} = this
      if(username.trim() && content.trim()){
        let id = Date.now()

        let obj = {
          username,
          content,
          id
        }

        //在这里我们需要往comments数据当中添加一个对象
        //但是不能把数据传递到这个组件去添加
        //我们要遵循的原则：
        // 数据在哪个，我们就应该调用哪个组件的方法 去添加数据(数据在哪，应该把哪的一个方法传递过来，让这个组件调用)

        this.addComment(obj)

        this.username = ''
        this.content = ''

      }

    }
  }
};
</script>

<style scoped>
</style>
