<template>
  <!-- 历史记录 -->
  <div class="history" @scroll="handleScroll" ref="scrollContainer">
    <div class="list">
      <div class="list-item" v-for="(item, index) in list" :key="index">
        <div v-if="item.type === 'left'" class="list-item-left">
          <div class="avatar"></div>
          <div class="content">{{ item.content }}</div>
        </div>
        <div v-if="item.type === 'right'" class="list-item-right">
          <div class="content">{{ item.content }}</div>
          <div class="avatar"></div>
        </div>
      </div>
    </div>
  </div>
  <!-- 聊天工具栏按钮 -->
<!--  <div class="btn">-->
<!--  </div>-->
  <!-- 输入框 -->
  <div class="ipt">
    <n-input v-model:value="inputVal" type="textarea" placeholder="" />
  </div>
  <div class="sendBtn">
    <n-button strong secondary type="success" @click="sendMsg">
      发 送
    </n-button>
  </div>
</template>

<script>
import { eventBus } from "../main";
import { ref, watchEffect } from "vue";

export default {
  name: 'chatView',
  props: ['contactId', 'msgList'],
  setup() {
    let list = ref([]);
    let inputVal = "";
    let startChat = ref('');

    watchEffect(() => {
      debugger
      startChat = eventBus.value.startChat;
      if (startChat) {
        list.value = startChat.msgList;
      }
    });
    return {
      list, inputVal, startChat
    }
  },
  mounted() { // 页面打开时滚动条滚到最底部
    const container = this.$refs.scrollContainer;
    container.scrollTop = container.scrollHeight;
  },
  updated() {
    const container = this.$refs.scrollContainer;
    container.scrollTop = container.scrollHeight;
  },
  methods: {
    sendMsg() {
      if (!this.inputVal) {
        return;
      }
      this.list.push({
        type: 'right',
        content: this.inputVal
      })
      this.inputVal = null;
    },
    handleScroll(event) {
      const container = event.target;
      if (container.scrollTop === 0 && !this.loading) {
        this.getRecords();
      }
    },
    async getRecords() {
      this.loading = true;
      // 记录当前滚动高度
      const container = this.$refs.scrollContainer;
      const scrollHeightBeforeLoad = container.scrollHeight;
      const scrollTopBeforeLoad = container.scrollTop;

      // 模拟异步数据加载
      await new Promise((resolve) => {
        setTimeout(() => {
          console.log("滚到顶部，加载数据");
          let newList = [];
          for (let i = 0; i < 10; i++) {
            newList.push({type: i % 2 === 0 ? 'left' : 'right', content: '1'})
          }
          this.list = [...newList, ...this.list];
          resolve();
        }, 1000);
      });
      await this.$nextTick(() => {
        const scrollHeightAfterLoad = container.scrollHeight;
        container.scrollTop = scrollTopBeforeLoad + (scrollHeightAfterLoad - scrollHeightBeforeLoad);
      });
      this.loading = false;
    }
  }
}
</script>

<style lang="less" scoped>
.history {
  height: 70vh;
  width: 100%;
  overflow: scroll;
  overflow-y: auto;
}
.history::-webkit-scrollbar {
  display: none; /* 隐藏滚动条 */
}
.btn {
  height: 50px;
  background-color: aquamarine;
}
.list {
  display: flex;
  flex-direction: column;
  &-item {
    flex: 1;
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    &-left {
      margin-left: 40px;
      display: flex;
      align-items: center;
      gap: 0 10px;
    }
    &-right {
      display: flex;
      align-items: center;
      justify-content: end;
      gap: 0 10px;

      margin-left: auto; /* 从右边开始 */
      margin-right: 30px; /* 可选，根据需要调整 */
    }
    .avatar {
      border-radius: 4px;
      width: 40px;
      height: 40px;
      background-color: darkmagenta;
    }
  }
}
.sendBtn {
  display: flex;
  justify-content: right;
  padding-right: 20px;
}
</style>
