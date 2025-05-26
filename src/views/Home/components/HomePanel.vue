<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
        <!-- 主标题和副标题 -->
        <h3>
          {{ title }}<small>{{ subTitle }}</small>
        </h3>
      </div>
      <!-- 主体内容区域 -->
      <!-- <div>主体内容</div> -->
      <!-- 变为插槽 -->
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="js">
//将可变的文字抽象为props
//定义
defineProps({
  //主标题
  title:{
    type: String,
  },
  //副标题
  subTitle: {
    type:String,
  }
})
</script>

<style scoped lang="scss">
.home-panel {
  background-color: #fff;

  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;

    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;

      small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
</style>
