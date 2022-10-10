import Vue from 'vue'
import Vuex from 'vuex'
import cun from 'vuex-persistedstate'
import tab from './tab'
import getter from './getter'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins:[cun({storage: window.sessionStorage})],
  modules:{
    tab,
    getter
  }
})
