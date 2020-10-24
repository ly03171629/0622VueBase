<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- props传递函数 -->
      <!-- <Header :addTodo="addTodo"></Header>  -->

      <!-- 自定义事件通信简单写法 -->
      <!-- <Header @addTodo="addTodo"></Header>   -->
      <Header ref="head"></Header>  
      <!--组件标签使用一次 就会有一个新的组件对象产生  -->


      <List :todos="todos" :updateTodo="updateTodo" :deleteTodo="deleteTodo"></List>
      <Footer :todos="todos" :updateAll="updateAll" :deleteAll="deleteAll"></Footer>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import List from '@/components/List'
import Footer from '@/components/Footer'
export default {
  name: "",
  components:{
    Header,
    List,
    Footer
  },

  //自定义事件的麻烦写法
  mounted(){
    this.$refs.head.$on('addTodo',this.addTodo)
    console.log(this.$refs.head)
  },

  data(){
    return {
      // todos:[
      //   {id:1,content:'抽烟',isOver:false},
      //   {id:2,content:'喝酒',isOver:true},
      //   {id:3,content:'烫头',isOver:false},
      // ]
      todos: JSON.parse(localStorage.getItem('TODOS_KEY')) || []
    }

    

    //valueOf 方法
    //toString 方法
    // 当我们需要把对象数据类型转化为基本数据类型的时候，依赖的就是这两个方法
    // 当碰到对象数据和基本数据 进行运算（+ - * 、 %）  比较（> < >= <= ）  判等（== !=  === !==）的时候
    // 对象数据类型要全部先转化为基本数据类型，然后再和基本数据数据类型去做运算

    // 对象数据转化基本数据  两步： 
    //1 先调用valueOf 方法去获取这个数据的包装对象基本值   ，有就拿基本值作为转化后的基本数据类型
    //2 如果没有包装对象的基本值，返回的还是自身，那么就继续调用这个数据的toString方法强制转化为字符串
    // console.log(1.toString())
    // 数字1  的包装对象  new Number(1)
    // console.log([1,2,3] + 1)    //1,2,31
    // console.log({} + 100) //‘[object Object]100’
    // console.log(function(){} + 100) //'function(){}100'


  },

  watch:{
    //一般监视  只能监视数组本身的数据有没有变化
    todos:{
      //深度监视
      deep:true,
      handler(newVal,oldVal){
        //localStorage 在存储数据的时候会自作主张 转化为字符串再去存储
        // 因此我们在存储对象数据类型的时候 不能直接存，因为对象要调用toString之后去存，这个结果不是我们要的
        // 所以在存储对象数据类型之前一定要当心，先把对象数据类型转化为json串去存，就好了

        localStorage.setItem('TODOS_KEY',JSON.stringify(newVal))
      }
    }
  },
  methods:{
    addTodo(todo){
      this.todos.unshift(todo)
      console.log({}.toString())
    },
    updateTodo(index){
      this.todos[index].isOver = !this.todos[index].isOver
    },
    deleteTodo(index){
      this.todos.splice(index,1)
    },
    updateAll(val){
      this.todos.forEach(item => item.isOver = val)
    },
    deleteAll(){
     //清除已完成 其实就是过滤出未完成的   把原来的数组修改为这个新数组
      this.todos = this.todos.filter(item => item.isOver === false)
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
