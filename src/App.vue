<script>
import Header from './components/Header.vue'
import Menu from './components/Menu.vue'
import Content from './components/Content.vue';
import Box from './components/Box.vue'

export default {
  name: "app",
  components: { // 가져온 component 들을 등록합니다.
    Header,
    Menu,
    Content,
    Box
  }
};
</script>

<template>
  <div>
    <Box color="blue"/>
    <Box color="purple"/>
    <Box color="green"/>
    <Box color="blue"/>
    <Box color="purple"/>
    <Box />
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
}
</style>
