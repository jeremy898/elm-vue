<template>
    <div>
        <section v-if="orderList.length > 1">
            <div>
                <div>
                    <div><a href="#"><img src="http://iph.href.lu/45x45"></a></div>
                    <div><label>店铺名称</label><span>2019-05-15 12:12:21</span></div>
                    <div><label>订单已送达</label></div>
                </div>
                <div><label>商品名称xx个 等x个商品</label></div>
                <div>
                    <el-button type="success" plain>再来一单</el-button>
                    <el-button type="success" plain>评价得金币</el-button>
                </div>
            </div>
        </section>
        <section v-else>
            <img src="//fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png">
            <h4>登录后查看外卖订单</h4>
            <el-button type="success" plain>立即登录</el-button>
        </section>
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