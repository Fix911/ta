<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    router
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><House /></el-icon>
        <span>首页</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1">
          item one
        </el-menu-item>
        <el-menu-item index="1-2">
          item one
        </el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">
          item three
        </el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title>
          item four
        </template>
        <el-menu-item index="1-4-1">
          item one
        </el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <!-- 设置菜单    -->
    <el-sub-menu index="/console/config">
      <template #title>
        <el-icon><setting /></el-icon>
        <span>设置</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/semester">
          学期
        </el-menu-item>
        <el-menu-item index="/location">
          班级
        </el-menu-item>
        <el-menu-item index="4-2">
          课程
        </el-menu-item>
        <el-menu-item index="4-2">
          作息时间
        </el-menu-item>
        <el-menu-item index="4-2">
          教师任课
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>
<script setup lang="ts">
import { ElMenu, ElMenuItem, ElIcon, ElSubMenu, ElMenuItemGroup } from 'element-plus'
import {
  House,
  Setting
} from '@element-plus/icons-vue'
</script>
