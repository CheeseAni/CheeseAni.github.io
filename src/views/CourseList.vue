<script setup>
import CourseComponents from '@/components/CourseComponents.vue'
import { useCourseStore } from '@/stores/course'
const courseStore = useCourseStore()
</script>
<template>
  <CourseComponents
    v-for="item in courseStore.data.length"
    :key="item"
    :id="item"
  ></CourseComponents>
</template>
<style scoped></style>
