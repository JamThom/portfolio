import React, { Component } from 'react'
import { MOBILE_WIDTH } from 'Constants'
import Icon from 'Styles/icon'
import Tooltip from 'Styles/tooltip'
import Outer from 'Styles/planet'

class Orbit {
  constructor({ ele, index, total }) {
    this.ele = ele;
    this.index = index + 1;
    this.total = total;
    this.frame = Date.now();
    this.speed = 30 * (1 + ((this.index)*2));
    this.radius = 3.2 * ((this.index)+1.6);
    this.init();
  }

  init() {
    if (window.innerWidth > MOBILE_WIDTH) {
      this.setupEle();
      this.beginOrbit();
    } else {
      this.setupMobile();
    }
  }

  setupMobile() {
    const { index, total, ele } = this;
    ele.style.transform = `translate(${
      Math.sin((index/total) * Math.PI*2) * 9
    }rem,${
      Math.cos((index/total) * Math.PI*2) * 9
    }rem)`;
  }

  setupEle() {
    const { pauseOrbit, resumeOrbit } = this;
    this.ele.addEventListener('mouseover',pauseOrbit.bind(this));
    this.ele.addEventListener('mouseout',resumeOrbit.bind(this));
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
    const { frame, ele, index, orbiting, speed, radius } = this;
    const offsetFrame = frame + index * 20000;
    const currentPosition = offsetFrame/speed;
    ele.style.transform = `translate(${
      Math.sin(currentPosition) * radius
    }rem,${
      Math.cos(currentPosition) * radius
    }rem)`;
    if (orbiting) requestAnimationFrame(this.animateOrbitFrame.bind(this));
  }
}

export default class Planet extends Component {

  componentDidMount() {
    new Orbit({
      ele: this.refs.planet,
      index: this.props.index,
      total: this.props.total
    })
  }

  render() {
    const { children, icon, index, href, total } = this.props;
    return <a
      href={href}
      target="blank">
      <Outer ref="planet">
        <Tooltip>{children}</Tooltip>
        <Icon
          index={index}
          className={`icon-${icon}`}/>
      </Outer>
    </a>
  }
}
