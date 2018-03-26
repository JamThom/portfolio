<template>
  <div class="work-canvas"></div>
</template>
<script>

import pageTransition from '@/scripts/pageTransition'
import thumbnails from '@/data/workThumbnails.js'
import Draw from '@/scripts/draw.js'

export default {
  data() {
    return {
      // TODO: refactor this
      thumbnails
    }
  },
  mounted() {
    const callback = (i) => this.loadItem(i)
    this.draw = new Draw(this.$el,this.thumbnails,callback)
  },
  methods: {
    loadItem(i) {
      pageTransition(this.$route.path,()=>{
        this.$router.push(`/work/${i}`);
      });
    }
  }
}

</script>
<style lang="scss" scoped>

@keyframes push {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

.work-canvas {
  height: 100%;
  position: fixed;
  top: 0;
  cursor: crosshair;
  width: 100%;
  z-index: 1;
}

/deep/ .adding {
  pointer-events: none;
}
/deep/ .dot {
  position: fixed;
  border-radius: 50%;
  transition: .2s linear;
  overflow: hidden;
  background-position: center center;
  background-size: cover;
  animation: push .1s cubic-bezier(0.13, 0.33, 0.25, 1.49);
  border: 2px solid white;
  box-shadow: inset 100vw 100vw 0em rgba(54, 50, 92, 0.5);
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
    box-shadow: none;
  }
  &:active {
    transform: scale(1.1);
    cursor: pointer;
  }
  &:active .dot__bg {
    transform: scale(0.55);
  }
}

</style>