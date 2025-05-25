# fresh_shop
1. 配置element-plus
2. 安装插件
3. 配置自定义主题
### 配置axios
- npm i axios
1. 创建axios实例，设置暴露
2. 配置请求拦截器和响应拦截器
### 配置路由
1. 创建总体路由在router文件夹下
2. 创建router对象
const router = createRouter();
里面的参数含义；
  1. history：一般是historyweb和historyHashWeb(带#)
  2. routes代表里面的路由路径，一级路由下通过children可以有二级路由，
  3. 默认二级路由的设置办法，path配置为空
3. 之后再main入口内引入router,之后app.use(router);就可以在界面中通过<RouterView />来展示响应路由界面的内容
4. 配置全局使用颜色，在styles中创建var.scss，再在vite.config.js中引入全局使用此文件中的样式，全局样式名一般$开头
5. 吸顶导航的渲染
6. 共同的请求分发给吸顶导航和导航栏，减少性能损耗
   const useCategory = defineStore('category', () => {
  // 导航列表的数据管理
})
第一个参数 'category'：这是 store 的唯一标识符 ，必须是字符串且在整个应用中唯一，Pinia 使用这个 ID 来连接 Vue devtools，在组件中可以通过这个 ID 访问 store
第二个参数：用于定义 store 的状态和行为，函数应该返回一个对象，包含 state、getters 和 actions，
Store 在首次使用时才会被创建，具有懒加载特性
7. store相当于pinia仓库
   import { defineStore } from "pinia";通过这个给仓库定id和函数
   getCategoryAPI()这个是一个请求参数，他是一个promise对象，
   const useCategoryStore = defineStore("category", () => {
  //导航列表的数据管理
  const categoryList = ref([]);//创建一个空的响应式数组，得到getCategoryAPI获得的内容放进数组中
  const getCategory = async () => {
    // 返回的是一个promise，
    const res = await getCategoryAPI();
    categoryList.value = res.result;
  };
  //把定义的数据和方法送出去v
  return {
    categoryList,
    getCategory,
  };
});

8. 接口的理解，在utils中通过axios创建实例，它可以对调用httpInstance的接口中的链接进行响应和拦截，所有的接口都要继承httpInstance方法，
   export function getBannerAPI() {
  return httpInstance({
    url: "/home/banner",
  });
}
通过创建API将接口暴露出去，需要调用这个地址的组件都可以使用
9. 调用API接口，创建响应式空数组，通过异步函数将获得的内容用res承接，再把获得的数据的内容赋给bannerList，在在页面中进行渲染。
    const bannerList = ref([]);
const getBanner = async () => {
  const res = await getBannerAPI();
  console.log(res);
  bannerList.value = res.result;
}
//通过生命周期把它挂载到界面上用于调用
onMounted(() => getBanner())
10. 
