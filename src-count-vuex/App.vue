<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">奇数再+{{$store.state.count}}</button>
    <button @click="incrementAsync">异步去+{{$store.state.count}}</button>
    <button @click="incrementAsync">异步去+{{count}}</button>
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'



export default {
  name: '',
  // data(){
  //   return {
  //     count:0
  //   }
  // },

  computed:{
    // count(){
    //   return this.$store.state.count
    // }
    ...mapState(['count'])
  },

  methods:{
    ...mapActions(['decrement','incrementIfOdd','incrementAsync']),

    


    ...mapActions({
      increment(){
        // this.count ++
        //this.$store.dispatch用的就是暴露出来的store对象内部的dispatch方法 去触发相关的actions内部方法
        this.$store.dispatch('iincrement')
      },
    })

    // mapActions 必须事件的回调函数名字和actions内部的方法名字一样才能使用[]
    // 如果不一样，那么不能用数组的写法，只能使用对象的写法去写参数


    //mapActions是一个方法，这个方法返回的是一个对象， ...是在拆包这个对象
    //返回的对象就是
    // {
    //   increment(){
    //     //this.$store.dispatch用的就是暴露出来的store对象内部的dispatch方法 去触发相关的actions内部方法
    //     this.$store.dispatch('increment')
    //   },

    //   decrement(){
    //     this.$store.dispatch('decrement')
    //   },
    //   incrementIfOdd(){
    //     this.$store.dispatch('incrementIfOdd')
    //   },
    //   incrementAsync(){
    //     // let that = this
    //     // setTimeout((function(){
    //     //   this.count++
    //     // }).bind(this),1000)

    //     // setTimeout(() => {
    //     //   this.count++
    //     // }, 1000);
    //     this.$store.dispatch('incrementAsync')
    //   }
    // }



    // increment(){
    //   // this.count ++
    //   //this.$store.dispatch用的就是暴露出来的store对象内部的dispatch方法 去触发相关的actions内部方法
    //   this.$store.dispatch('increment')
    // },

    // decrement(){
    //   this.$store.dispatch('decrement')
    // },
    // incrementIfOdd(){
    //   this.$store.dispatch('incrementIfOdd')
    // },
    // incrementAsync(){
    //   // let that = this
    //   // setTimeout((function(){
    //   //   this.count++
    //   // }).bind(this),1000)

    //   // setTimeout(() => {
    //   //   this.count++
    //   // }, 1000);
    //   this.$store.dispatch('incrementAsync')
    // }
  
  }
}
</script>

<style scoped>

</style>
