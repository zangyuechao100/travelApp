<template>
  <div class="container" @click="handleGallaryClick">
      <div class="wrapper">
        <swiper :options="swiperOption">
          <swiper-slide v-for="item in imgs" :key="item">
            <img class="gallary-img" :src="item" alt="">
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
  </div>
</template>

<script>
export default {
    name: 'CommonGallry',
    props: ['imgs'],
    data () {
        return {
          swiperOption: {
            pagination: '.swiper-pagination',
            paginationType: 'fraction',
            observeParents: true,
            observer: true
          }
        }
    },
    methods: {
      handleGallaryClick () {
        this.$emit('closeGallary')
      }
    }
}
</script>


<style scoped lang="less">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0%;
  bottom: 0;
  top: 0;
  z-index: 99;
  background: #000;
  .swiper-container {
    overflow: inherit;
  }
  .wrapper {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    // overflow: hidden;
    .gallary-img {
      width: 100%;
    }
    .swiper-pagination {
      color: #fff;
      bottom: -20px;
    }
  }
}
</style>

