<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    姓：<input type="text" v-model="yiName"><br/>
    名：<input type="text" v-model="erName"><br/>
    全称：<input type="text" v-model="allName"><br/>
    <button>获取全部</button><br />

    <input type="text" v-model="list.a">

  </div>
</template>



<script>
export default {
  data() {
    return {
      yiName:'崔',
      erName:'宇彤',
      list:{
        a:''
      }
    }
  },
  computed: {
    // allName() {
    //   return this.yiName + this.erName
    // },
    allName: {
      get() {
        return this.yiName + this.erName
      },
      set(val) {
        let arr = val
        this.yiName = arr[0]
        this.erName = arr[1]
      }
    }
  },
  watch: {
    list: {
        handler(val) {
            console.log(val,'监听了');
        }
    }
  }
};
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
