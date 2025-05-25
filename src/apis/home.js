import httpInstance from "@/utils/http";
//获取banner,封装为接口，相当于通过utils中的axios对地址进行响应和拦截等操作
// 通过这个接口将地址暴露出去
export function getBannerAPI() {
  return httpInstance({
    url: "/home/banner",
  });
}
