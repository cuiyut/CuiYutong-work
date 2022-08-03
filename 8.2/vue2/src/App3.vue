<template>
  <div id="app">
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