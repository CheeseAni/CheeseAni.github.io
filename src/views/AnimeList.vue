<script setup>
import { useAnimeStore } from '@/stores/anime'
const animeStore = useAnimeStore()
</script>
<template>
  <div class="animeListMain">
    <el-table :data="animeStore.data" style="width: 100%">
      <el-table-column prop="BGM_ID" label="BGM_ID" />
      <el-table-column prop="name" label="名字" fixed="left" />
      <el-table-column prop="introduction" label="简介" />
      <el-table-column prop="year" label="年份" />
    </el-table>
  </div>
</template>
<style scoped>
.animeListMain {
  margin: auto 5%;
  padding-bottom: 1%;
}
</style>
