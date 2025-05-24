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
const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(createPinia);
app.mount("#app");
