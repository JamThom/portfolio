export default class {
  constructor($el,images,callback) {
    this.images = images
    this.loaded = 1
    this.frame = 0
    this.animating = false
    this.coords = {}
    this.$el = $el
    this.callback = callback
    console.log($el)
    this.$el.addEventListener('mousedown', e => this.mousedown(e))
    document.addEventListener('mousemove', e => this.mousemove(e))
    document.addEventListener('mouseup', e => this.mouseup(e))
  }


  mousedown(e) {
    if (e.target === this.$el) {
      this.animating = true
      document.body.classList.add('adding')
      this.move()
    }
  }

  mousemove(e) {
    this.coords.x = e.clientX
    this.coords.y = e.clientY
  }

  mouseup() {
    this.animating = false
    document.body.classList.remove('adding')
  }

  createDotElement(r,i) {
    const ele = document.createElement('div')
    ele.style.width = `${r}px`
    ele.style.height = `${r}px`
    ele.style.top = `${this.coords.y-(r/2)}px` 
    ele.style.left = `${this.coords.x-(r/2)}px`
    ele.style.backgroundImage = `url('${this.images[i]}')`
    ele.classList.add('dot')
    ele.addEventListener('click',e=>this.callback(i))
    return ele
  }

  move() {
    this.frame++
    const r = 30 + Math.random()*50,
      i = this.frame%this.images.length,
      childNode = this.createDotElement(r,i)
    this.$el.appendChild(childNode)
    if (this.animating) {
      requestAnimationFrame(x => this.move())
    }
  }
}