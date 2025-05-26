import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login/index.vue";
import Layout from "@/views/Layout/index.vue";
import Home from "@/views/Home/index.vue";
import Category from "@/views/Category/index.vue";
import SubCategory from "@/views/SubCategory/index.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 配置path和component对应关系
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "",
          // 是默认界面，可以展示为空
          component: Home,
        },
        {
          path: "category/:id", //占位的id参数
          component: Category,
        },
        {
          path: "category/sub/:id", //占位的id参数
          component: SubCategory,
        },
      ],
    },
    {
      path: "/login",
      component: Login,
    },
  ],
});
export default router;
