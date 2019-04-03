<template>
  <div>
    <router-link v-show="showAbs" class="header-abs" to="/" tag="div">
        <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      景点详情
      <router-link to="/">
        <div class="iconfont header-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeatilHeader',
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      let top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity: opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated() {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="less">
@import '~styles/varibles.less';
.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  border-radius: 0.4rem;
  background: rgba(0, 0, 0, 0.8);
  .back-icon {
    color: #fff;
    font-size: 0.4rem;
  }
}
.header-fixed {
  z-index: 99;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: @headerHeight;
  line-height: @headerHeight;
  text-align: center;
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
