<template>
  <div>
    <Child>
      <!-- 父组件在使用子组件的时候给具名插槽传递的结构和数据 -->
      <template slot="zly">
        <button>我爱你</button>
      </template>
      <!-- 父组件在使用子组件的时候给具名插槽传递的结构和数据 -->
      <template slot="ym">
        <button>我恨你</button>
      </template>
      <!-- 父组件在使用子组件的时候给默认插槽传递的结构和数据 -->
      <!-- 默认插槽一般只能写一个，写多个没必要 -->
      <template>
        <p>我揍你</p>
      </template>
    </Child>

    <Child>
      <template>
        <a href="##">我爱你</a>  
      </template>
    </Child>

    <Child2 :persons="persons">
      <!-- <template slot-scope="slotProps"> -->
      <template slot-scope="{person,index}">
        <!-- slotProps:{person:person,index:index} -->
        <span :style="{color:person.age >= 40?'red':'green'}" >{{person.name}}</span>
      </template>
    </Child2>
  </div>
</template>

<script>
import Child from '@/components/Child'
import Child2 from '@/components/Child2'
export default {
  name: '',
  data(){
    return {
      persons:[
        {id:1,name:'zhaoliying',age:33},
        {id:2,name:'yangmi',age:34},
        {id:3,name:'qiwei',age:40},
      ]
    }
  },
  components:{
    Child,
    Child2
  }
}
</script>

<style scoped>

</style>
