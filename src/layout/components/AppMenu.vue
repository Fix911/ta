<template>
  <el-menu
    active-text-color="#25A0E4"
    background-color="#324157"
    class="el-menu-vertical-demo"
    default-active="/console"
    text-color="#BFCBD9"
    router
    unique-opened
    @open="handleOpen"
    @close="handleClose"
  >
    <!-- 设置菜单    -->
    <el-sub-menu
      :index="item.path"
      v-for="item in menuItem"
      :key="item.id"
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
  </el-menu>
</template>
<script setup lang="ts">
import { menuList } from '@/api/menu'
import { Menu } from '@/api/type/menu'
import { ref } from 'vue'
import SvgIcon from '@/components/svgicon.vue'
import { ElMenu, ElMenuItem, ElSubMenu, ElMenuItemGroup } from 'element-plus'
const menuItem = ref<Menu[]>(menuList)

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
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
 .el-menu-vertical-demo{
    width: 200px;
    height: 100%;
 }
 </style>
