<template>
  <div>
      <div class="weekend-title">周末去哪</div>
      <ul>
          <li v-for="item in recommend" :key="item.id" class="item border-bottom">
              <div class="item-img-wrapper">
                  <img :src="item.url" class="item-img" alt="">
              </div>
              <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'Weekend',
    data () {
        return {
            recommend: [
                {
                    id: '01',
                    title: '美丽普陀山',
                    url: 'http://img1.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg',
                    desc: '人间仙境杭州，佛教圣地普陀山等你来玩！在这里静心接收佛家的洗礼，用心感受佛文化'
                },
                {
                    id: '02',
                    title: '杭州必打卡',
                    url: 'http://img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg',
                    desc: '杭州，前世今生与你有一场美丽约会'
                },
                {
                    id: '03',
                    title: '承载杭城的历史之地',
                    url: 'http://img1.qunarzz.com/sight/source/1505/9f/7d45cc38259e0.jpg_r_640x214_156f4299.jpg',
                    desc: '饱经沧桑的地方诉述着这座城的段段衷肠'
                }
            ]
        }
    }
}
</script>

<style scoped lang="less">
@import '~styles/mixins';
.weekend-title {
    margin-top: 0.2rem;
    line-height: 0.8rem;
    background: #eee;
    text-indent: 0.2rem;
}
.item-img-wrapper {
    height: 0;
    overflow: hidden;
    padding-bottom: 33.4%;
    .item-img {
        width: 100%;
    }
}
.item-info {
    padding: 0.14rem 0.2rem 0.2rem 0.2rem;
    .item-title {
        line-height: 0.54rem;
        font-size: .28rem;
    }
    .item-desc {
        line-height: 0.4rem;
        font-size: .24rem;
        color: #ccc;
        .ellipsis()
    }
}
</style>
