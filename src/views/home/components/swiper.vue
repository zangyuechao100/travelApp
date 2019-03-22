<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data () {
        return {
          swiperOption: {
            pagination: '.swiper-pagination', // swiper
            loop: true
          }
        }
    },
    props: ['swiperList']
}
</script>

<style scope lang="less">
.wrapper {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 26.67%;
  .swiper-img {
    width: 100%;
  }
  .swiper-pagination-bullet-active {
    background: #fff;
  }
}
</style>
