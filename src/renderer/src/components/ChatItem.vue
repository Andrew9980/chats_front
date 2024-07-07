<script>
import avatar from '@/assets/qq.webp';
import axios from "axios";
export default  {
  name: "ChatItem",
  props: ['data'],
  data() {
    return {
      avatar
    }
  },
  methods: {
    toChat(contactId) {
      console.log("点击了", contactId);
      axios.get("http://localhost:8080/chats/test").then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<template>
  <div class="item" @click="toChat(data.contactId)">
    <div class="avatar">
      <n-avatar
        size="large"
        :src="data.url"
      />
    </div>
    <div class="message">
      <div class="title">
        <div class="name">
          {{data.contactName}}
        </div>
        <div class="time" style="color: rgb(128,128,128)">
          {{data.time}}
        </div>
      </div>
      <div class="content" style="color: rgb(128,128,128)">
        {{data.content}}
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.item {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 5px; // div圆角
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
