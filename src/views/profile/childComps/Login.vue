<template>
  <div class="login">
    <div class="pict">
      <img src="~assets/img/profile/user.png" alt="">
    </div>
    <div v-if="username" class="username">{{username}}</div>
    <div v-else class="right" >
      <div class="title" @click="login()">
        <span>登录/注册</span>
        <div>
          <img src="~assets/img/profile/phone.png" alt="">
          <span>暂未绑定手机号</span>
        </div>
      </div>
      <span class="arrowright">
        <img src="~assets/img/profile/arrow_right.png" alt="">
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  props:{
    username: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  },
  methods: {
    login(){
      this.$router.replace('/login')
    }
  },
};
</script>
<style  scoped>
.login {
  height: 80px;
  width: 100%;
  background: rgba(255, 142, 150);
  /* display: flex;
  justify-content: space-around;
  align-items: center; */
}

.pict {
  height: 70px;
  width: 70px;
  border-radius: 100%;
  overflow: hidden;
  background-color: white;
  float: left;
  margin-left: 20px;
}

.pict img {
  height: 70px;
  width: 70px;
}

.username{
  color: white;
  font-size: 20px;
  font-weight: bold;
  height: 80px;
  width: 80px;
  float: left;
  line-height: 80px;
  margin-left: 20px;
}

.right {
  width: 220px;
  height: 80px;
  float: left;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
}

.title {
  font-size: 13px;
  color: white;
}
</style>
