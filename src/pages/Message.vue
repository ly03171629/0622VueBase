<template>
  <div role="tabpanel" class="tab-pane active" id="Message">
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(msg, index) in messages"
        :key="msg.id"
      >
        <!-- <router-link to="/home/message/msgdetail">{{msg.content}}</router-link> -->

        <!-- 最原始最基本的路由传参写法 
        参数分为两种：query和params参数
        id使用params参数去传递
        content使用query参数去传递

        参数传递过程
        1、参数都是在路径当中去写的
        2、参数通过路径最终传递到了路由器当中去匹配相应的路由
        3、路由对象当中，路径就得去写相关的接收params参数的名称（最终会成为对象的属性）,这个对象就是params，params:{msgId:1}
        4、query参数因为不属于路径部分，所以不需要起名称，那么会直接把query参数收集到对象当中,这个对象就是query（因为query参数已经写了属性了）
        query:{content:msgOne}
        5、无论是params参数还是query参数 最终都被放到路由对象当中，这个对象就是我们的路由对象（和我们定义路由的时候那个对象不是同一个）
        6、最终形成的路由对象 {path:'路径',params:{msgId:1}，query:{content:msgOne}}
        7、显示和这个路径匹配的路由组件，会把刚才匹配过程中形成的最终路由对象也携带过去    
        -->
        <!-- <router-link
          :to="'/home/message/msgdetail/' + msg.id + '?content=' + msg.content"
          >{{ msg.content }}</router-link> -->

          <!-- 模板字符串做拼接比较简单 -->
        <!-- <router-link :to="`/home/message/msgdetail/${msg.id}?content=${msg.content}`">{{ msg.content }}</router-link> -->

        <!-- 路由传递参数的时候还可以写对象，一般我们写对象，都要使用命名路由 -->
        <router-link :to="{name:'msgDetail',params:{msgId:msg.id},query:{content:msg.content}}">{{ msg.content }}</router-link>

      </li>
    </ul>
    <div class="alert alert-success" role="alert">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      messages: [
        { id: 1, content: "msgOne" },
        { id: 2, content: "msgTwo" },
        { id: 3, content: "msgThree" },
      ],
    };
  },
};
</script>

<style scoped>
</style>
