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
        <div class="time" style="color: rgb(128,128,128)">
          00:00
        </div>
      </div>
      <div class="content" style="color: rgb(128,128,128)">
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
  width: 200px;
}
.title {
  display: flex;
  justify-content: space-between;
  padding-right: 5%;
}
.name {
  font-size: medium;
}

.content {
  font-size: small;
}
</style>
