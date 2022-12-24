<script>
import Header from './components/Header.vue'
import Menu from './components/Menu.vue'
import Content from './components/Content.vue';

export default {
  name: "app",
  components: { // 가져온 component 들을 등록합니다.
    Header,
    Menu,
    Content
  }
};
</script>

<template>
  <Header/>
  <div class="wrap">
    <Menu/>
    <Content/>
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
}
</style>
