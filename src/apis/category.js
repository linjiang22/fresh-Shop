//分类页接口文档
// import httpInstance from "@/utils/http"; 由于是默认导出，可以自定义它的名字
import request from "@/utils/http";

export const getCategoryAPI = (id) => {
  return request({
    url: "/category",
    params: { id },
  });
};
//过滤项接口
/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id
 * @return {*}
 */

export const getCategoryFilterAPI = (id) => {
  return request({
    params: { id },
  });
};
/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export const getSubCategoryAPI = (data) => {
  return request({
    url: "/category/goods/temporary",
    method: "POST",
    data,
  });
};
