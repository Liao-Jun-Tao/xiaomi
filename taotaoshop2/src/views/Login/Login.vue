<template>
  <header>
    <van-nav-bar right-text="帮助" left-arrow @click-left="onClickLeft" />
  </header>
  <main class="main">
    <div class="logo">
      <div><img src="https://i.328888.xyz/2023/02/24/7ZpsA.png" /></div>
      <div>小米账号登录</div>
    </div>
    <van-form @failed="onFailed" @submit="onSubmit">
      <van-cell-group inset>
        <!-- 通过 pattern 进行正则校验 -->
        <van-field
          v-model="state.userName"
          name="userName"
          placeholder="请输入手机号/邮箱/ID"
          :rules="state.rules.userTel"
        />
      </van-cell-group>
      <van-cell-group inset>
        <!-- 通过 pattern 进行正则校验 -->
        <van-field
          v-model="state.userPwd"
          name="userPwd"
          placeholder="请输入密码"
          :rules="state.rules.userPwd"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button
          round
          block
          type="primary"
          native-type="submit"
          @click="login"
        >
          登录
        </van-button>
      </div>
    </van-form>
  </main>
</template>

<script setup>
import { reactive } from 'vue';
import { showSuccessToast, showFailToast } from 'vant';
import { useRouter } from 'vue-router';
import { doLogin } from '@/service/login.js';
import { useUserStore } from '@/store/user.js';
const state = reactive({
  userName: '',
  userPwd: '',
  //验证规则
  rules: {
    userTel: [
      {
        required: true,
        pattern:
          /^1((3[\d])|(4[5,6,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[1-3,5-8])|(9[1,8,9]))\d{8}$/,
        message: '手机号不能空并且是9位数字'
      }
    ],
    userPwd: [
      {
        required: true,
        pattern: /^[0-9A-Za-z]{6,}$/,
        message: '密码不能为空并必须不少于6位且由数字或字母组成'
      }
    ]
  }
});
const store = useUserStore()
const router = useRouter()
const login = async () => {
  const user = {
    userName: state.userName,
    userPwd: state.userPwd
  };
  const data = await doLogin(user)
  console.log(data)
  if (data.code != 0) {
    console.log(data.msg)
    showFailToast('账号或密码错误')
  } else {
    //成功了
    if (data.token) {
      showSuccessToast('登录成功')
      localStorage.setItem('token', data.token)
      store.isLogin = true;
      console.log(store.isLogin);

      setTimeout(() => {
        router.push(
          {
            path: `/`
          })
      },2000)
    }
  }
}

const onFailed = (errorInfo) => {
  //   console.log('failed', errorInfo);
};
const onSubmit = (values) => {
  //   console.log('验证成功', values);
};
const onClickLeft = () => history.back();
</script>

<style lang="stylus" scoped>
.logo
    text-align center
    font-size .533333rem
    font-weight 500
.logo div img
    width 2.666667rem
</style>
