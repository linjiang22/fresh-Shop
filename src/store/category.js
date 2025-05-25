//作为一个共同的请求，将顶部导航的内容和吸顶导航的两次请求合并为一次
//作为一个接口
import { ref, computed } from "vue";
import { defineStore } from "pinia";
//接口
import { getCategoryAPI } from "@/apis/layout.js";
const useCategoryStore = defineStore("category", () => {
  //导航列表的数据管理
  const categoryList = ref([]);
  const getCategory = async () => {
    // 返回的是一个promise，
    const res = await getCategoryAPI();
    categoryList.value = res.result;
  };
  //把定义的数据和方法送出去v
  return {
    categoryList,
    getCategory,
  };
});
export default useCategoryStore;
