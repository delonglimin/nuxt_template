<template>
  <div>
    <div class="line"></div>
    <el-menu mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="3">招工</el-menu-item>
      <el-menu-item index="4">找活</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style  scoped lang="scss">
.line{
  
}
</style>