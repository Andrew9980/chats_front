<script>
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<template>
  <div class="header">
    <Header />
  </div>
  <div class="container">
    <div class="left">
      我是左边
    </div>
    <div class="right">
      我是右边
    </div>
  </div>
</template>

<style lang="less">
@import './assets/css/styles.less';
</style>
