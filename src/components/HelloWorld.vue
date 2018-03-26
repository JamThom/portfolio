<template>
  <main class="hello-world">
    <business-card />
  </main>
</template>

<script>

import BusinessCard from '@/components/BusinessCard.vue'
import anime from 'animejs'

export default {
  components: {
    BusinessCard
  },
  name: 'hello-world',
  mounted() {
    this.enter(this.$el);
  },
  beforeDestroy() {
    console.log('ARRGHH')
  },
  methods: {
    enter(el) {
      this.timeline = anime.timeline()
      .add({
        targets: el.querySelectorAll('circle'),
        r: (e,i) => {
          return [0, 20 + 10 * i]
        },
        delay: (e,i) => {
          return 100 * i
        },
        easing: 'easeInOutSine'
      })
      .add({
        targets: el.querySelectorAll('.card-portrait'),
        scale: [0.05,1],
        opacity: [0.05,1],
        offset: 800
      })
      .add({
        targets: el.querySelectorAll('.opacity-fade'),
        opacity: [0,1],
        offset: 1000,
        easing: 'easeInOutSine',
        translateY: ['-10%',0]
      })
    }
  }
}
</script>

<style scoped lang="scss">

button {
  position: fixed;
  z-index: 10;
  left: 1em;
}

.hello-world {
  height: 100%;
}

</style>
