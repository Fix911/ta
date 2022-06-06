<!-- https://www.njtsm.com/authorize?auth_code=MUQ1sTHlf4E9lQOyXMhhcxCY9JxFR1-L7dHkD87jyT4BDStgu2jClf7nkouo0iihZwthl5FjRK0JJh-hTv7Tmg -->
<template>
  <div>授权</div>
</template>
<script setup lang="ts">
import { tokenStore } from '@/store/authorize'

import { onMounted } from 'vue'
const token = tokenStore()
const params = new URLSearchParams(window.location.search)

onMounted(() => {
  token.getToken(params)
})
</script>
