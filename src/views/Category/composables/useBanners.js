//封装轮播图相关业务代码
//获取banner
//得到响应数据,创建空的响应式数组
import { onMounted, ref } from "vue";
import { getBannerAPI } from "@/apis/home";
export function useBanner() {
  const bannerList = ref([]);
  const getBanner = async () => {
    const res = await getBannerAPI({ distributionSite: 2 });
    console.log("轮播图", res);
    bannerList.value = res.result;
  };
  //通过生命周期把它挂载到界面上用于调用
  onMounted(() => getBanner());

  return {
    bannerList,
  };
}
