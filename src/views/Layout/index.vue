<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <!-- 二级路由出口组件 -->
  <router-view />
  <LayoutFooter />
</template>

<script setup lang="js">
// 准备二级路由的路由出口
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
//触发获取导航列表的action
import useCategoryStore from '@/store/category.js'
import { onMounted } from 'vue'
//执行，得到一个实例对象
const categoryStore = useCategoryStore();
//通过实例对象调取里面的函数,挂载才能获取数据，生命周期
onMounted(() => categoryStore.getCategory())
</script>

<style scoped lang="scss"></style>
