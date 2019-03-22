<template>
  <div class="header">
      城市选择
      <router-link to="/">
        <div class="iconfont header-back">&#xe624;</div>
      </router-link>
  </div>
</template>

<script>
export default {
    name: 'Header',
    components: {
    },
    data () {
        return {
        }
    },
    mounted() {
    },
    methods: {
    }
}
</script>

<style scoped lang="less">
@import '~styles/varibles.less';
.header {
    height: @headerHeight;
    line-height: @headerHeight;
    text-align: center;
    overflow: hidden;
    color: #fff;
    background: @bgColor;
    font-size: 0.32rem;
    .header-back {
        color: #fff;
        text-align: center;
        width: 0.64rem;
        font-size: 0.4rem;
        position: absolute;
        top: 0;
        left: 0;
    }
}
</style>
