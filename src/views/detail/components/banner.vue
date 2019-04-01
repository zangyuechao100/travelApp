<template>
  <div class="banner">
    <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1903/e0/e0e0c6ca274ad49aa3.img.jpg_600x330_70691c22.jpg">
    <div class="banner-info">
        <div class="banner-title">西溪国家湿地公园·周家村(AAAAA景区)</div>
        <div class="banner-number"><div class="iconfont banner-icon">&#xe6dd;</div>39</div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Banner'
}
</script>

<style scoped lang="less">
.banner {
    overflow: hidden;
    height: 0;
    width: 100%;
    padding-bottom: 55%;
    position: relative;
    .banner-img {
        width: 100%;
    }
    .banner-info {
        display: flex;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        color: #fff;
        line-height: 0.6rem;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
        .banner-title {
            font-size: 0.32rem;
            padding: 0 0.2rem;
            flex: 1;
        }
        .banner-number {
            margin-top: 0.14rem;
            padding: 0 0.4rem;
            height: 0.32rem;
            line-height: 0.32rem;
            border-radius: 0.2rem;
            background: rgba(0, 0, 0, 0.8);
            font-size: 0.24rem;
            .banner-icon {
                float: left;
                font-size: 0.24rem;
                margin-right: 0.1rem;
            }
        }
    }
}
</style>
