<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar :src="circleUrl" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">
          退 出
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts">
import { useToken } from '@/store/authorization'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElAvatar, ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'
const token = useToken()
const router = useRouter()
const circleUrl = ref(token.GetAvator)

// 点击头像退出登录
const logout = () => {
  token.$reset()
  router.push('/login')
}
</script>
