<script>
import avatar from '@/assets/qq.webp';
export default  {
  name: "ChatItem",
  props: [],
  data() {
    return {
      avatar
    }
  }
}
</script>

<template>
  <div class="item">
    <div class="avatar">
      <n-avatar
        size="large"
        :src="avatar"
      />
    </div>
    <div class="message">
      <div class="title">
        <div class="name">
          名称
        </div>
        <div class="time">
          00:00:00
        </div>
      </div>
      <div class="content">
        消息内容
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.item {
  display: flex;
  width: 100%;
  height: 100%;
  border: black 1px solid;
}
.avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  margin-right: 2%;
}
.message {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 200px;
  border: black 1px solid;
}
.title {
  display: flex;
  justify-content: space-between;
}
.name {
  font-size: medium;
}

.content {
  font-size: small;
}
</style>
