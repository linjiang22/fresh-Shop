import httpInstance from "@/utils/http";
//获取banner,封装为接口，相当于通过utils中的axios对地址进行响应和拦截等操作
// 通过这个接口将地址暴露出去
//将distributionSite参数默认为1，商品为2，通过解构赋值

export function getBannerAPI(params = {}) {
  const { distributionSite = "1" } = params;
  return httpInstance({
    url: "/home/banner",
    params: { distributionSite },
  });
}

//新鲜好物和人气推荐的接口

export const findNewAPI = () => {
  return httpInstance({
    url: "/home/new",
  });
};

export const findHotAPI = () => {
  return httpInstance({
    url: "/home/hot",
  });
};

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return httpInstance({
    url: "/home/goods",
  });
};
