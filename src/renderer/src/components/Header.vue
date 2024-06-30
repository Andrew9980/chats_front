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
    <a-input-search
      v-model:value="searchValue"
      placeholder="input search text"
      style="width: 200px"
      @search="onSearch"
    />
  </div>
  <div class="headerRight">
    <a-menu
      mode="horizontal"
      style="lineHeight: '64px'"
    >
      <a-menu-item key="1">nav 1</a-menu-item>
      <a-menu-item key="2">nav 2</a-menu-item>
      <a-menu-item key="3">nav 3</a-menu-item>
    </a-menu>
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
