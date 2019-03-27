<template>
  <div class="city-list" ref="wrapper">
      <div>
          <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">北京</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
                    <div class="button">{{item.name}}</div>
                </div>
            </div>
        </div>
        <div class="area" v-for="(item, key) in cities" :key="key" :ref="key">
            <div class="title border-topbottom">{{key}}</div>
            <div class="item-list">
                <div class="item border-bottom" v-for="innerItem in item" :key="innerItem.id">
                    {{innerItem.name}}
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import Bus from '@/bus.js'
import Bscroll from 'better-scroll'
export default {
    props: ['hotCities', 'cities'],
    name: 'List',
    components: {
    },
    data () {
        return {
            scroll: '',
            letter: ''
        }
    },
    mounted() {
        this.scroll = new Bscroll(this.$refs.wrapper)
        Bus.$on('letterChange', (res) => {
            this.letter = res
        })
    },
    watch: {
        letter (newValue) {
            this.scroll.scrollToElement(this.$refs[newValue][0])
        }
    }
}
</script>

<style scoped lang="less">
@import '~styles/varibles.less';
.border-topbottom {
    &:before {
        border-color: #ccc;
    }
    &:after {
        border-color: #ccc;
    }
}
.city-list {
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    bottom: 0;
    left: 0;
    right: 0;
}
.title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
}
.button-list {
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    overflow: hidden;
    .button-wrapper {
        width: 33.33%;
        float: left;
        .button {
            text-align: center;
            padding: 0.1rem 0;
            margin: 0.1rem;
            border: 0.02rem solid #ccc;
            border-radius: 0.06rem;
        }
    }
}
.item-list {
    .item {
        line-height: 0.76rem;
        padding-left: 0.2rem;
            &:before {
        border-color: #ccc;
        }
        &:after {
            border-color: #ccc;
        }
    }
}
</style>
