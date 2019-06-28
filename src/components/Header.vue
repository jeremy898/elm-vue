<template>
    <div class="header">
        <div class="header-address el-icon-location-outline">
            12312312312
            <i class="header-down el-icon-arrow-down"></i>
        </div>
        <div class="header-search">
            <router-link to="/" class="header-search-input"><i class="el-icon-search"></i><span>搜索饿了么商家、商品名称</span></router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    background:linear-gradient(left ,#0af,#0089dc)
}
.header-address {
    color: #fff;
    display: flex;
    font-size: 20px;
    margin: 20px 0 10px 0;
    justify-content: flex-start;
}
.header-down {
    font-size: 10px;
    display: flex;
    justify-content: flex-start;
    align-content: center;
}
.header-search-input {
    padding: 10px 20px 10px 20px;
    border: #fff solid 1px;
    background-color: #fff;
    margin-bottom: 10px;
}
.header-search-input span{
    color: #ffa;
}
</style>
