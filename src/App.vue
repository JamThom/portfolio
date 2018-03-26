<template>
  <div id="app">
    <a href="mailto:hello@jamthom.com" class="mail-icon">
<svg width="86px" height="56px" viewBox="0 0 86 56" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="noun_601750_cc" fill-rule="nonzero" fill="#FFFFFF">
            <g id="Group">
                <g transform="translate(9.000000, 14.000000)" id="Shape">
                    <path d="M0.8325,3.624 L29.5875,24.292 C30.8255,25.181 32.4125,25.625 33.9995,25.625 C35.5875,25.625 37.1755,25.181 38.4125,24.292 L67.1675,3.624 C68.0635,2.979 68.2685,1.729 67.6245,0.832 C66.9785,-0.064 65.7285,-0.269 64.8325,0.376 L36.0775,21.044 C34.9905,21.825 33.0095,21.825 31.9225,21.044 L3.1675,0.376 C2.2705,-0.268 1.0205,-0.064 0.3755,0.832 C-0.2685,1.729 -0.0635,2.979 0.8325,3.624"></path>
                </g>
                <path d="M81.996,0 C84.207,0 86,1.8 86,4.005 L86,51.995 C86,54.207 84.204,56 81.996,56 L4.004,56 C1.793,56 0,54.2 0,51.995 L0,4.005 C0,1.793 1.796,0 4.004,0 L81.996,0 Z M4,52 L82,52 L82,4 L4,4 L4,52 Z" id="Combined-Shape"></path>
            </g>
        </g>
    </g>
</svg>
    </a>
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
  mounted() {
    anime.timeline()
    .add({
      targets: '.mail-icon',
      scale: [0,1],
      offset: 2000
    })
  },
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

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
textarea,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video, button, input {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  text-decoration: none;
  color: inherit;
  border: 0;
  background: none;
  box-sizing: border-box;
}

*:focus {
  outline: none; 
}


body, html {
  margin: 0;
  height: 100%;
}

body {
  background-image: linear-gradient(-180deg, #333257 0%, #4C4583 100%);
  font-family: 'IBM Plex Sans';
  color: white;
}

.mail-icon {
  position: fixed;
  top: 30px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-content: center;
  background-image: linear-gradient(-180deg, #FF61B1 0%, #FF357C 100%);
  border: 1px solid #CB2B5F;
  z-index: 10;
  padding: 9px 10px 11px;
}

svg {
    height: 30px;
    stroke: white;
    stroke-width: 9px;
}


.headline {
  font-size: 21px;
  font-weight: 100;
  letter-spacing: 3.1px;
  z-index: 1;
}

.button {
    background: rgba(0,0,0,0.2);
    border-radius: 3px;
    font-size: 14px;
    font-weight: 500;
    padding: 9px 0 10px;
    width: 150px;
    display: inline-block;
    text-align: center;
}

.text {
  text-align: left;
  font-size: 13px;
  font-weight: 300;
  line-height: 17px;
  letter-spacing: 0.3px;
  margin-bottom: 15px;
  color: rgba(255, 255, 255, 0.6);
}

.nav {
    position: fixed;
    display: flex;
    flex-direction: column;
    height: 7em;
    align-items: baseline;
    justify-content: space-around;
    top: 50%;
    margin-top: -8em;
    padding-left: 2em;
    z-index: 10;
}

.nav-link {
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 4px;
  color: rgba(255, 255, 255, 1);
  transition: letter-spacing .5s cubic-bezier(0.41, 0.1, 0.13, 1.06);
  cursor: pointer;
  position: relative;
  &:before {
    content: '';
    width: 0.6em;
    height: 0.6em;
    box-shadow: 0 0 0 2px white;
    display: inline-block;
    vertical-align: bottom;
    border-radius: 50%;
    border: 4px #3e3b6b solid;
    margin-right: 0.5em;
  }
  &:hover {
    letter-spacing: 6px;
  }
  &:active {
    letter-spacing: 5px;
    transition: letter-spacing .2s;
  }
  &.active:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    background: white;
    width: 0.9em;
    height: 0.9em;
    border-radius: 50%;
    top: 0;
    margin: 2px;
  }
}

</style>
