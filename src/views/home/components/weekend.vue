<template>
  <div>
      <div class="weekend-title">周末去哪</div>
      <ul>
          <li v-for="item in weekendList" :key="item.id" class="item border-bottom">
              <div class="item-img-wrapper">
                  <img :src="item.imgUrl" class="item-img" alt="">
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
        }
    },
    props: ['weekendList']
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
    padding-bottom: 37.09%;
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
