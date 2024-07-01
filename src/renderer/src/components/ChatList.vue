<script>
import ChatItem from "./ChatItem.vue";

export default {
  name: "ChatList",
  components: { ChatItem }
};
</script>

<template>
  <n-flex vertical align="flex-start">
    <ChatItem/>
    <ChatItem/>
    <ChatItem/>
    <ChatItem/>
  </n-flex>
</template>

<style scoped lang="less">
</style>
