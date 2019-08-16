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
    <el-row :gutter="20">
        <el-col :span="2" :offset="2"><div ><a href="#"><img alt="xx" src="http://iph.href.lu/70x50"><span>1</span></a></div></el-col>
        <el-col :span="2" :offset="2"><div ><a href="#"><img alt="xx" src="http://iph.href.lu/70x50"><span>2</span></a></div></el-col>
        <el-col :span="2" :offset="2"><div ><a href="#"><img alt="xx" src="http://iph.href.lu/70x50"><span>3</span></a></div></el-col>
        <el-col :span="2" :offset="2"><div ><a href="#"><img alt="xx" src="http://iph.href.lu/70x50"><span>4</span></a></div></el-col>
        <el-col :span="2" :offset="2"><div ><a href="#"><img alt="xx" src="http://iph.href.lu/70x50"><span>5</span></a></div></el-col>
        <el-col :span="2" :offset="2"><div ><a href="#"><img alt="xx" src="http://iph.href.lu/70x50"><span>1</span></a></div></el-col>
        <el-col :span="2" :offset="2"><div ><a href="#"><img alt="xx" src="http://iph.href.lu/70x50"><span>2</span></a></div></el-col>
        <el-col :span="2" :offset="2"><div ><a href="#"><img alt="xx" src="http://iph.href.lu/70x50"><span>3</span></a></div></el-col>
        <el-col :span="2" :offset="2"><div ><a href="#"><img alt="xx" src="http://iph.href.lu/70x50"><span>4</span></a></div></el-col>
        <el-col :span="2" :offset="2"><div ><a href="#"><img alt="xx" src="http://iph.href.lu/70x50"><span>5</span></a></div></el-col>
    </el-row>
    <!-- <ul class="swipe">
        <li class="swipe-detail"><a href="#"><img alt="xx" src="http://iph.href.lu/70x50"><span>1</span></a></li>
        <li class="swipe-detail"><a href="#"><img alt="xx" src="http://iph.href.lu/70x50"><span>2</span></a></li>
        <li class="swipe-detail"><a href="#"><img alt="xx" src="http://iph.href.lu/70x50"><span>3</span></a></li>
        <li class="swipe-detail"><a href="#"><img alt="xx" src="http://iph.href.lu/70x50"><span>2</span></a></li>
    </ul> -->
    <!-- swipe food -->
    
    <div style="height:1200px"></div>
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
/* swipe food */
.swipe {
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
    align-items: flex-start;
}

.swipe-detail a{
    display: flex;
    flex-direction: column;
}

/* common */
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
    return {};
  },
  created() {},
  methods: {},
  components: {
    Scroll: Scroll,
    Carousel: Carousel
  }
};
</script>