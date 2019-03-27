<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩/主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        <span class="arrow-text">{{this.city}}</span>
        <span class="iconfont arrow-icon">&#xe614;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Header',
    computed: {
      ...mapState([
        'city'
      ])
    }
}
</script>

<style lang="less" scoped>
@import '~styles/varibles.less';
.header {
    background: @bgColor;
    color: #fff;
    height: @headerHeight;
    line-height: @headerHeight;
    display: flex;
    .header-left {
        width: 0.64rem;
        float: left;
        .back-icon {
          text-align: center;
          font-size: 0.4rem;
        }
    }
    .header-input {
        background: #fff;
        border-radius: 0.1rem;
        margin-top: 0.12rem;
        margin-left: 0.2rem;
        height: 0.64rem;
        line-height: 0.64rem;
        flex: 1;
        padding-left: 0.2rem;
        color: #ccc;
    }
    .header-right {
        min-width: 1.04rem;
        padding: 0 0.1rem;
        float: right;
        text-align: center;
        font-size: 0;
        color: #fff;
        .arrow-text {
          font-size: 0.28rem;
        }
        .arrow-icon {
          font-size: 0.28rem;
        }
    }
}
</style>
