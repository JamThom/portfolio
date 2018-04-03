<template>
  <main class="work-showcase">
    <div class="work-item" v-for="item in works">
      <div class="item-wrapper">
        <div class="inner">
          <div class="fade" :class="device(item.desktop)">
            <div class="device-detail-top">
              <i></i>
            </div>
            <video autoplay loop :src="item.video"></video>
            <div class="device-detail-bottom"></div>
          </div>
          <div class="description fade">
            <h1 class="headline fade">{{item.title}}</h1>
            <h2 class="subheadline fade">{{item.subtitle}}</h2>
            <ul class="stats text">
              <li class="fade" v-for="stat in item.stats"><span>{{stat.name}}</span>{{stat.value}}</li>
            </ul>
            <a :href="item.url" class="launch fade" :class="inactive(item.url)" target="blank">
              {{launchText(item.url)}}
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

import anime from 'animejs'
import works from '@/data/works.js'

export default {
  data() {
    return {
      works
    }
  },
  methods: {
    launchText(url) {
      return url === null ? 'Site Offline' : 'Launch Site'
    },
    browse(dir) {
      let id = (parseInt(this.$route.params.id) + (dir === 'left' ? -1 : 1)) % works.length
      if (id < 0) id = works.length
      Object.assign(this,works[id])
      this.$router.push(`/work/${id}`)
      const video = this.$el.querySelector('video')
      this.loadFade()
    },
    device(item) {
      return item ? 'browser' : 'phone'
    },
    inactive(url) {
      return url === null && 'inactive'
    },
    loadFade() {

      const videos = this.$el.querySelectorAll('video')

      videos.forEach((video,i) => {

        const timeline = anime.timeline({
          autoplay: false
        })
        .add({
          targets: `.work-item:nth-child(${i}) .fade`,
          opacity: [0,1],
          easing: 'easeInOutSine',
          delay(e,i) {
            return i * 50
          }
        })

        if (video.readyState === 4) {
          timeline.play()
        } else {
          video.onplay = x => { 
            timeline.play()
          }
        }
      })
    }
  },
  mounted() {

    if (navigator.userAgent.match(/Chrome/g)) {
      window.addEventListener('scroll',scroll,false)
      scroll()
      this.loadFade()
    } else {
      document.querySelector('.work-showcase').classList.add('safari')
    }

    function scroll() {
      const items = document.querySelectorAll('.work-item')
      items.forEach(item => {
        const wrap = item.querySelector('.item-wrapper')
        const progress = Math.min(Math.max(1 - (item.getBoundingClientRect().y/window.innerHeight),0),1) * 100
        wrap.style.height = `${progress}%`
        wrap.style.borderColor = progress === 0 ? 'transparent' : 'white'
      })
    }
  }
}



</script>

<style scoped lang="scss">

.work-showcase {
  z-index: 0;
  &.safari {
    .work-item {
      .item-wrapper {
        position: static;
        height: 100% !important;
        border: 0;
        background: none;
      }
      .inner {
        background: none;
        position: static;
      }
    }
  }
}

.work-item {
  height: 100vh;
  .item-wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    border-top: 2px white solid;
  }
  .inner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(-180deg, #333257 0%, #4C4583 100%);
  }
}

.description {
  margin-left: 2em;
}

.nav-buttons {
  width: 33em;
  height: 3em;
  position: absolute;
  top: 50%;
  margin-top: -1.5em;
  display: flex;
  justify-content: space-between;
  .arrow {
    width: 2em;
    height: 2em;
    border-left: 2px white solid;
    border-top: 2px white solid;
    transition: .3s;
    &:first-child {
      transform: rotate(-45deg);
      &:hover {
        transform: rotate(-45deg) translate(-10%,-10%);
      }
      &:active {
        transform: rotate(-45deg) translate(-20%,-20%);
      }
    }
    &:last-child {
      transform: rotate(135deg);
      &:hover {
        transform: rotate(135deg) translate(-10%,-10%);
      }
      &:active {
        transform: rotate(135deg) translate(-20%,-20%);
      }
    }
  }
}

.subheadline {
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 0.7);
}

.phone {
  background: white;
  border-radius: 1.6em;
  border-bottom-width: 2em;
  border-top-width: 1em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.27);
  padding: 0.2em 0.4em 0;
  border: 0.1em #ccc solid;
  font-size: 0.8em;
  .device-detail-top {
    width: 4em;
    background: #ccc;
    height: 0.5em;
    margin: 1em auto;
    border-radius: 1em;
  }
  .device-detail-bottom {
    width: 2em;
    height: 2em;
    border: 2px #ccc solid;
    border-radius: 50%;
    margin: 1em auto;
  }
}

.browser {
  background: #dedede;
  border-radius: 0.2em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.27);
  overflow: hidden;
  position: relative;
  .device-detail-top {
    width: 2em;
    height: 0.5em;
    margin: 0.5em 0.5em 0.6em;
    position: relative;
    display: flex;
    justify-content: space-between;
    &:before, &:after, > i {
      content: '';
      display: block;
      width: 0.5em;
      height: 0.5em;
      border-radius: 50%;
      background: grey;
    }
  }
  .device-detail-bottom {
    position: absolute;
    top: 0.42em;
    right: 0.4em;
    border-radius: 0.1em;
    width: 83%;
    height: 0.8em;
    background: white;
  }
}

video {
  max-width: 20em;
  max-height: 20em;
  display: block;
}

.stats {
  width: 30em;
  list-style: none;
  margin: 2em 0 3em;
  li {
    margin-bottom: 0.5em;
    span {
      color: white;
      font-weight: 500;
      margin-right: 0.2em;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.launch {
  opacity: 1;
  padding: 0.65em 1em;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 0.2em;
  margin-top: 1em;
}

</style>