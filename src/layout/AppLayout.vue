<template>
  <el-container class="el-container">
    <el-aside class="el-aside">
      Aside
    </el-aside>
    <el-container>
      <el-header class="el-header">
        Header
      </el-header>
      <el-main class="el-main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ElContainer, ElMain, ElAside, ElHeader } from 'element-plus'
</script>
<style scoped lang="scss">
.el-container{
  height: 100vh;
}
.el-container .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.el-container .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
  width: 200px;
}
.el-container .el-menu {
  border-right: none;
}
.el-container .el-main {
  padding: 0;
}
.el-container .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
