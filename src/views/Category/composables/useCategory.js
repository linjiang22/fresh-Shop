//封装分类数据相关业务代码
//导入接口函数
import { getCategoryAPI } from "@/apis/category.js";
import { onMounted, ref } from "vue";
//获取路由参数
import { useRoute } from "vue-router";
import { onBeforeRouteUpdate } from "vue-router";
export function useCategory() {
  //获取数据，返回的响应为code,msg,result(Object)
  const categoryData = ref({});
  const route = useRoute();
  const getCategory = async (id = route.params.id) => {
    //接收下面传过来的id,开始给一个默认id
    const res = await getCategoryAPI(id);
    console.log("分类页", res);
    categoryData.value = res.result;
  };
  onMounted(() => getCategory());
  //希望监听路由变化重新发送分类数据接口请求
  onBeforeRouteUpdate((to) => {
    console.log("路由变化");
    //存在问题，调取的参数是变化之后的参数，route.params.id具有滞后性，拿不到最新参数
    getCategory(to.params.id);
  });

  return { categoryData };
}
