// import "@/styles/element/index.scss";
import { createApp } from "vue";
import { createPinia } from "pinia";
//持久化token插件导入
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import ElementPlus from "element-plus";
import router from "./router/index.js";
//引入初始化样式文件
import "@/styles/common.scss";

//测试接口函数
// import { getCategory } from "@/apis/testAPI";
// getCategory().then((res) => {
//   console.log(res);
// });
//引入懒加载插件并注册
import { lazyPlugin } from "@/directive/index.js";
//引入全局组件插件
import { componentPlugin } from "@/components/index.js";
const app = createApp(App);
const pinia = createPinia();
//注册持久化插件
pinia.use(piniaPluginPersistedstate);
//pinia实例创建后放入app中
app.use(pinia);
app.use(router);
app.use(ElementPlus);
//插件注册
app.use(lazyPlugin);
app.use(componentPlugin);
app.mount("#app");
//挂载app后定义全局指令
