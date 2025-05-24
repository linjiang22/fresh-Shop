import httpInstance from "@/utils/http";
//因为返回的是promise,所以需要return出去
export function getCategory() {
  return httpInstance({
    url: "home/category/head",
  });
}
