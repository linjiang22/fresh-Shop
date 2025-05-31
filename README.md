# fresh_shop

1. 配置 element-plus
2. 安装插件
3. 配置自定义主题

### 配置 axios

- npm i axios

1. 创建 axios 实例，设置暴露
2. 配置请求拦截器和响应拦截器

### 配置路由

1. 创建总体路由在 router 文件夹下
2. 创建 router 对象
   const router = createRouter();
   里面的参数含义；
3. history：一般是 historyweb 和 historyHashWeb(带#)
4. routes 代表里面的路由路径，一级路由下通过 children 可以有二级路由，
5. 默认二级路由的设置办法，path 配置为空
6. 之后再 main 入口内引入 router,之后 app.use(router);就可以在界面中通过<RouterView />来展示响应路由界面的内容
7. 配置全局使用颜色，在 styles 中创建 var.scss，再在 vite.config.js 中引入全局使用此文件中的样式，全局样式名一般$开头
8. 吸顶导航的渲染
9. 共同的请求分发给吸顶导航和导航栏，减少性能损耗
   const useCategory = defineStore('category', () => {
   // 导航列表的数据管理
   })
   第一个参数 'category'：这是 store 的唯一标识符 ，必须是字符串且在整个应用中唯一，Pinia 使用这个 ID 来连接 Vue devtools，在组件中可以通过这个 ID 访问 store
   第二个参数：用于定义 store 的状态和行为，函数应该返回一个对象，包含 state、getters 和 actions，
   Store 在首次使用时才会被创建，具有懒加载特性
10. store 相当于 pinia 仓库
    import { defineStore } from "pinia";通过这个给仓库定 id 和函数
    getCategoryAPI()这个是一个请求参数，他是一个 promise 对象，
    const useCategoryStore = defineStore("category", () => {
    //导航列表的数据管理
    const categoryList = ref([]);//创建一个空的响应式数组，得到 getCategoryAPI 获得的内容放进数组中
    const getCategory = async () => {
    // 返回的是一个 promise，
    const res = await getCategoryAPI();
    categoryList.value = res.result;
    };
    //把定义的数据和方法送出去 v
    return {
    categoryList,
    getCategory,
    };
    });

11. 接口的理解，在 utils 中通过 axios 创建实例，它可以对调用 httpInstance 的接口中的链接进行响应和拦截，所有的接口都要继承 httpInstance 方法，
    export function getBannerAPI() {
    return httpInstance({
    url: "/home/banner",
    });
    }
    通过创建 API 将接口暴露出去，需要调用这个地址的组件都可以使用
12. 调用 API 接口，创建响应式空数组，通过异步函数将获得的内容用 res 承接，再把获得的数据的内容赋给 bannerList，在在页面中进行渲染。
    const bannerList = ref([]);
    const getBanner = async () => {
    const res = await getBannerAPI();
    console.log(res);
    bannerList.value = res.result;
    }
    //通过生命周期把它挂载到界面上用于调用
    onMounted(() => getBanner())

### 组件封装

1. 组件封装主要优点：复用性好，页面容易维护
   - 思路：将可复用的结构只写一次，把可能发生变化的部分抽象成组件函数（props/插槽）

### 图片懒加载

1. 实现只有进入视口区域才发送图片请求
2. <img v-img-lazy="item.picture" />在 img 身上绑定指令，该图片只有正式进入视口区域才会发送图片的网络请求

### 逻辑拆分

1. 将业务逻辑封装为以 use 开头的函数，将业务逻辑封装进去，之后将需要的数据 return 为对象，
2. 在其他组件中调用时，只需要将函数导入，再将需要的数据进行解构赋值，就可以在界面中使用

### 详情页业务逻辑

1. 路由配置：在 router 文件中引入 detaill 组件，他是 routerView 出口文件中的内容
   - 在 path 中给定路由，赋值 id 占位符

### 通用性组件的全局注册

1. 将某目录下的所有组件进行全局注册，再在 main.js 中注册插件，main.js 相当于入口

自定义校验规则
validator:(rule,val,callback) =>{
//rule:规则
//val:当前输入的数据
//callback：校验处理函数，校验通过调用
}

账号：xiaotuxian001
密码：123456

### axios 中拦截器

1. 在请求发送前或响应返回后统一拦截和处理 HTTP 请求和响应，属于全局拦截
2. 两种类型: 1. 请求拦截器：添加全局请求头，修改数据格式，验证请求参数 2.响应拦截器：在响应到达客户端代码前，统一处理错误状态码，全局错误提示
3. 登录失败提示的业务逻辑，在响应式拦截器中定义一个全局的错误拦截

### Pinia 管理用户数据

1. 创建一个 pinia 仓库，export const useUserStore = defineStore("user", () => {}) 仓库名加回调函数
2. 定义响应式存储数据的 info，定义获取接口数据的 action 函数，需要用异步修饰，所以在 index 中调用时也需要用 await 修饰，最后将数据和函数 return 出去。

- 持久化用户数据

  - token 用来标识当前用户是否登录，而 token 持续一段时间才会过期
  - pinia 的存储是基于内存的，刷新就会丢失，为了保持登录状态要做到：刷新不丢失数据
  - 用到插件：pinia-plugin-persistedstate
    - 主要步骤：1. 安装插件， 2. 在 main.js 中注册 pinia 插件， 3. 在需要持久化配置的 store 文件中进行配置{persist: true,}选项的操作

- 退出登录业务
  - 1. 清除当前用户信息
  - 2. 跳转到登录界面

token 的有效性可以保持一定时间，如果用户一段时间不做任何操作，token 就会失效，使用失效的 token 去请求一些接口，接口会报 401 错误
