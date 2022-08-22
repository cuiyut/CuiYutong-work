import Vue from 'vue'
import Vuex from 'vuex'
import cun from 'vuex-persistedstate'
import maintop from './mainTop'
import tab from './Tab'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [cun({storage: window.sessionStorage})],
  modules: {
    maintop,
    tab
  }
})
