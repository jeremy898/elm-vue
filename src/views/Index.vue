<template>
    <div>
        <router-view></router-view>
        <!-- nav -->
        <footer style="height:2rem">
            <div class="footer" style="background: #fff;display: flex;justify-content: space-around;align-items: center;">
                <router-link :to="{ path: '/home'}" class="flex-wrap" @click.native="navName = 'home'" :style="{color: navName === 'home' ? '#0089dc' : '#ababab'}">
                    <i class="el-icon-eleme"></i>
                    <span>首页</span>
                </router-link>
                <router-link :to="{ path: '/find'}" class="flex-wrap" @click.native="navName = 'find'" :style="{color: navName === 'find' ? '#0089dc' : '#ababab'}">
                    <i class="el-icon-discover"></i>
                    <span>发现</span>
                </router-link>
                <router-link :to="{ path: '/order'}" class="flex-wrap" @click.native="navName = 'order'" :style="{color: navName === 'order' ? '#0089dc' : '#ababab'}">
                    <i class="el-icon-tickets"></i>
                    <span>订单</span>
                </router-link>
                <router-link :to="{ path: '/user'}" class="flex-wrap" @click.native="navName = 'user'" :style="{color: navName === 'user' ? '#0089dc' : '#ababab'}">
                    <i class="el-icon-user"></i>
                    <span>我的</span>
                </router-link>
            </div>
        </footer>
        <!-- nav -->
    </div>
</template>
<style scoped>
/* footer */
.footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 1rem;
    font-size: 13px;
    border-top: 1px solid rgba(0,0,0,.1);
    box-shadow: 0 -.5px 1px rgba(0,0,0,.1);
    padding: 7px 0;
}
.footer .flex-wrap {
    flex-direction: column;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    color: #ababab;
}
.flex-wrap:active {
    color: #0089dc;
}
</style>


<script>
import Home from "./nav/Home";
import Order from "./nav/Order";
import Find from "./nav/Find";
import User from "./nav/User";
export default {
  name: "home",
  data() {
    return {
        navName: 'home'
    };
  },
  created() {},
  methods: {
      
  },
  components: {
    Order: Order,
    Home: Home,
    Find: Find,
    User: User
  }
};
</script>