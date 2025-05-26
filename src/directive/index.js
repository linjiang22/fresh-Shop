// 此处为插件封装
import { useIntersectionObserver } from "@vueuse/core";
//图片懒加载插件
//注意useIntersectionObserver对图片的监听一直存在，所以设置第一次监听之后就停止监听
export const lazyPlugin = {
  // install是固定写法
  install(app) {
    //懒加载逻辑
    //第一个参数是名字，第二个参数是对象
    app.directive("img-lazy", {
      //在绑定元素的父组件和他自己的所有子节点挂载完成后调用，三个参数，el,binding,vnode
      //el：绑定的元素，binding:binding.value-指令后面绑定的表达式的值
      mounted(el, binding) {
        // console.log("img指令", el, binding.value);
        const { stop } = useIntersectionObserver(
          el, //要监听的参数
          ([{ isIntersecting }]) => {
            console.log(isIntersecting);
            //图片进入视口区域，需要加载
            if (isIntersecting) {
              el.src = binding.value;
              stop();
            }
          }
        );
      },
    });
  },
};
