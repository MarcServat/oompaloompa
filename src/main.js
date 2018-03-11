// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VuexStore from './vuex/store'
import App from './App'
import router from './router'

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store(VuexStore)

/* eslint-disable no-new */
window.napptilus = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
