<template>
  <HomePanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱"></HomePanel>
  <!-- 下面是插槽主体内容模版 -->
  <ul class="goods-list">
    <li v-for="item in findNewList" :key="item.id">
      <RouterLink :to="`/detail/${item.id}`">
        <img :src="item.picture" alt="" />
        <p class="name">{{ item.name }}</p>
        <p class="price">&yen;{{ item.price }}</p>
      </RouterLink>
    </li>
  </ul>
</template>
<script setup lang="js">
import { onMounted,ref } from 'vue';
import HomePanel from './HomePanel.vue';
import { findNewAPI } from '@/apis/home';
const findNewList = ref([]);
//异步action
const getFindNew = async () => {
  const res = await findNewAPI();
  console.log('新鲜好物', res);
  findNewList.value = res.result;
}
onMounted(()=>getFindNew())
</script>

<style scoped lang="scss">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
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
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>
