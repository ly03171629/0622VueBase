<template>
  <ul class="list-group">
    <li class="list-group-item">{{$route.params.newsId}}</li>
    <li class="list-group-item">{{$route.query.content}}</li>
  </ul>
</template>

<script>
export default {
  name: "",
};
</script>

<style scoped>
</style>
