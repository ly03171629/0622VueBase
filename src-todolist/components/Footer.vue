<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll"/>
    </label>
    <span> <span>已完成{{overNum}}</span> / 全部{{allNum}} </span>
    <button class="btn btn-danger" @click="deleteA">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "",
  props:['todos','updateAll','deleteAll'],
  methods:{
    deleteA(){
      this.deleteAll()
    }
  },
  computed:{
    allNum(){
      return this.todos.length
    },
    overNum(){
      // return this.todos.filter(item => item.isOver).length
      // 功能： 做统计使用，返回的就是统计的东西
      // 参数： 两个参数： 第一个参数是回调函数（上一次统计的结果，item,index,arr），  第二个参数是统计时候的初始值
      // 返回值： 返回的就是自己统计的东西

      // todos:[
      //   {id:1,content:'抽烟',isOver:false},
      //   {id:2,content:'喝酒',isOver:true},
      //   {id:3,content:'烫头',isOver:false},
      // ]
      return this.todos.reduce((prev,item,index) => {
        //prev 代表的是上一次统计的结果  但是对于第一次来说没有上一次，它的值就是第二个参数你指定的初始值
        if(item.isOver){
          prev += 1
        }
        return prev
      },0)
    },


    isCheckAll:{
      get(){
        return this.allNum === this.overNum && this.allNum > 0
      },
      set(val){
        this.updateAll(val)
      }
    }


  }
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>

