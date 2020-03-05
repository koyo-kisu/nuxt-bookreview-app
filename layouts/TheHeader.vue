<template>
  <div class="container">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
      <el-menu-item>site name</el-menu-item>
      <el-menu-item index="1" :route="{ path: '/' }">home</el-menu-item>
      <el-menu-item index="2" :route="{ path: '/post/' }">post</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>