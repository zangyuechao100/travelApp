<template>
  <div>
      <Banner></Banner>
      <DeatilHeader></DeatilHeader>
      <div class="content"></div>
  </div>
</template>

<script>
import Banner from './components/banner.vue'
import DeatilHeader from './components/header.vue'
export default {
    name: 'Detail',
    components: {
        Banner,
        DeatilHeader
    }
}
</script>

<style scoped lang="less">
.content {
    height: 50rem;
}
</style>
