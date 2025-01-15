<script setup></script>

<template>
  <div class="main">
    <LayoutContainer></LayoutContainer>
    <el-divider />
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.main {
  background-color: #f3f3f3; /* 背景颜色 */
  opacity: 0.8;
  height: 100%;

  border-radius: 10px; /* 圆角边框 */
}
</style>
