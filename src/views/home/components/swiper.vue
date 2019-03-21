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
          },
          swiperList: [
            {
              id: 1,
              imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/2f5f3ea4698c9b7898db7562d89b91ed.jpg_750x200_bd3b4ce9.jpg'
            },
            {
              id: 2,
              imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/13/e1188b0d0f21b902.jpg_750x200_f85c782a.jpg'
            }
          ]
        }
    }
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
