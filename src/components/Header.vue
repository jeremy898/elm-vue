<template>
    <div class="header">
        <div class="header-address el-icon-location-outline">
            12312312312
            <i class="header-down el-icon-arrow-down"></i>
        </div>
        <div class="header-search">
            <div class="content">
                <i class="el-icon-search"></i>
                <span>搜索饿了么商家、商品名称</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9999;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    background:linear-gradient(left ,#0af,#0089dc)
}
.header-address {
    color: #fff;
    display: flex;
    font-size: 0.4rem;
    margin: 0.4rem  0.4rem 0.1rem 0.4rem;
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
    height: 1rem;
    box-sizing: border-box;
}
.header-search>div{
    margin: 0.1rem 0.4rem 0.1rem 0.4rem;
    font-size: 0.35rem;
    padding: 0.2rem 0.4rem 0.2rem 0.4rem;
    border: #fff solid 1px;
    background-color: #fff;
}
.header-search-input span{
    font-size: 0.4rem;
    color: #999;
}
</style>
