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
</style>


<script>
export default {
  name: "home",
  data() {
    return {
        shopList: [],
    };
  },
  created() {},
  methods: {
  }
};
</script>