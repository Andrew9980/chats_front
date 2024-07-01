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
  <div class="headerLeft">
    <div class="avatar">
      <n-avatar
        size="large"
        :src="avatar"
      />
    </div>
    <div class="search">
      <n-input round placeholder="搜索" size="small" />
    </div>
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
.headerLeft {
  display: flex;
  width:30%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
.avatar {
  padding-left: 3%;
  padding-top: 2%;
}
.headerRight {
  display: flex;
  width: 60%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
