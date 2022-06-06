<!-- https://www.njtsm.com/authorize?auth_code=MUQ1sTHlf4E9lQOyXMhhcxCY9JxFR1-L7dHkD87jyT4BDStgu2jClf7nkouo0iihZwthl5FjRK0JJh-hTv7Tmg -->
<template>
  <div>授权</div>
</template>
<script setup lang="ts">
const params = new URLSearchParams(window.location.search)
const code = params.get('code') as string
const corpId = params.get('state') as string
if (!code) {

}

</script>
