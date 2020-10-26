<template>
  <ul class="list-group">
    <li class="list-group-item">{{ $route.params.msgId }}</li>
    <!-- <li class="list-group-item">{{msgId}}</li> -->
    <li class="list-group-item">{{ $route.query.content }}</li>
    <!-- <li class="list-group-item">{{content}}</li>
    <li class="list-group-item">{{username}}</li> -->

    <li class="list-group-item">{{ msgTitle }}</li>
  </ul>
</template>

<script>
let arr = [
  { id: 1, title: "msg1title" },
  { id: 2, title: "msg2title" },
  { id: 3, title: "msg3title" },
];
export default {
  name: "",
  data() {
    return {
      msgTitle: "",
    };
  },
  props: ["msgId", "username", "content"],
  mounted() {
    // console.log('msgDetai挂载完成')
    // 功能:找到符合条件的第一项
    // 参数： 和filter一样
    // 返回值： 找到符合条件的项，找不到就是undefined
    // 路由传参传递过来的参数都是字符串，如果需要转数字，手动进行转化
    this.changeMsgId()
  },

  // watch: {
  //   $route: {
  //     handler() {
  //       setTimeout(() => {
  //         this.msgTitle = arr.find(
  //           (item) => item.id === this.$route.params.msgId * 1
  //         ).title;
  //       }, 2000);
  //     },
  //   },
  // },
  methods: {
    changeMsgId() {
      setTimeout(() => {
        this.msgTitle = arr.find(
          (item) => item.id === this.$route.params.msgId * 1
        ).title;
      }, 2000);
    },
  },

  watch: {
    // 这个简写只能针对一般监视
    $route(newVal, oldVal) {
      this.changeMsgId()
    },
  },
};
</script>

<style scoped>
</style>
