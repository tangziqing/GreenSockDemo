import Vue from 'vue'
import Router from 'vue-router'
import bezier from '@/views/bezier'
import move from '@/views/move'
import opacity from '@/views/opacity'
import rotation from '@/views/rotation'
import scale from '@/views/scale'
import skew from '@/views/skew'
import time from '@/views/time'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: move
    },
    {
      path: '/index',
      name: 'home',
      component: move
    },
    {
      path: '/move',
      name: 'move',
      component: move
    },
    {
      path: '/opacity',
      name: 'opacity',
      component: opacity
    },
    {
      path: '/rotation',
      name: 'rotation',
      component: rotation
    },{
      path: '/scale',
      name: 'scale',
      component: scale
    },{
      path: '/skew',
      name: 'skew',
      component: skew
    },
    {
      path: '/time',
      name: 'time',
      component: time
    },
    {
      path: '/bezier',
      name: 'bezier',
      component: bezier
    },


  ]
})
