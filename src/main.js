import Vue from 'vue'
import App from './App.vue'
import Chartkick from 'chartkick';
import VueChartkick from 'vue-chartkick';
import Chart from 'chart.js'

Vue.use(VueChartkick, { Chartkick });
new Vue({
  el: '#app',
  render: h => h(App)
})
