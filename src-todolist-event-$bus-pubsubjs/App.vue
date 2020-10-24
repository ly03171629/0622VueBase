<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- props组件通信，是真正的把属性传递到子组件内部，子组件内部通过属性可以获取到这个数据 -->
      <!-- <Header :addTodo="addTodo"></Header> -->
      <!-- 自定义事件通信，是在子组件对象身上绑定了一个事件，而没有给子组件传递任何数据 -->
      <!-- <Header @addTodo="addTodo"></Header> -->

      <Header ref="head"></Header>
      <!-- <List :todos="todos" :updateTodo="updateTodo" :deleteTodo="deleteTodo"></List> -->
      <List :todos="todos"></List>
      <Footer :todos="todos" @updateAll="updateAll" @deleteAll="deleteAll"></Footer>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import List from '@/components/List'
import Footer from '@/components/Footer'
import PubSub from 'pubsub-js'
export default {
  name: "",
  components:{
    Header,
    List,
    Footer
  },

  mounted(){
    // console.log(this.$refs.head)

    //自定义事件麻烦写法
    // this.$refs.head.$on('addTodo',this.addTodo)
    this.$refs.head.$once('addTodo',this.addTodo)


    //解绑事件方法，一般在销毁的钩子当中使用
    // this.$refs.head.$off('addTodo') //解绑这个类型的事件


    //全局事件总线用法(修改单个todo的完成状态)
    //在App当中找到bus 给bus绑定事件
    this.$bus.$on('updateTodo',this.updateTodo)


    //消息的订阅和发布用法
    //两个参数  第一个是消息名
    PubSub.subscribe('haha',this.deleteTodo)


    //从App给Item传递todos数据 使用全局事件总线
    this.$bus.$emit('receive',this.todos)
  },

  data(){
    return {
      //   {id:1,content:'抽烟',isOver:false},
      //   {id:2,content:'喝酒',isOver:true},
      //   {id:3,content:'烫头',isOver:false}
      // ]
      // localStorage获取数据获取不到 就是null
      todos: JSON.parse(localStorage.getItem('TODOS_KEY')) || []
    }
  },

  watch:{
    todos:{
      deep:true,
      handler(newVal,oldVal){
        // [object Object]
        localStorage.setItem('TODOS_KEY', JSON.stringify(newVal)) 
      }
    }
  },

  methods:{
    addTodo(todo){
      this.todos.unshift(todo)
    },
    updateTodo(index){
      this.todos[index].isOver = !this.todos[index].isOver
    },
    // deleteTodo(index){
    //   this.todos.splice(index,1)
    // },
    deleteTodo(msg,index){
      this.todos.splice(index,1)
    },
    updateAll(val){
      this.todos.forEach(item => item.isOver = val)
    },
    deleteAll(){
      this.todos = this.todos.filter(item => !item.isOver)
    }
  }
};
</script>

<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
