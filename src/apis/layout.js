import httpInstance from "@/utils/http";
//axios部分的内容，用于响应和拦截
export function getCategoryAPI() {
  return httpInstance({
    //配置请求参数
    url: "/home/category/head",
  });
}
