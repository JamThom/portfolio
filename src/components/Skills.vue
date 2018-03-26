<template>

<section class="skills">
  <div class="container">
    <skills-graphic/>
    <div class="skill-icons">
      <div class="skill" 
        :class="skill.name"
        :style="position(skill)" 
        v-for="skill in skills">
        <i class="">{{skill.years}} Years</i>
      </div>
    </div>
  </div>
</section>

</template>

<script>

import SkillsGraphic from './SkillsGraphic'
import anime from 'animejs'
import skillsData from '@/data/skillsData.js'

export default {
  name: 'Skillset',
  components: {
    SkillsGraphic
  },
  data () {
    return Object.assign(skillsData,{selected:null})
  },
  methods: {
    position (skill) {
      return {
        top: skill.top,
        left: skill.left,
        backgroundImage: `url(${skill.logo})`
      }
    }
  },
  mounted () {
    const lines = this.$el.querySelectorAll('.line');
    this.timeline = anime.timeline()
    // title circles pop-in
    .add({
      targets: '#skllset_oval',
      r: [0,74.5],
    })
    .add({
      targets: '#skllset_dash',
      r: [0,106],
      offset: 100
    })
    // top path wipe in
    .add({
      targets: '#top-lines line, #top-lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      offset: 200,
      duration: 700
    })
    // top circles pop-in
    .add({
      targets: '#top-circles circle',
      r: [0,34],
      easing: 'easeInOutSine',
      duration: 500,
      offset: 500
    }).add({
      targets: '#top-circles text',
      opacity: [0,1],
      easing: 'easeInOutSine',
      duration: 500,
      offset: 500
    })
    // mid path wipe in
    .add({
      targets: '#mid-lines line, #mid-lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      offset: '-=300',
      duration: 700
    })
    // mid circles pop-in
    .add({
      targets: '#mid-circles-xl circle',
      r: [0,36],
      easing: 'easeInOutSine',
      duration: 500,
      offset: 900
    }).add({
      targets: '#mid-circles-xl text',
      opacity: [0,1],
      easing: 'easeInOutSine',
      duration: 500,
      offset: 900
    })
    // bottom path wipe in
    .add({
      targets: '#bottom-lines line, #bottom-lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      offset: '-=300',
      duration: 700
    })
    // skills fade in
    .add({
      targets: '.skill-icons .skill',
      opacity: [0,1],
      delay(e,i) {
        return i * 50
      },
      easing: 'easeInOutSine',
      offset: '-=300'
    });
  }
}

</script>

<style lang="scss" scoped>

.skills {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    height: 80vh;
    width: 80vw;
    padding-bottom: 1vh;
    margin-bottom: -1vh;
  }
  .tooltip {
    position: absolute;
  }
  .skill-icons {
    position: absolute;
    top: 50%;
    width: 80vw;
    height: 80vh;
    max-width: 129vh;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 46.5vw;
    .skill {
      position: absolute;
      width: 4.6%;
      height: 7.3%;
      background-size: 89%;
      background-position: center;
      transition: transform .5s;
      background-repeat: no-repeat;
      &.Git, &.NPM, &.Threejs, &.Pixijs {
        i {
          top: 70%;
        }
      }
      i {
        position: absolute;
        top: 100%;
        font-size: 0.6em;
        width: 100%;
        opacity: 0.7;
        font-weight: 300;
        display: block;
        text-align: center;
      }
    }
  }
  .tooltip {
    top: 50%;
    right: 50%;
    margin-right: -30vw;
    margin-top: -35vh;
    border: 2px white solid;
    padding: 10px;
    font-size: 12px;
    line-height: 23px;
    .title {
      background: white;
      font-weight: 400;
      font-size: 12px;
      letter-spacing: 4px;
      color: #2a2948;
      padding: 8px 10px;
      margin: -10px -10px 10px;
    }
    .indicator {
      display: inline-block;
      font-size: 1em;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .indicator {
    font-size: 0.7em;
    background: white;
    width: 1.3em;
    display: block;
    line-height: 1.2em;
    color: #443f74;
    text-align: center;
    border-radius: 50%;
    font-weight: 900;
    border: 1px #443f74 solid;
  }
}

</style>