<script setup>
import { useCourseStore } from '@/stores/course'
const courseStore = useCourseStore()
const props = defineProps({ id: Number })
console.log(props)
console.log(courseStore)
function gotoURL() {
  window.open(courseStore.data[props.id - 1]['url'])
}
</script>
<template>
  <div @click="gotoURL" class="courseComponentsMain">
    <h4>{{ courseStore.data[props.id - 1]['title'] }}</h4>
    <p>{{ courseStore.data[props.id - 1]['introduction'] }}</p>
    <el-divider />
  </div>
</template>
<style scoped>
.courseComponentsMain {
  margin: auto 5%;
  border-radius: 10px;
}
.courseComponentsMain:hover {
  background-color: #66ddff; /* 悬停背景颜色 */
}
</style>
