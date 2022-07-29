<template>
  <div class="home-wrapper">
    <div class="shang">
      <span>图书商城</span>
      <span class="wode" @click="goshop()">我的书架</span>
    </div>
    <input type="text" class="sou" v-model="ss" placeholder="输入图书名称" @keydown.enter="ssou()">


    <div class="shu">

      <div class="list" v-for="item in list" :key="item.id">
        <div class="imgs">
          <img :src="item.img" alt="">
        </div>
        <div class="miao">
          {{item.desc}}
        </div>
        <div class="xia">
          <p>{{item.name}}</p>
          <button class="jia" @click="add(item)">+</button>
        </div>
      </div>

    </div>


  </div>
</template>

<script>
import list from '/public/data副本.json'

export default {
  components:{
    list
  },
  data() {
    return {
      list:[],
      ss:''
    };
  },

  mounted() {
    this.getlist()
  },

  methods: {
    getlist() {
      this.list = list
    },
    goshop() {
      this.$router.push('/shop')
    },
    ssou() {
      this.list = list
      this.list = this.list.filter((item) => item.name.includes(this.ss))
    },
    add(books) {
        this.$store.commit('add',books)
    }
  },
};
</script>

<style>
.home-wrapper {
  width: 500px;
  margin: auto;
}
.shang {
  width: 100%;
  height: 50px;
  background: red;
  text-align: center;
  line-height: 50px;
}
.wode {
  float: right;
  margin-right: 10px;
  font-size: 20px;
  color: skyblue;
  cursor: pointer;
}
.sou {
  width: 100%;
  height: 30px;
  border: none;
  outline: none;
  background: rgb(197, 191, 191);
  margin-top: 0px;
}
.shu {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.list {
  width: 45%;
  height: 320px;
  margin-top: 10px;
}
.imgs {
  width: 100%;
  height: 200px;
}
img {
  width: 100%;
  height: 100%;
}
.miao {
  width: 100%;
  color: grey;
  font-size: 12px;
}
.xia {
  width: 100%;
  color: red;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  align-items: center;
}
.jia {
  cursor: pointer;
}
</style>