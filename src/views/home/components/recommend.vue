<template>
  <div>
      <div class="recommend-title">热销推荐</div>
      <ul>
          <li v-for="item in recommendList" :key="item.id" class="item border-bottom">
              <img :src="item.imgUrl" class="item-img" alt="">
              <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'Recommend',
    data () {
        return {
        }
    },
    props: ['recommendList']
}
</script>

<style scoped lang="less">
@import '~styles/mixins';
.recommend-title {
    margin-top: 0.2rem;
    line-height: 0.8rem;
    background: #eee;
    text-indent: 0.2rem;
}
.item {
    display: flex;
    height: 1.9rem;
    overflow: hidden;
    .item-img {
        width: 1.7rem;
        height: 1.7rem;
        padding: 0.1rem;
    }
    .item-info {
        flex: 1;
        padding: 0.1rem;
        min-width: 0;
        .item-title {
            line-height: 0.54rem;
            font-size: 0.32rem;
        }
        .item-desc {
            line-height: 0.4rem;
            color: #ccc;
            .ellipsis()
        }
        .item-button {
            background: #ff9300;
            padding: 0 0.16rem;
            border-radius: 0.06rem;
            margin-top: 0.2rem;
            color: #fff;
            line-height: 0.44rem;
        }
    }
}
</style>
