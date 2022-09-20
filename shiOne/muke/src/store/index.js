import Vue from 'vue'
import Vuex from 'vuex'
import cun from 'vuex-persistedstate'
import maintab from './mainTab'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [cun({storage: window.sessionStorage})],
  modules: {
    maintab
  }
})
