import anime from 'animejs'

export default function(from,callback) {
  
  const timeline = anime.timeline({
    complete: x => callback()
  })

  switch (from) {
    case '/':
      timeline.add({
        targets: '.hello-world circle',
        r: 0,
        opacity: [1,0],
        delay: (e,i) => {
          return 70 * i
        },
        duration: 600,
        easing: 'easeInOutSine'
      })
      .add({
        targets: '.hello-world .card-portrait',
        scale: [1,0],
        opacity: [1,0],
        duration: 600,
        offset: 600
      })
      .add({
        targets: '.hello-world .opacity-fade',
        opacity: [1,0],
        easing: 'easeInOutSine',
        offset: 0
      })
    break;
    case '/skills':
      timeline.add({
        targets: 'section.skills',
        translateY: [0,'-1%'],
        opacity: [1,0],
        duration: 600,
        easing: 'easeInOutSine'
      })
    break;
    case '/work':
      timeline.add({
        targets: '.work-item',
        opacity: [1,0],
        easing: 'easeInOutSine',
        offset: 0
      })
    break;
    default:
      callback()
    break;
  }
}