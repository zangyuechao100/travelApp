<template>
  <div class="letters">
    <li class="items"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        v-for="(item,key) in cities"
        :key="key"
        :ref="key"
        @click="handleLetterClick(key)"
    >
        {{key}}
    </li>
  </div>
</template>

<script>
import Bus from '@/bus.js'
export default {
    name: 'Letters',
    props: ['cities'],
    components: {
    },
    data () {
			return {
				touchStatus: false,
				startY: 0,
				timer: null
			}
    },
    computed: {
			letters () {
				const letters = []
				for (let i in this.cities) {
					letters.push(i)
				}
				return letters
			}
    },
    updated() {
			this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
        handleLetterClick (key) {
					Bus.$emit('letterChange', key)
        },
        handleTouchStart () {
					this.touchStatus = true
        },
        handleTouchMove (e) {
          if (this.touchStatus) {
            // 节流
            if (this.timer) {
              clearTimeout(this.timer)
            }
            this.timer = setTimeout(() => {
              const touchY = e.touches[0].clientY - 79
              const index = Math.floor((touchY - this.startY) / 20)
              if (index >= 0 && index < this.letters.length) {
                Bus.$emit('letterChange', this.letters[index])
              }
            }, 16)
          }
        },
        handleTouchEnd () {
					this.touchStatus = false
        }
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
