<template>
  <li @mouseenter="isShow=true" @mouseleave="isShow=false" :class="{myClass:isShow}">
    <label>
      <input type="checkbox" :checked="todo.isOver" @click="updateT" />
      <span>{{todo.content}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="delteT">删除</button>
  </li>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
  name: "",
  props:['todo','index'],
  data(){
    return {
      isShow:false,

      todos:[]  //为了接收App传递过来的todos
    }
  },
  mounted(){
    this.$bus.$on('receive',this.receive)
  },
  methods:{
    updateT(){
      // this.updateTodo(this.index)
      this.$bus.$emit('updateTodo',this.index)
    },
    delteT(){
      // this.deleteTodo(this.index)
      PubSub.publish('haha',this.index)
    },

    //使用全局事件总线接收App当中的数据
    receive(todos){
      this.todos = todos
    }
  }

};
</script>

<style scoped>

.myClass{
  background-color: hotpink;
}
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
