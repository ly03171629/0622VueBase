<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="content" @keyup.enter="addT" />
  </div>
</template>

<script>
export default {
  name: "",
  props:['addTodo'],
  data(){
    return {
      content:''
    }
  },
  methods:{
    addT(){
      let content = this.content
      if(content.trim()){
        let id = Date.now()
        let isOver = false
        let obj = {
          content,
          isOver,
          id
        }
        // this.addTodo(obj)
        //this在组件当中代表的是组件对象
        //this在Vue当中代表的是vm
        //可以认为组件对象就是一个小的vm

        this.$emit('addTodo',obj)
      }
      this.content = ''
    }
  }
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
