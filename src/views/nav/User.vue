<template>
    <div style="background:#f5f5f5;min-height: 100vh;">
        <section class="user-header">
            <div class="user-logo"><img alt="elm" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg=="></div>
            <div class="user-login">
                <p>登陆/注册</p>
                <span>登陆后享受更多特权</span>
            </div>
            <div class="user-icon">></div>
        </section>
        <div class="maininfo">
            <div class="info">
                <a>
                 <div><img alt="" src="http://iph.href.lu/20x20"></div>
                <span>金币</span>
                </a></div>
            <div class="info">
                <a>
                <div><img alt="" src="http://iph.href.lu/20x20"></div>
                <span>红包</span>
            </a></div>
        </div>
        <section class="profile">
            <a href="#"><i class="el-icon-location-information profile-icon"></i><label class="profile-label">我的地址</label><span class="profile-icon">></span></a>
        </section>
        <section class="profile">
            <a href="#"><i class="el-icon-location-outline profile-icon"></i><label  class="profile-label">金币商城</label><span class="profile-icon">></span></a>
            <a href="#"><i class="el-icon-location-outline profile-icon"></i><label  class="profile-label">分享拿20元现金</label><span class="profile-icon">></span></a>
        </section>
        <section class="profile">
            <a href="#"><i class="el-icon-location-outline profile-icon"></i><label  class="profile-label">我的客服</label><span class="profile-icon">></span></a>
            <a href="#"><i class="el-icon-location-outline profile-icon"></i><label  class="profile-label">下载饿了吗APP</label><span class="profile-icon">></span></a>
            <a href="#"><i class="el-icon-location-outline profile-icon"></i><label  class="profile-label">规则中心</label><span class="profile-icon">></span></a>
        </section>
        <h3><a style="color: #4da6f0;font-size: .4rem;" href="#">隐私政策</a></h3>
    </div>
</template>
<style scoped>
.user-header {
    color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 10px;
    flex-direction: row;
    font-size: 14px;
    background-image: linear-gradient(90deg,#0af,#0085ff);
}
.user-logo {
    flex: .1;
    max-width:100%;
}
.user-logo img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.user-login {
    flex: .8;
    display: flex;
    margin-left: .48rem;
    font-size: 12px;
    justify-content: flex-start;
    flex-direction: column;
    align-items: start;
}
.user-login p{
    font-size: .56rem;
    margin: 0;
    margin-bottom: .213333rem;
}
.user-icon {
    flex: .1;
}
.maininfo {
    background: #fff;
    display: table;
    width: 100%;
    height: 2.24rem;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
}
 .maininfo .info {
    padding: 15px 0;
    font-size: 12px;
    display: table-cell;
    width: 33.333%;
    vertical-align: middle;
    text-align: center;
}
 .maininfo .info:not(:last-child){
        border-right: 1px solid #ddd;
}

.profile {
    margin-top: .25rem;
    font-size: 14px;
    background: #fff;
}
.profile-icon {
    flex: .1;
}
.profile-label {
    flex: .8;
    display: flex;
}

.profile a{
    display: flex;
    flex-direction: row;
    color: #333;
    align-items: center;
    height: 1rem;
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