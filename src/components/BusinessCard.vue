<template>
  <div class="business-card">
      <h1 class="headline opacity-fade">JAMES THOMSON</h1>
      <div class="card-portrait">
        <div class="portrait">
          <img src="@/assets/me.jpg" alt="James Thomson">
        </div>
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="20"></circle>
          <circle cx="50" cy="50" r="30"></circle>
          <circle cx="50" cy="50" r="40"></circle>
          <circle cx="50" cy="50" r="50"></circle>
        </svg>
      </div>
      <p class="intro opacity-fade">I am a British expat living in Copenhagen and working as an independent <i>creative developer</i>.</p>
      <p class="intro opacity-fade">I have over six years professional experience using css, html and javascript to create a broad range of digital solutions.</p>
      <a href="" class="mail opacity-fade">HELLO@JAMTHOM.COM</a>
  </div>
</template>

<script>

export default {
  name: 'Business-card'
}
</script>

<style lang="scss">

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.business-card svg circle {
    stroke: rgba(0, 0, 0, 0.15);
    fill: none;
    stroke-width: 0.7px;
    stroke-linecap: round;
}

.business-card svg circle:nth-child(1) {
  animation: 20s rotate linear infinite;
  transform-origin: center;
  stroke-dasharray: 3;
}

.business-card svg circle:nth-child(2) {
  animation: 25s rotate linear infinite;
  transform-origin: center;
  stroke-dasharray: 1 4;
}

.business-card svg circle:nth-child(3) {
  animation: 30s rotate linear infinite;
  transform-origin: center;
  stroke-dasharray: 8 9;
}

.business-card svg circle:nth-child(4) {
  animation: 35s rotate linear infinite;
  transform-origin: center;
  stroke-dasharray: 5;
}

.business-card svg {
  position: absolute;
  left: -102%;
  padding: 2%;
  width: 300%;
  height: 300%;
  top: -101%;
  z-index: -1;
}

.business-card {
  width: 20em;
  position: fixed;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%,-50%);
  text-align: center;
}

.card-portrait {
  width: 144px;
  height: 144px;
  margin: 22px auto 30px;
  position: relative;
  z-index: 1;
  .portrait {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    border: 2px solid white;
    border-radius: 50%;
    img {
      width: 100%;
    }
  }
}

.intro {
  text-align: left;
  font-size: 13px;
  font-weight: 300;
  line-height: 17px;
  letter-spacing: 0.3px;
  margin-bottom: 15px;
  color: rgba(255, 255, 255, 0.6);
}

i {
  color: white;
}

.mail {
  text-align: left;
  font-size: 12px;
  font-weight: 500;
  line-height: 37px;
  letter-spacing: 0;
}

</style>
