//管理用户信息相关
import { defineStore } from "pinia";
import { ref } from "vue";
import { loginAPI } from "@/apis/user.js";
//仓库名+回调函数
export const useUserStore = defineStore(
  "user",
  () => {
    //内部定义数据和方法
    //1.定义管理用户数据的state  2. 定义获取接口数据的action函数
    //3.以对象形式将数据和action return出去
    const userInfo = ref({});
    const getUserInfo = async ({ account, password }) => {
      //登录接口
      //原接口中有这两个参数，要在此方法中得到，必须从主方法传进来
      const res = await loginAPI({ account, password });
      userInfo.value = res.result;
    };
    //退出登录时的业务逻辑
    const clearUserInfo = () => {
      userInfo.value = {};
      //变成空对象
    };
    return {
      userInfo,
      getUserInfo,
      clearUserInfo,
    };
  },
  {
    persist: true,
  }
);
