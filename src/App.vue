<template>
  <div>
    <div class="container">
        <div class="page-header">
            <h1>路由组件的练习</small></h1>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <!-- Nav tabs -->
            <ul class="nav nav-stacked col-md-6" role="tablist">
                <li role="presentation" class="active">
                  <!-- 路由链接，解析后到了页面之后还是a标签 -->
                  <router-link to="/home" aria-controls="home" role="tab"
                        data-toggle="tab">Home</router-link>

                  <!-- <a href="#home" aria-controls="home" role="tab"
                        data-toggle="tab">Home</a> -->
                </li>
                <li role="presentation">
                  <router-link to="/about" aria-controls="About" role="tab" data-toggle="tab">About</router-link>
                  <!-- <a href="#About" aria-controls="About" role="tab" data-toggle="tab">About</a> -->
                </li>
            </ul>
            <!-- Tab panes -->
            <div class="tab-content col-md-6">
              <!-- router-view是插件定义好的一个组件标签，专门用来显示路由切换的组件 -->
              <keep-alive include="Home">
                <router-view></router-view>
              </keep-alive>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style scoped>
</style>
