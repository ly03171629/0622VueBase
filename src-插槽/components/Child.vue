<template>
  <div>
    <h2>我爱你赵丽颖</h2>
    <!-- 这个是一个具名插槽 -->
    <slot name="zly">
      <!-- 子组件当中挖的坑，这个坑是留给父组件当中使用子组件的时候填的  相当于先占位 -->
      <p>嘿嘿</p>  
      <!-- <p>嘿嘿</p> 是插槽当中默认的结构，如果这个插槽在父组件当中使用到了传递了别的结构，那这个
      结构就被覆盖掉，如果没有被使用，那么默认结构就会显示 -->
    </slot>

    <!-- 这个是一个具名插槽 -->
    <slot name="ym">
      <p>嘿嘿</p>
      <!-- 子组件当中挖的坑，这个坑是留给父组件当中使用子组件的时候填的  相当于先占位 -->
    </slot>

    <!-- 这个是一个默认插槽。只能写一个 -->
    <slot>
      <p>嘿嘿</p>
    </slot>

    
  </div>
</template>

<script>
export default {
  name: '',
}
</script>

<style scoped>

</style>
