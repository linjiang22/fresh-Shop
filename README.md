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
4. 
