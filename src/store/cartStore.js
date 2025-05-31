//封装关于购物车的pinia仓库
import { defineStore } from "pinia";
import { computed, ref } from "vue";
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
    //删除购物车
    const delCart = (skuId) => {
      //在数组中删除，1.删除数组的下标值splice 2.数组的过滤方法filter
      const idx = cartList.value.findIndex((item) => skuId === item.skuId);
      cartList.value.splice(idx, 1);
    };
    //单选功能
    const singleCheck = (skuId, selected) => {
      //通过skuId找到要修改的那一项，把他的selected字段修改为传过来的selected
      //查找用find
      const item = cartList.value.find((item) => item.skuId === skuId);
      item.selected = selected; //修改为传过来的selected
    };

    //计算属性
    //1.数量 2.总价
    //计算属性computed,求和reduce
    const allCount = computed(() =>
      cartList.value.reduce((a, c) => a + c.count, 0)
    );
    //reduce第一个参数是回调，第二个参数是初始值,a是每次加起来都会交给a，c是每次要加的
    const allPrice = computed(() =>
      cartList.value.reduce((a, c) => a + c.count * c.price, 0)
    );
    return { cartList, addCart, delCart, allCount, allPrice, singleCheck };
  },
  //开启长时间token校验
  { persist: true }
);
