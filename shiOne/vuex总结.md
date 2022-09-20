<h1>Vuex</h1>
### vuex概念

- Vuex是一个专为Vue.js应用程序开发的**状态管理模式**，
- 采用了**集中式存储**管理应用的所有组件的状态
- 吸取了redux的但数据管理，去掉了redux的限制，更加适合vue



### 市场上同类型的状态管理工具

- react
  - Recoil
  - MobX
  - XState
  - Redux（with hooks）
  - Context
- vue
  - vuex
- vue3
  - pinia



### 核心、使用

- **state**存储数据
  - this.$store.state（参数）---- computed
  -  ...mapState [ (参数) ] 
- **mutations**可以直接操作state里面的数据
  - this.$store.commit（‘方法名’，参数） ---- methods
    - commit只能传一个参数，传的多的时候用复杂数据类型
  - ...mapMutations [ ( ‘方法名’，参数) ]
- **action**可异步操作，防止请求同一借口造成数据混乱
  - this.$store.dispach（‘方法名’，参数）---- methods
    - 不能直接操作数据，调用mutations操作数据
  - ...mapAction [ ( ‘方法名’，参数) ]
- **getter**和计算属性相似，可对state做逻辑处理
  - this.$stoer.getters ( ‘方法名’，参数 )  ---- computed
  - ...mapGetter [ ( ‘方法名’，参数) ]
- **modules**分模块化存储



### 运行原理

- 通过dispach调用actions中的方法
- 再通过commit调用mutations中的方法
- 在mutatios中可以直接修改state的数据



### vuex数据丢失

- 使用本地存储
- 使用vuex数据持久化
  - 下载插件：cnpm install vuex-persistedstate --save
  - 导入：impot name1 from ‘vuex- persistedstate ’
  - 挂载插件：plugins [ persistedState ( {storage:window.sessionStorage} ) ]



### 状态管理模式

- 状态(state)：驱动应用的数据源
- 视图(view)：以声明方式将状态映射到视图
- 操作(actions)：响应在视图上的用书输入导致的状态变化
- 在多个组件共享状态时，单向数据流的简洁性很容易被破坏
  - 多个视图依赖于同一状态
  - 来自不同视图的行为需要变更同一状态