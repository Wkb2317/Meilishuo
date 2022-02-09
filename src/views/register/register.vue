<template>
  <div class="register">
    <nav-bar class="navbar">
      <div slot="center">注册</div>
    </nav-bar>
    <div class="registerwrapper">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="surepassword"
          type="password"
          name="surepassword"
          label="确认密码"
          placeholder="请再次确认密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >注册</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue";
import axios from "axios";
import Vue from "vue";
import { Toast } from "vant";

export default {
  name: "Register",
  components: {
    NavBar
  },
  data() {
    return {
      username: "",
      password: "",
      surepassword: ""
    };
  },
  methods: {
    async onSubmit(values) {
      if (values.password !== values.surepassword) {
        Toast.fail("密码不一致");
        return;
      }
      const res = await axios({
        url: '//localhost:3000/register',
        method: 'post',
        data: values,
      })
      switch (res.data.code) {
        case 0:
          Toast.fail('用户名已存在')
          break;
        case 1:
          Toast.success('注册成功')
          this.$router.replace('/login')
          break;
        default:
          break;
      }
    }
  }
};
</script>
<style scoped>
.van-cell {
  margin: 40px 0 !important;
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

.registerwrapper {
  margin-top: 100px;
  height: 400px;
  width: 100%;
  padding: 20px;
}
</style>
