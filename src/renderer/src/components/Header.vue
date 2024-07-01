<script>
import avatar from '@/assets/qq.webp';

export default {
  name: "Header",
  data() {
    return {
      avatar,
      searchValue: ''
    }
  },
  methods: {
  }
};
</script>

<template>
  <div class="avatar">
    <n-avatar
      size="small"
      :src="avatar"
    />
  </div>
  <div class="headerLeft">
    <n-input round placeholder="中" />
  </div>
  <div class="headerRight">
    <n-flex justify="center">
    <n-button>Oops!</n-button>
    <n-button>Oops!</n-button>
    <n-button>Oops!</n-button>
  </n-flex>
  </div>
</template>

<style scoped lang="less">
.avatar {
  display: flex;
  width: 10%;
  height: 100%;
  justify-content: left;
  align-items: center;
  padding: 3%;
}
.headerLeft {
  display: flex;
  width: 30%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.headerRight {
  display: flex;
  width: 60%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
