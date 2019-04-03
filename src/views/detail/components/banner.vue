<template>
  <div class="banner">
    <img class="banner-img" @click="handleBannerClick" :src="bannerImg">
    <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number"><div class="iconfont banner-icon">&#xe6dd;</div>{{gallaryImgs.length}}</div>
    </div>
    <transition>
        <CommonGallry @closeGallary="closeGallary" :imgs="gallaryImgs" v-show="showGallary"></CommonGallry>
    </transition>
  </div>
</template>

<script>
import CommonGallry from 'common/gallary/Gallary.vue'
export default {
    name: 'Banner',
    components: {
        CommonGallry
    },
    props: ['sightName', 'bannerImg', 'gallaryImgs'],
    data () {
        return {
            showGallary: false
        }
    },
    methods: {
        handleBannerClick () {
            this.showGallary = true
        },
        closeGallary () {
            this.showGallary = false
        }
    }
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

.v-enter {
    opacity: 0;
}
.v-leave-to {
    opacity: 0;
}
.v-enter-active, .v-leave-active {
    transition: all 0.3s;
}
</style>
