import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    book:[]
  },
  mutations: {
    add(state,books){
      let index =  state.book.findIndex((item) => item.id === books.id)
      if(index == -1) {
        state.book.push(books)
      }else {
        alert('您已添加')
        return false
      }
    },
    del(state,index) {
      state.book.splice(index,1)
    }
  },
  actions: {},
  modules: {}
})