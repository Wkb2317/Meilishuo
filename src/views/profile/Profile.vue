<template>
  <div class="profile">
    <nav-bar class="navbar">
      <div slot="center">美丽说</div>
    </nav-bar>
    <!-- <div v-if="username" class="username">{{username}}</div> -->
    <login :username="username"></login>
    <money></money>
    <profile-list></profile-list>
  </div>
</template>
<script>
import axios from "axios";
import NavBar from "components/common/navbar/NavBar.vue";
import Login from "./childComps/Login";
import Money from "./childComps/Money.vue";
import ProfileList from "./childComps/ProfileList.vue";
export default {
  components: {
    NavBar,
    Login,
    Money,
    ProfileList
  },
  name: "Profile",
  data() {
    return {};
  },
  computed: {
    username: function() {
      return this.$store.state.userInfo?.username;
    }
  },
  created() {
    this.checktoken()
  },
  methods: {
    async checktoken() {
      const token = localStorage.getItem("token");
      let res = await axios({
        url: "//110.40.236.242:3000/checktoken",
        params: token
      });

      if(res.data.code === 1){
        this.$store.dispatch("getUserInfo", {username: res.data.username})
      }

      console.log(res);
    }
  }
};
</script>
<style scoped>
.navbar {
  background: rgba(255, 142, 150);
  color: white;
}
</style>
