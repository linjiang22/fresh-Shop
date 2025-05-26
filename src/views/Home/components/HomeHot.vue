<template>
  <HomePanel title="人气推荐" subTitle="人气推荐 好好好"></HomePanel>
  <!-- 下面是插槽主体内容模版 -->
  <ul class="goods-list">
    <li v-for="item in hotList" :key="item.id">
      <RouterLink to="/">
        <img v-img-lazy="item.picture" alt="" />
        <p class="name">{{ item.name }}</p>
        <p>{{ item.title }}</p>
        <p class="desc">{{ item.alt }}</p>
      </RouterLink>
    </li>
  </ul>
</template>
<script setup lang="js">
import { onMounted,ref } from 'vue';
import HomePanel from './HomePanel.vue';
import { findHotAPI } from '@/apis/home';

const hotList = ref([]);
//异步action
const getHot = async () => {
  const res = await findHotAPI();
  console.log('人气推荐', res);
  hotList.value = res.result;
}
onMounted(() => getHot())
//检测组件是否进入视口区域
</script>

<style scoped lang="scss">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;

  li {
    width: 306px;
    height: 406px;
    transition: all 0.5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }

    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>
