<template>
  <div id="app">

    <router-view/>
    <nav class="nav">
      <span @click="to('/')" class="nav-link" :class="isActive('/')"> 
        HELLO
      </span>
      <div @click="to('/work')" class="nav-link" :class="isActive('/work')"> 
        WORK
      </div>
      <span @click="to('/skills')" class="nav-link" :class="isActive('/skills')"> 
        SKILLS
      </span>
    </nav>
  </div>
</template>

<script>

import pageTransition from '@/scripts/pageTransition'
import anime from 'animejs'

export default {
  name: 'App',
  methods: {
    to(link) {
      pageTransition(this.$route.path,()=>{
        this.$router.push(link);
      });
    },
    isActive(link) {
      return this.$route.path === (link) && 'active'
    }
  }
}
</script>

<style lang="scss">

@import '~@/type/scss/ibm-plex.scss';
@import '~@/styles/app.scss';

</style>
