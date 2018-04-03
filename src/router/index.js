import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Skills from '@/components/Skills'
import Work from '@/components/Work'
import WorkShowcase from '@/components/WorkShowcase'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/work/:id',
      name: 'WorkItem',
      component: WorkShowcase
    }
  ]
})
