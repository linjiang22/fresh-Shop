<template>
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
</script>

<style scoped lang="scss"></style>
