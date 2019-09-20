<template>
    <div style="background-color:#f5f5f5">
        <section v-if="orderList.length > 1">
            <div style="background-color:#fff">
                <div class="store">
                    <div><a href="#"><img src="http://iph.href.lu/45x45"></a></div>
                    <div class="store-info"><label>店铺名称</label><span class="arrive-time">2019-05-15 12:12:21</span></div>
                    <div class="arrive"><label>订单已送达</label></div>
                </div>
                <div class="goods-price"><label>商品名称xx个 等x个商品</label><span class="price">￥22.00</span></div>
                <div class="discuss">
                    <el-button type="primary" plain>再来一单</el-button>
                    <el-button type="danger" plain>评价得金币</el-button>
                </div>
            </div>
        </section>
        <section v-else>
            <img src="//fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png">
            <h4>登录后查看外卖订单</h4>
            <el-button type="success" plain>立即登录</el-button>
        </section>
        <p style="color:#999;">查看三个月前的外卖订单<span><i class="el-icon-arrow-down"></i></span></p>
    </div>
</template>
<style scoped>

</style>
<script>
export default {
    name: 'order',
    data() {
        return {
            orderList: [1,2]
        }
    }
}
</script>
<style scoped>
    .store{
        display: flex;
        padding: 10px;
    }
    .store-info{
        margin-left: 10px;
        text-align: left;
        line-height: 1.4em;
    }
    .arrive-time{
        display: block;
    }
    .arrive{
        text-align: right;
        margin-left: 40px;
        line-height: 2.5em;
    }
    .goods-price{
        border-top:1px solid gray;
        border-bottom:1px solid gray;
        margin: 0 20px 0 55px;
        padding: 5px 0;
        text-align: left;
    }
    .price{
        margin-left: 40px;
    }
    .discuss{
        text-align: right;
        line-height: 2.5em;
        padding: 0 20px;
    }
</style>