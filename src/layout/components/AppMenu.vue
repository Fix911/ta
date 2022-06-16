<template>
  <el-menu
    active-text-color="#25A0E4"
    background-color="#324157"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#BFCBD9"
    router
  >
    <!-- 设置菜单    -->
    <template v-for="item in menuItem">
      <el-sub-menu
        :index="item.path"
        :key="item.id"
        v-if="item.children"
      >
        <template #title>
          <svg-icon
            color="#BFCBD9"
            :name="item.icon"
            size="18px"
            class="svg-menu"
          />
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item-group
          :key="unit.id"
          v-for="unit in item.children"
        >
          <el-menu-item
            :index="unit.path"
            :key="unit.id"
          >
            <template #title>
              <svg-icon
                color="#BFCBD9"
                :name="unit.icon"
                size="18px"
                class="svg-menu-second"
              />
              <span>{{ unit.name }}</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item
        v-else
        :index="item.path"
        :key="item.path"
      >
        <template #title>
          <svg-icon
            color="#BFCBD9"
            :name="item.icon"
            size="18px"
            class="svg-menu-second"
          />
          <span>{{ item.name }}</span>
        </template>
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script setup lang="ts">
import { menuList } from '@/api/menu'
import { Menu } from '@/api/type/menu'
import { ref } from 'vue'
import SvgIcon from '@/components/svgicon.vue'

import { ElMenu, ElMenuItem, ElSubMenu, ElMenuItemGroup } from 'element-plus'

const menuItem = ref<Menu[]>(menuList)
</script>

 <style lang="scss" scoped>
 .svg-menu{
    margin-right: 5px;
    width: 24px;
    height: 18px;
 }
 .svg-menu-second{
    padding-left: 0px;
    width: 24px;
    height: 18px;
    text-align: left;
    margin-right: 5px;
 }
 </style>
