<script>
import Header from "./components/Header.vue";
import ChatList from "./components/ChatList.vue";

export default {
  name: "app",
  components: {
    ChatList,
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
      <ChatList/>
    </div>
    <div class="right">
      我是右边
    </div>
  </div>
</template>

<style lang="less">
@import './assets/css/styles.less';
</style>
