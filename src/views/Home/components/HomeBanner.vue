<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="id">
        <img :src="item.imgUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="js">
//调用接口
import { getBannerAPI } from '@/apis/home';
import { onMounted ,ref} from 'vue';
//得到响应数据,创建空的响应式数组
const bannerList = ref([]);
const getBanner = async () => {
  const res = await getBannerAPI();
  console.log(res);
  bannerList.value = res.result;
}
//通过生命周期把它挂载到界面上用于调用
onMounted(() => getBanner())
</script>

<style scoped lang="scss">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
