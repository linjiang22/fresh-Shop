<template>
  <!-- 一级路由出口组件 -->
  <RouterView />
  <Test></Test>
  <el-button type="primary">primary</el-button>
</template>

<script setup lang="js">
import { RouterView } from 'vue-router';
import Test from '@/components/Test.vue'
</script>

<style scoped lang="scss"></style>
