<template>
<!-- 作用域插槽什么时候用
数据是父组件的，数据被传递到子组件当中去展示，但是子组件当中展示的过程中，结构是什么样子，决定不了
作用域插槽：使用条件  1、数据在父亲当中  2、由子组件去展示  3、结构儿子说了不算

默认插槽和具名插槽 都是父组件给子组件传递数据

作用域插槽是父子之间传数据

-->
  <div>
    <ul>
      <li v-for="(person,index) in persons" :key="person.id">
        <slot :person="person" :index="index">
          <!-- <slot :person="person">是作用域插槽传递给父亲的数据 -->
          {{person.name}}
        </slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  props:['persons']
}
</script>

<style scoped>

</style>
