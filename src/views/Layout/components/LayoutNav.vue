<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <!-- 多模板渲染 -->
        <!-- 登录和非登录显示的内容只能选择一个，根据是否有token进行选择 -->
        <template v-if="userStore.userInfo?.token">
          <li>
            <a href="javascript:;"
              ><i class="iconfont icon-yonghu"></i
              >{{ userStore.userInfo.account }}</a
            >
          </li>
          <li>
            <el-popconfirm
              @confirm="confirm"
              title="确认退出吗?"
              confirm-button-text="确认"
              cancel-button-text="取消"
            >
              <template #reference>
                <a href="javascript:;">退出登录</a>
              </template>
            </el-popconfirm>
          </li>
          <li><a href="javascript:;">我的订单</a></li>
          <li><a href="javascript:;">会员中心</a></li>
        </template>
        <template v-else>
          <li>
            <a href="javascript:;" @click="router.push('/login')">请先登录</a>
          </li>
          <li><a href="javascript:;">帮助中心</a></li>
          <li><a href="javascript:;">关于我们</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>
<script setup lang="js">
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
const userStore = useUserStore();
//里面含有数据 useInfo.token
const router = useRouter()

const confirm = () => {
  console.log('用户要退出登录');
  //清除用户信息,触发action函数
  userStore.clearUserInfo();
  //跳回登录页
  router.push('/login')
}
</script>
<style scoped lang="scss">
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;

        i {
          font-size: 14px;
          margin-right: 2px;
        }

        &:hover {
          color: $xtxColor;
        }
      }

      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>
