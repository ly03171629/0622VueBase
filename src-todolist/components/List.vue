<template>
  <ul class="todo-main">
    <Item
      v-for="(todo, index) in todos"
      :key="todo.id"
      :todo="todo"
      :index="index"
      :updateTodo="updateTodo"
      :deleteTodo="deleteTodo"
    />
  </ul>
</template>

<script>
import Item from "@/components/Item";
export default {
  name: "",
  // props: ["todos", "updateTodo","deleteTodo"],

  //props第二种写法:使用对象的简单形式
  props:{
    // todos:Array,
    //props第三种写法:使用对象的复杂形式
    todos:{
      type:Array,
      default:[]
    },

    updateTodo:Function,
    deleteTodo:Function
  },

  components: {
    Item,
  },
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>

