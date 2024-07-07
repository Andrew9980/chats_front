<script>
import avatar from '@/assets/qq.webp';
import ChatItem from "./ChatItem.vue";
import moment from "moment";
import axios from "axios";

export default {
  name: "ChatList",
  components: { ChatItem },
  data() {
    return {
      list: [
        {
          url: avatar,
          contactId: '12381283',
          contactName: 'andrew',
          time: moment().format("HH:mm:ss"),
          content: '你是谁',
        },
        {
          url: avatar,
          contactId: '281827',
          contactName: 'tom',
          time: moment().format("HH:mm:ss"),
          content: '你是谁',
        },
        {
          url: avatar,
          contactId: '886712713',
          contactName: 'jerry',
          time: moment().format("HH:mm:ss"),
          content: '你是谁',
        }
      ]
    }
  },
  created() {
    axios.get("http://localhost:8080/chats/userSessionMessage/list?userId=85472619300").then(res => {
      console.log(res)
    })
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
