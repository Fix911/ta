<template>
  <el-breadcrumb
    separator="/"
    class="breadcrumb-item"
  >
    <el-breadcrumb-item
      v-for="(item,index) in breadcrumbList"
      :key="index"
    >
      <span v-if="index===breadcrumbList.length-1">{{ item.name }}</span>
      <span v-else>{{ item.name }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup lang="ts">
import { RouteLocationMatched, useRoute } from 'vue-router'
import { watch, ref } from 'vue'
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus'

const breadcrumbList = ref<RouteLocationMatched[]>([])
const route = useRoute()

const initBreadcrumbList = () => {
  breadcrumbList.value = route.matched
  console.log(breadcrumbList.value)
}
watch(route, () => { // 当路由变化时，更新面包屑
  initBreadcrumbList()
}, { deep: true, immediate: true })
</script>
<style scoped lang="scss">
.breadcrumb-item{
  font-size: 16px;
  margin-left:6px;
}
</style>
