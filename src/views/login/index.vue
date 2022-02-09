<template>
  <div class="login">
    <nav-bar class="navbar">
      <div slot="center">登录</div>
    </nav-bar>

    <div class="loginwrapper">
      <van-form @submit="onSubmit">
        <van-field v-model="username"
                   name="username"
                   label="用户名"
                   placeholder="用户名"
                   :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="password"
                   type="password"
                   name="password"
                   label="密码"
                   placeholder="密码"
                   :rules="[{ required: true, message: '请填写密码' }]" />
        <div style="margin: 16px">
          <van-button round
                      block
                      type="info"
                      native-type="submit">登录</van-button>
        </div>
      </van-form>
      <div class="register"
           @click="register()">注册</div>
    </div>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue";
import axios from 'axios';
import Vue from 'vue'
import { Toast } from 'vant';

Vue.use(Toast);
export default {
  name: "Login",
  components: {
    NavBar
  },
  data () {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    async onSubmit (values) {
      console.log(values);
      const res = await axios({
        url: '//localhost:3000/login',
        method: 'post',
        data: values,
      })
      switch (res.data.code) {
        case 0:
          Toast.fail('账号密码错误')
          // this.$toast('账号或密码错误');
          break;
        case 1:
          Toast.success('登录成功')
          localStorage.setItem('token',res.data.token)
          this.$store.dispatch('getUserInfo',{username: values.username})
          this.$router.replace('/profile')
          break;
        default:
          break;
      }
    },

    register () {
      this.$router.replace("/register")
    }
  }
};
</script>
<style scoped>
.login {
  height: 100vh;
  width: 100%;
}

.navbar {
  background: rgba(255, 142, 150);
  color: white;
}

.van-button--info {
  margin-top: 50px;
  background: rgba(255, 142, 150) !important;
  border: 1px solid rgba(255, 142, 150) !important;
}

.loginwrapper {
  margin-top: 100px;
  height: 400px;
  width: 100%;
  padding: 20px;
}

.register {
  width: 100%;
  text-align: end;
  font-size: 14px;
  padding-right: 20px;
}
</style>
