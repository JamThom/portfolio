import vid1 from '@/assets/bila.mp4'
import isitabird from '@/assets/isitabird.mp4'
import jb7 from '@/assets/jb7.mp4'
import dff from '@/assets/dff.mp4'
import dp from '@/assets/dp.mp4'
import telenor from '@/assets/telenor.mp4'

export default [{
  subtitle: 'Agency website',
  title: 'IS IT A BIRD',
  url: 'https://isitabird.dk/',
  desktop: true,
  video: isitabird,
  stats: [{
    name: 'Date',
    value: 'May 2017'
  },{
    name: 'Role',
    value: 'Front end developer & interaction designer'
  },{
    name: 'Tech stack',
    value: 'Laravel, Backpack, Vue, Anime, jQuery'
  },{
    name: 'Description',
    value: 'Portfolio site for a Danish innovation agency. The site won multiple awards including an honourable mention on Awwwards and Css Awards SOTD'
  }]
}, {
  subtitle: 'Online shop',
  title: 'BILABONNEMENT',
  video: vid1,
  desktop: true,
  url: 'https://www.bilabonnement.dk/',
  stats: [{
    name: 'Date',
    value: 'June 2017'
  },{
    name: 'Role',
    value: 'Front end developer & interaction designer'
  },{
    name: 'Tech stack',
    value: 'Anime, jQuery'
  },{
    name: 'Description',
    value: 'Online car rental shop.'
  }]
}, {
  subtitle: 'yearly report site',
  title: 'Danmarks Frie Forskningsfond',
  url: 'http://aarsrapport.dff.dk/',
  desktop: true,
  video: dff,
  stats: [{
    name: 'Date',
    value: 'March 2018'
  },{
    name: 'Role',
    value: 'Front end developer & interaction designer'
  },{
    name: 'Tech stack',
    value: 'Vue, Anime'
  },{
    name: 'Description',
    value: 'A mobile blah blah blah blah blah blahds blah blah blah blah blah blah blah blah blah blah blah blah'
  }]
}, {
  subtitle: 'interactive infographic',
  title: 'BBC CULTURE INFOGRAPHIC',
  url: 'http://www.bbc.com/culture/story/20151012-chasing-james-bond-where-in-the-world-is-007',
  desktop: true,
  video: jb7,
  stats: [{
    name: 'Date',
    value: 'December 2015'
  },{
    name: 'Role',
    value: 'Front end developer'
  },{
    name: 'Tech stack',
    value: 'Angularjs'
  },{
    name: 'Description',
    value: 'An educational piece for BBC Culture\'s site.'
  }]
}, {
  subtitle: 'mobile campaign site',
  title: 'TELENOR',
  url: null,
  desktop: false,
  video: telenor,
  stats: [{
    name: 'Date',
    value: 'December 2017'
  },{
    name: 'Role',
    value: 'Front end developer'
  },{
    name: 'Tech stack',
    value: 'jQuery, Pixi.js'
  },{
    name: 'Description',
    value: 'An online christmas-themed competition for Telenor customers. The site featured extensive animation which had to work at a high frame rate across different mobile devices.'
  }]
},{
  subtitle: 'Personal online experiements',
  title: 'DREAMPIPE',
  url: 'http://www.dreampipe.io/',
  video: dp,
  desktop: true,
  stats: [{
    name: 'Date',
    value: 'Ongoing'
  },{
    name: 'Role',
    value: 'Developer & designer'
  },{
    name: 'Tech stack',
    value: 'Three.js, Angularjs, Vue, Pixi.js'
  },{
    name: 'Description',
    value: 'A collection of music apps and web experiements created for fun by me. Enjoy'
  }]
}]