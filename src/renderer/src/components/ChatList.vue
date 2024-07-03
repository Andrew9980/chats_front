<script>
import avatar from '@/assets/qq.webp';
import ChatItem from "./ChatItem.vue";
import moment from "moment";

export default {
  name: "ChatList",
  components: { ChatItem },
  data() {
    return {
      list: [
        {
          url: avatar,
          username: 'andrew',
          time: moment().format("HH:mm:ss"),
          content: '你是谁',
        },
        {
          url: avatar,
          username: 'andrew',
          time: moment().format("HH:mm:ss"),
          content: '你是谁',
        },
        {
          url: avatar,
          username: 'andrew',
          time: moment().format("HH:mm:ss"),
          content: '你是谁',
        },
        {
          url: avatar,
          username: 'andrew',
          time: moment().format("HH:mm:ss"),
          content: '你是谁',
        },
        {
          url: avatar,
          username: 'andrew',
          time: moment().format("HH:mm:ss"),
          content: '你是谁',
        },
      ]
    }
  }
};
</script>

<template>
  <div class="chatList">
    <n-flex vertical align="flex-start">
      <ChatItem v-for="(item, index) in list" :data="item" :key="index"/>
    </n-flex>
  </div>

</template>

<style scoped lang="less">
.chatList {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
.chatList::-webkit-scrollbar {
  display: none; /* 隐藏滚动条 */
}
</style>
