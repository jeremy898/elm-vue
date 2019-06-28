<template>
    <div class="footer">
        <div class="footer-item"><span class="item-icon el-icon-eleme"></span>首页</div>
        <div class="footer-item"><span class="item-icon el-icon-discover"></span>发现</div>
        <div class="footer-item"><span class="item-icon el-icon-tickets"></span>订单</div>
        <div class="footer-item"><span class="item-icon el-icon-user"></span>我的</div>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    }    
}
</script>

<style>
.footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    display: flex;
    justify-content: space-around;
    padding: 10px;
    font-size: 12px;
    color: #8e8e93;
    box-shadow: 0 -0.266667vw 0.533333vw rgba(0,0,0,.1);
}
.footer-item:hover {
    color: #0089dc;
}
.item-icon{
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
    font-size: 20px;
}
</style>
