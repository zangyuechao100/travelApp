<template>
  <div class="icons">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page, index) in pages" :key="index">
            <div class="icon" v-for="item in page" :key="item.id">
                <div class="icon-img">
                    <img class="icon-img-content" :src="item.imgUrl" alt="">
                </div>
                <p class="icon-desc">{{item.desc}}</p>
            </div>
        </swiper-slide>
      </swiper>
  </div>
</template>

<script>
export default {
    name: 'Icons',
    props: ['iconList'],
    data () {
        return {
            swiperOption: {
            }
        }
    },
    computed: {
        pages () {
            const pages = []
            this.iconList.forEach((item, index) => {
                const page = Math.floor(index / 8)
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style scope lang="less">
@import '~styles/varibles.less';
@import '~styles/mixins.less';
.icons .swiper-container {
    width: 100%;
    height: 0;
    padding-bottom: 50%;
}
.icons {
    margin-top: 0.1rem;
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    overflow: hidden;
    .icon {
        overflow: hidden;
        float: left;
        width: 25%;
        height: 0;
        padding-bottom: 25%;
        position: relative;
        .icon-img {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0.44rem;
            box-sizing: border-box;
            padding: 0.2rem;
            .icon-img-content {
                display: block;
                margin: 0 auto;
                height: 100%;
            }
        }
        .icon-desc {
            width: 100%;
            position: absolute;
            bottom: 0.1rem;
            line-height: 0.44rem;
            height: 0.44rem;
            color: @darkTextColor;
            text-align: center;
            .ellipsis()
        }
    }
}
</style>
