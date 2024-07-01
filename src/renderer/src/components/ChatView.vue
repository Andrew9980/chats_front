<template>
  <!-- 历史记录 -->
  <div class="history">
    <div class="list">
      <div class="list-item" v-for="(item, index) in list" :key="index">
        <div v-if="item.type == 'left'" class="list-item-left">
          <div class="avatar"></div>
          <div class="content">{{ item.content }}</div>
        </div>
        <div v-if="item.type == 'right'" class="list-item-right">
          <div class="content">{{ item.content }}</div>
          <div class="avatar"></div>
        </div>
      </div>
    </div>
  </div>
  <!-- 按钮 -->
  <div class="btn"></div>
  <!-- 输入框 -->
  <div class="ipt">
    <n-input v-model:value="value" type="textarea" placeholder="基本的 Textarea" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const list = reactive([
  { type: 'left', content: '你是谁' },
  { type: 'right', content: '我是你爹' },
  { type: 'left', content: '我是你爸爸' },
  { type: 'right', content: '你是我的儿' },
  { type: 'right', content: '你是我的儿' },
  { type: 'right', content: '你是我的儿' },
  { type: 'right', content: '你是我的儿' },
  { type: 'right', content: '你是我的儿' },
  { type: 'right', content: '你是我的儿' },
  { type: 'right', content: '你是我的儿' },
  { type: 'left', content: '傻逼洗洗睡吧' }
])
</script>

<style lang="less" scoped>
.history {
  height: 60vh;
  width: 100%;
  overflow: scroll;
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
</style>
