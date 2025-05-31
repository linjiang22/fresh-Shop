//全局插件的注册将所有通用组件都进行注册
//插件思路。1.定义对象
import ImgView from "./imgView/index.vue";
import Sku from "./XtxSku/index.vue";
export const componentPlugin = {
  //固定的方法install
  install(app) {
    //内部使用app.component('组件的名字'，'组件的配置对象')进行插件开发
    app.component("XtxImgView", ImgView);
    app.component("XtxSku", Sku);
  },
};
