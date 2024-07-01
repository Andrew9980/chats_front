<script setup>
import Header from './components/Header.vue'
import ChatList from './components/ChatList.vue'
import ChatView from './components/ChatView.vue'
</script>

<template>
  <div class="header">
    <Header />
  </div>
  <div class="container">
    <div class="left">
      <ChatList />
    </div>
    <div class="right">
      <ChatView />
    </div>
  </div>
</template>

<style lang="less">
@import './assets/css/styles.less';
</style>
