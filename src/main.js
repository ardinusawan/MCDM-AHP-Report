import Vue from 'vue'
import App from './App.vue'
import Chartkick from 'chartkick';
import VueChartkick from 'vue-chartkick';
import VueRouter from 'vue-router';
import Chart from 'chart.js'
Vue.use(VueRouter)
Vue.use(VueChartkick, { Chartkick });

const router = new VueRouter({
  mode: 'history',
  routers: [{
    path: 'result',
    component: require('./components/Result.vue')
  }]
})

new Vue({
  el: '#app',
  router,
  render: h => h(require('./App.vue'))
})
