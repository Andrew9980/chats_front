<script>
import avatar from '@/assets/qq.webp';
import ChatItem from "./ChatItem.vue";
import moment from "moment";
import axios from "axios";
import { ref } from "vue";

export default {
  name: "ChatList",
  components: { ChatItem },
  setup() {
    // let list = [
      // {
      //   url: avatar,
      //   contactId: '12381283',
      //   contactName: 'andrew',
      //   time: moment().format("HH:mm:ss"),
      //   content: '你是谁',
      //   msgList: [
      //     { type: 'left', content: '你是谁123' },
      //     { type: 'right', content: '你是谁123' },
      //     { type: 'right', content: '你是谁12' },
      //     { type: 'right', content: '你是谁123' },
      //   ]
      // },
      // {
      //   url: avatar,
      //   contactId: '281827',
      //   contactName: 'tom',
      //   time: moment().format("HH:mm:ss"),
      //   content: '你是谁',
      //   msgList: [
      //     { type: 'left', content: '你是谁123456' },
      //     { type: 'right', content: '你是谁123456' },
      //     { type: 'right', content: '你是谁12' },
      //     { type: 'right', content: '你是谁123' },
      //
      //   ]
      // },
      // {
      //   url: avatar,
      //   contactId: '886712713',
      //   contactName: 'jerry',
      //   time: moment().format("HH:mm:ss"),
      //   content: '你是谁',
      //   msgList: [
      //     { type: 'left', content: '你是谁789' },
      //     { type: 'right', content: '你是谁789' },
      //     { type: 'right', content: '你是谁789' },
      //     { type: 'right', content: '你是谁789' },
      //   ]
      // }
    // ];
    let list = ref([]);
    return {list}
  },
  created() {
    axios.get("http://localhost:8080/chats/userContact/recentContact/85472619300")
      .then(res => {
        console.log(res)
        this.list = res.data.data.map(e => {
          return {
            url: avatar,
            contactId: e.contactId,
            contactName: e.contactName,
            time: e.lastContractTime,
            content: "...",
            msgList: []
          }
        });
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
