export default class Orbit {
  constructor({ ele, index }) {
    this.frame = 0;
    this.index = index || 1;
    this.ele = ele;
    const pauseOrbit = this.pauseOrbit.bind(this)
    const resumeOrbit = this.resumeOrbit.bind(this)
    this.ele.addEventListener('mouseover',pauseOrbit);
    this.ele.addEventListener('mouseout',resumeOrbit);
    window.ele = this.ele;
    this.beginOrbit();
  }

  pauseOrbit() {
    this.orbiting = false;
  }

  resumeOrbit() {
    this.beginOrbit();
  }

  beginOrbit() {
    this.orbiting = true;
    this.animateOrbitFrame();
  }

  animateOrbitFrame() {
    this.frame++;
    const { frame, ele, index, orbiting } = this;
    const speed = 30 * (1 + (index*2));
    const offsetFrame = frame + index * 20000;
    const radius = 3.2 * (index+1.6);
    const currentPosition = offsetFrame/speed;
    ele.style.transform = `translate(${
      Math.sin(currentPosition) * radius
    }rem,${
      Math.cos(currentPosition) * radius
    }rem)`;
    if (orbiting) requestAnimationFrame(this.animateOrbitFrame.bind(this));
  }
}
