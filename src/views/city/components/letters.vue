<template>
  <div class="letters">
      <li class="items" v-for="(item,key) in cities" :key="key">{{key}}</li>
  </div>
</template>

<script>
export default {
    name: 'Letters',
    props: ['cities'],
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
.letters {
    top: 1.58rem;
    right: 0;
    position: absolute;
    bottom: 0;
    width: 0.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .items {
        text-align: center;
        line-height: 0.4rem;
        color: @bgColor;
    }
}
</style>
