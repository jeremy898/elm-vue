<template>
  <div>
    <div class="header header-address el-icon-location-outline">
        定位地址...
        <i class="header-down el-icon-arrow-down"></i>
    </div>
    <div class="header header-search box">
        <div class="content">
            <i class="el-icon-search"></i>                
            <span>搜索饿了么商家、商品名称</span>
        </div>
    </div>
    <!-- swipe food -->

    <ul class="swipe clearFix">
        <li class="swipe-detail" v-for="item in 10" :key="item">
            <a href="#">
                <div style="position: relative;margin: 0 auto;width: 1.2rem;height: 1.2rem;"><img alt="xx" style="max-width:100%;max-height: 100%;" src="http://iph.href.lu/45x45"></div>
                <span>美食</span>
            </a>
        </li>
    </ul>
    <!-- swipe food -->

    <!-- Advertisement  -->
    <div class="shoplist-title" >推荐商家</div>
    <!-- Advertisement  -->

    <!-- order by -->
    <div class="box1" style="display: flex;justify-content: space-around;font-size:20px;margin: .2rem">
        <div class="content"><a href="#"><span>综合排序</span></a></div>
        <div class="content"><a href="#"><span>距离最近</span></a></div>
        <div class="content"><a href="#"><span>品质联盟</span></a></div>
        <div class="content"><a href="#"><span>筛选</span><i class="el-icon-s-open"></i></a></div>
    </div>
    <!-- order by -->
    
    <!-- shopList -->
    <section v-if="shopList.length>0">
        <ul>
            <li>存放商家列表</li>
        </ul>
    </section>
    <section v-else class="noresult">
        <el-image src='//fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png'></el-image>
        <h4>没有结果</h4>
        <p>登录后查看更多商家</p>
          <el-button type="success" plain>登录</el-button>
    </section>
    <!-- shopList -->
    <div style="height:1200px;margin-bottom: 1rem"></div>
    <!-- nav -->
    <footer style="height:2rem">
        <div class="footer" style="background: #fff;display: flex;justify-content: space-around;align-items: center;">
            <router-link :to="{ path: '/'}" class="flex-wrap" click="cuurentNav('home')" :style="{color: navName === 'home' ? '#0089dc' : '#ababab'}">
                <i class="el-icon-eleme"></i>
                <span>首页</span>
            </router-link>
            <router-link :to="{ path: '/find'}" class="flex-wrap" click="cuurentNav('find')" :style="{color: navName === 'find' ? '#0089dc' : '#ababab'}">
                <i class="el-icon-discover"></i>
                <span>发现</span>
            </router-link>
            <router-link :to="{ path: '/order'}" class="flex-wrap" click="cuurentNav('order')" :style="{color: navName === 'order' ? '#0089dc' : '#ababab'}">
                <i class="el-icon-tickets"></i>
                <span>订单</span>
            </router-link>
            <router-link :to="{ path: '/user'}" class="flex-wrap" click="cuurentNav('user')" :style="{color: navName === 'user' ? '#0089dc' : '#ababab'}">
                <i class="el-icon-user"></i>
                <span>用户</span>
            </router-link>
        </div>
    </footer>
    <!-- nav -->
  </div>
</template>

<style scoped>
.header {
    background:linear-gradient(left ,#0af,#0089dc);
}
.header-address {
    color: #fff;
    display: flex;
    font-size: .6rem;
    padding: 0.3rem;
    justify-content: flex-start;
}
.header-down {
    font-size: 0.2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 0.2rem;
}
.header-search {
    width: 100%;
    height: 1.2rem;
    padding-top: 0.2rem;
    box-sizing: border-box;
}
.header-search>div{
    margin: 0rem 0.4rem 0.1rem 0.4rem;
    font-size: 0.35rem;
    padding: 0.2rem 0.4rem 0.2rem 0.4rem;
    background-color: #fff;
}
.header-search span{
    font-size: 0.4rem;
    color: #999;
}
.box {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
}
.box1 {
  position: -webkit-sticky;
  position: sticky;
  top: 1.3rem;
  z-index: 1;
}
/* swipe food */
.swipe {
    padding: 0 5px;
    margin: .3rem 0;
}
.swipe-detail {
    float: left;
    position: relative;
    width: 20%;
    margin-top: .293333rem;
}
.swipe-detail a{
    display: flex;
    flex-direction: column;
}
.swipe-detail span{
    color: #666;
    font-size: .32rem;
    margin-top: .133rem;

}
.shoplist-title {
    display: flex;
    justify-content: center;
    font-size: .4rem;
    color: #000;
    align-items: center;
    height: .96rem;
}
.shoplist-title:after, .shoplist-title:before{
    display: block;
    content: "";
    margin: 0px 5px;
    width: .533333rem;
    height: .026667rem;
    background-color: #999;
}

.content a{
    font-size: 13px;
    color: #666;
}
.noresult{ 
    font-size: 14px;    
}
.noresult button {
    padding: .266667rem;
    min-width: 3.2rem;
    border: none;
    border-radius: .053333rem;
    background-color: #56d176;
    color: #fff;
    text-align: center;
    font-family: inherit;
}


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
/* common */
.clearFix {
    clear: both;
    display: table;
    content: "";
}
ul {
    list-style: none;
    margin: 0;
}
a {
    text-decoration: none;
}



</style>


<script>
import Carousel from "../components/Carousel";
import Scroll from "../components/Scroll";
export default {
  name: "home",
  data() {
    return {
        shopList: [],
        navName: 'home'
    };
  },
  created() {},
  methods: {
      cuurentNav(val) {
        this.navName = val
      }
  },
  components: {
    Scroll: Scroll,
    Carousel: Carousel
  }
};
</script>