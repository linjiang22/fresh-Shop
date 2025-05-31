//封装关于购物车的pinia仓库
import { defineStore } from "pinia";
import { ref } from "vue";
//调用store,第一个参数是仓库名，第二个参数是回调函数，内部编写state和action
export const useCartStore = defineStore(
  "cartStore",
  () => {
    const cartList = ref([]);
    //2.action函数,add cart
    const addCart = (goods) => {
      //添加购物车操作
      //已添加过-count+1   没有添加过直接push
      //思路:通过匹配传递过来的商品对象的skuId能不能在cartList中找到
      const item = cartList.value.find((item) => goods.skuId === item.skuId);
      if (item) {
        //找到了
        item.count++;
      } else {
        cartList.value.push(goods);
      }
    };
    return { cartList, addCart };
  },
  //开启长时间token校验
  { persist: true }
);
