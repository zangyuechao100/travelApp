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
    data () {
        return {
            swiperOption: {
            },
            iconList: [
                {
                    id: '01',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    desc: '景点门票'
                },
                {
                    id: '02',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                    desc: '一日游'
                },
                {
                    id: '03',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                    desc: '杭州必游'
                },
                {
                    id: '04',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
                    desc: '踏青赏花'
                },
                {
                    id: '05',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
                    desc: '印象西湖'
                },
                {
                    id: '06',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
                    desc: '千岛湖'
                },
                {
                    id: '07',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
                    desc: '溜娃儿'
                },
                {
                    id: '08',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
                    desc: '西溪湿地'
                },
                {
                    id: '09',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
                    desc: '杭州宋城'
                }
            ]
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
