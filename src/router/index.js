import { createRouter, createWebHashHistory } from 'vue-router'
import HomeHome from '@/views/HomeHome.vue'
import CourseList from '@/views/CourseList.vue'
import AnimeList from '@/views/AnimeList.vue'

const routes = [
  { path: '/', component: HomeHome },
  { path: '/course', component: CourseList },
  { path: '/anime', component: AnimeList },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
