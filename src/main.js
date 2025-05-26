// import "@/styles/element/index.scss";
import { createApp } from "vue";
import { createPinia } from "pinia";
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
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(ElementPlus);
//插件注册
app.use(lazyPlugin);
app.mount("#app");
//挂载app后定义全局指令
