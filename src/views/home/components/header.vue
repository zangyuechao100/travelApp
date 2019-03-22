<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩/主题
    </div>
    <div class="header-right">
      <span class="arrow-text">{{this.city}}</span>
      <span class="iconfont arrow-icon">&#xe614;</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Header',
    methods: {
    },
    props: {
      city: String
    }
}
</script>

<style lang="less" scoped>
@import '~styles/varibles.less';
.header {
    background: @bgColor;
    color: #fff;
    height: 0.86rem;
    line-height: 0.86rem;
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
        width: 1.24rem;
        float: right;
        text-align: center;
        font-size: 0;
        .arrow-text {
          font-size: 0.28rem;
        }
        .arrow-icon {
          font-size: 0.28rem;
        }
    }
}
</style>
