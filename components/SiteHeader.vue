<template>
  <div>
    <div class="line"></div>
    <el-menu mode="horizontal" @select="handleSelect">
      <el-menu-item index="1"><nuxt-link to="/">首页</nuxt-link></el-menu-item>
      <el-menu-item index="3"><nuxt-link to="/findwork">我要找活</nuxt-link></el-menu-item>
      <el-menu-item index="4"><nuxt-link to="/findworker">我要招工</nuxt-link></el-menu-item>
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