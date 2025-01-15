<script setup></script>
<template>
  <div class="navbar">
    <el-button size="large" @click="$router.push('/')">首页</el-button>
    <el-button size="large" @click="$router.push('/course')">教程</el-button>
    <el-button size="large" @click="$router.push('/anime')">番剧列表</el-button>
  </div>
</template>
<style scoped>
/* 导航栏样式 */
.navbar {
  padding-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f3f3; /* 背景颜色 */
  opacity: 0.8;
  height: 60px;
  border-radius: 10px; /* 圆角边框 */
}
</style>
