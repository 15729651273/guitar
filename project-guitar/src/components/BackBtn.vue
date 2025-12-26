<template>
  <div class="back-btn" @click="$router.back()">
    <el-icon size="24px"><ArrowLeft /></el-icon>
    <label style="font-size: 18px; font-weight: 500;">返回</label>
  </div>
</template>

<script setup>

</script>

<style scoped>
.back-btn{
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  color: #168af7;
  gap: 5px;
}
.back-btn:hover{
  color: #b2cdf0;
}

</style>
