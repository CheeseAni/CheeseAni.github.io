import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCourseStore = defineStore('course', () => {
  const data = ref([
    {
      title: '[001] 字幕制作流程概述',
      introduction: '略……',
      url: 'https://github.com/CheeseAni/Subtitle-Production-Tutorial/blob/main/%5B001%5D%20%E5%AD%97%E5%B9%95%E5%88%B6%E4%BD%9C%E6%B5%81%E7%A8%8B%E6%A6%82%E8%BF%B0/README.md',
    },
    {
      title: '[002] 片源选取',
      introduction: '略……',
      url: 'https://github.com/CheeseAni/Subtitle-Production-Tutorial/blob/main/%5B002%5D%20%E7%89%87%E6%BA%90%E9%80%89%E5%8F%96/README.md',
    },
    {
      title: '[003] 基本工具选取',
      introduction: '略……',
      url: 'https://github.com/CheeseAni/Subtitle-Production-Tutorial/blob/main/%5B003%5D%20%E5%9F%BA%E6%9C%AC%E5%B7%A5%E5%85%B7%E9%80%89%E5%8F%96/README.md',
    },
    {
      title: '[004] 视音频基础知识',
      introduction: '略……',
      url: 'https://github.com/CheeseAni/Subtitle-Production-Tutorial/blob/main/%5B004%5D%20%E8%A7%86%E9%9F%B3%E9%A2%91%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/README.md',
    },
    {
      title: '[005] 初识 ASS & Aegisub',
      introduction: '略……',
      url: 'https://github.com/CheeseAni/Subtitle-Production-Tutorial/blob/main/%5B005%5D%20%E5%88%9D%E8%AF%86%20ASS%20%26%20Aegisub/README.md',
    },
    {
      title: '[006] 字幕制作的规范化',
      introduction: '略……',
      url: 'https://github.com/CheeseAni/Subtitle-Production-Tutorial/blob/main/%5B006%5D%20%E5%AD%97%E5%B9%95%E5%88%B6%E4%BD%9C%E7%9A%84%E8%A7%84%E8%8C%83%E5%8C%96/README.md',
    },
    {
      title: '[007] 时轴制作入门',
      introduction: '略……',
      url: 'https://github.com/CheeseAni/Subtitle-Production-Tutorial/blob/main/%5B007%5D%20%E6%97%B6%E8%BD%B4%E5%88%B6%E4%BD%9C%E5%85%A5%E9%97%A8/README.md',
    },
    {
      title: '[008] 选择合适的字幕Filter',
      introduction: '略……',
      url: 'https://github.com/CheeseAni/Subtitle-Production-Tutorial/blob/main/%5B008%5D%20%E9%80%89%E6%8B%A9%E5%90%88%E9%80%82%E7%9A%84%E5%AD%97%E5%B9%95Filter/README.md',
    },
    {
      title: '[009] 压制入门',
      introduction: '略……',
      url: 'https://github.com/CheeseAni/Subtitle-Production-Tutorial/blob/main/%5B009%5D%20%E5%8E%8B%E5%88%B6%E5%85%A5%E9%97%A8/README.md',
    },
    {
      title: '[010] 内封字幕子集流程',
      introduction: '略……',
      url: 'https://github.com/CheeseAni/Subtitle-Production-Tutorial/blob/main/%5B010%5D%20%E5%86%85%E5%B0%81%E5%AD%97%E5%B9%95%E5%AD%90%E9%9B%86%E6%B5%81%E7%A8%8B/README.md',
    },
    {
      title: '[011] 了解x265参数',
      introduction: '略……',
      url: 'https://github.com/CheeseAni/Subtitle-Production-Tutorial/blob/main/%5B011%5D%20%E4%BA%86%E8%A7%A3x265%E5%8F%82%E6%95%B0/README.md',
    },
    {
      title: '[012] 双语字幕的ASS格式',
      introduction: '略……',
      url: 'https://github.com/CheeseAni/Subtitle-Production-Tutorial/blob/main/%5B012%5D%20%E5%8F%8C%E8%AF%AD%E5%AD%97%E5%B9%95%E7%9A%84ASS%E6%A0%BC%E5%BC%8F/README.md',
    },
  ])
  return {
    data,
  }
})
