<template>
    <div style="background-color:#f5f5f5">
        <div class="recommend">
            <div class="recommend-left">
                <a href="#">
                    <div class="title">
                        <p>金币商城</p>
                        <span>0元好物在这里</span>
                    </div>
                    <img style="width:50%;" src="http://iph.href.lu/100x100" alt="">
                </a>
            </div>
            <div class="recommend-right">
                <a href="#">
                    <div class="title">
                        <p>金币商城</p>
                        <span>0元好物在这里</span>
                    </div>
                    <img style="width:30%;" src="http://iph.href.lu/60x60" alt="">
                </a>
                <a href="#">
                    <div class="title">
                        <p>金币商城</p>
                        <span>0元好物在这里</span>
                    </div>
                    <img style="width:30%;" src="http://iph.href.lu/60x60" alt="">
                </a>
            </div>
        </div>
        <section class="recom-body">
            <div class="mian-title">
                <i class="el-icon-thumb" style="color:red"></i><span style="font-size:20px;font-weight:bold">为你推荐</span>
                <p style="margin:5px 0;color:#666">你的口味，我都懂得</p>
            </div>
            <div class="goods-list">
                <ul>
                    <li class="list">
                        <img style="width:100%;" src="http://iph.href.lu/145x145" alt="">
                        <aside class="recommend-tip">浏览过的美食相关的推荐</aside>
                        <div class="list-info">
                            <p style="font-weight:bold;font-size:1.1em">猪杂汤河粉</p>
                            <p>月售xx份&nbsp;<span>好评率100%</span></p>
                            <p>￥16&nbsp;<span class="Coupon">满25减5</span></p>
                        </div>
                        <div class="store-name">
                            <i class="el-icon-s-home"></i><span>原味汤粉王</span>
                        </div>
                    </li>
                   <li class="list">
                        <img  style="width:100%;" src="http://iph.href.lu/145x145" alt="">
                        <aside class="recommend-tip">浏览过的美食相关的推荐</aside>
                        <div class="list-info">
                            <p style="font-weight:bold;font-size:1.1em">猪杂汤河粉</p>
                            <p>月售xx份&nbsp;<span>好评率100%</span></p>
                            <p>￥16&nbsp;<span class="Coupon">满25减5</span></p>
                        </div>
                        <div class="store-name">
                            <i class="el-icon-s-home"></i><span>原味汤粉王</span>
                        </div>
                    </li>
                    <li class="list">
                        <img  style="width:100%;" src="http://iph.href.lu/145x145" alt="">
                        <aside class="recommend-tip">浏览过的美食相关的推荐</aside>
                        <div class="list-info">
                            <p style="font-weight:bold;font-size:1.1em">猪杂汤河粉</p>
                            <p>月售xx份&nbsp;<span>好评率100%</span></p>
                            <p>￥16&nbsp;<span class="Coupon">满25减5</span></p>
                        </div>
                        <div class="store-name">
                            <i class="el-icon-s-home"></i><span>原味汤粉王</span>
                        </div>
                    </li>
                    <li class="list">
                        <img  style="width:100%;" src="http://iph.href.lu/145x145" alt="">
                        <aside class="recommend-tip">浏览过的美食相关的推荐</aside>
                        <div class="list-info">
                            <p style="font-weight:bold;font-size:1.1em">猪杂汤河粉</p>
                            <p>月售xx份&nbsp;<span>好评率100%</span></p>
                            <p>￥16&nbsp;<span class="Coupon">满25减5</span></p>
                        </div>
                        <div class="store-name">
                            <i class="el-icon-s-home"></i><span>原味汤粉王</span>
                        </div>
                    </li>
                </ul>
            </div>
            <p style="color:#999;">查看更多<span><i class="el-icon-arrow-right"></i></span></p>
        </section>
    </div>
</template>
<style scoped>
    .recommend{
        display: flex;
        font-size: 12px;
        line-height: 2em;
        background-color: #fff;
    }
    .recommend a{
        width: 100%;
    }
    .recommend-left{
        flex: 1;
        display: flex;
    }
    .recommend-right{
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    .title{
        display: inline-block;
        line-height: 2em;
    }
    .recom-body{
        margin-top:10px;
        padding: 5px 0;
        background-color: #fff;
    }
    .mian-title{
        line-height: 1em;
    }
    .goods-list{
        display: flex;
    }
    .list{
        width: 50%;
        line-height: 1em;
        box-sizing: border-box;
        padding: 0 10px;
    }
    .goods-list ul{
        padding: 0;
        width: 100%;
    }
    .goods-list li {
        float: left;
        position: relative;
    }
    .recommend-tip{
        position: absolute;
        font-size: 12px;
        top: 40vw;
        background-color: rgba(0,0,0,.5);
        color: #fff;
        width: 88%;
    }
    .list-info{
        font-size: 14px;
        text-align: left;
    }
    .list-info p{
        margin: 0;
        line-height: 18px;
    }
    .Coupon{
        border: 1px solid #f66d6b;
        color: #f66d6b;
        font-size: 0.8em;
    }
    .store-name{
        color:#666;
        line-height: 1.8em;
        text-align: left;
        border-top: 1px solid #ccc;
    }
</style>
<script>
export default {
  name: "Find",
  data() {
    return {
    };
  },
  created() {},
  methods: {
  }
};
</script>