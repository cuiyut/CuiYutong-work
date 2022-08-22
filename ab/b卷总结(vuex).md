<h1>Vuex分模块</h1>

**方便后期维护，可以更准确的找到对应的方法和数据**

- 在store文件夹中对应的js文件，定义配置并抛出

  ```js
  const state = {
  	things
  }
  
  const mutations = {
  	things,
  	things
  }
  
  export default{
      namespaced: true,
      state,
      mutations
  }
  ```

- getters单独写在一个js文件中，写在模块中会报错

  ```js
  const getters = {
      routeList: state => state.routeList,
      tabLists: state => state.tabs
  }
  
  export default getters
  ```

- 在index.js中抛出的模块js引入，再创建实例并整个抛出

  ```js
  import Vue from 'vue'
  import Vuex from 'vuex'
  import persistedState from 'vuex-persistedstate'
  import routeList from './modules/routeList'
  import getters from './getters'
  import tabs from './modules/tabs'
  import aside from './modules/aside'
  
  Vue.use(Vuex)
  
  export default new Vuex.Store({
    plugins: [persistedState({storage: window.sessionStorage})],
    modules:{
      routeList,
      tabs,
      aside
    },
    getters
  })
  ```

- 使用时

  ```js
  this.$store.commit('tabs/方法1',参数)
  ```

  ```js
  ...mapActions(["routeList/方法1"])
  ...mapMutations(['routeList/方法2'])
  ```

  ```js
  ...mapMutations("tabs", ["方法1", "方法2", "方法3","方法4","方法5"])
  ```



### namespaced命名空间

- namespaced：true 开启命名空间
- 保护在state中的数据不会被污染
- 在共同开发项目时，即便两个人定义的变量名称一样，也不会被污染覆盖