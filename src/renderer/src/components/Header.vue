<script>
export default {
  name: "Header",
  data() {
    return {
      searchValue: ''
    }
  },
  methods: {
    onSearch() {
      console.log("搜索查询")
    }
  }
};
</script>

<template>
  <div class="headerLeft">
    <n-input placeholder="搜索" autosize style="min-width: 70%" />
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
  width: 40%;
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
