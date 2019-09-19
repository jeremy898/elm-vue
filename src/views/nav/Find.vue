<template>
    <div style="background-color:#f5f5f5">
        <div class="recommend">
            <div class="recommend-left">
                <a href="#">
                    <div class="title">
                        <p>金币商城</p>
                        <span>0元好物在这里</span>
                    </div>
                    <img src="http://iph.href.lu/100x100" alt="">
                </a>
            </div>
            <div class="recommend-right">
                <a href="#">
                    <div class="title">
                        <p>金币商城</p>
                        <span>0元好物在这里</span>
                    </div>
                    <img src="http://iph.href.lu/60x60" alt="">
                </a>
                <a href="#">
                    <div class="title">
                        <p>金币商城</p>
                        <span>0元好物在这里</span>
                    </div>
                    <img src="http://iph.href.lu/60x60" alt="">
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
                        <img src="http://iph.href.lu/145x145" alt="">
                        <p>xxxxx</p>
                    </li>
                    <li class="list">
                        <img src="http://iph.href.lu/145x145" alt="">
                        <p>xxxxx</p>
                    </li>
                    <li class="list">
                        <img src="http://iph.href.lu/145x145" alt="">
                        <p>xxxxx</p>
                    </li>
                    <li class="list">
                        <img src="http://iph.href.lu/145x145" alt="">
                        <p>xxxxx</p>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>
<style scoped>
    .recommend{
        display: flex;
        height: 200px;
        font-size: 12px;
        line-height: 2em;
        background-color: #fff;
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
        background-color: #fff;
    }
    .mian-title{
        line-height: 1em;
    }
    .list{
        float: left;
        margin-right: 15px;
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