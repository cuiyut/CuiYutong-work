<template>
  <div class="wrapper">
    <div class="input">
      <input type="text" class="sou" v-model="sou" @keydown.enter="ss()">
    </div>
    <div class="biao">
      <table>
        <tr bgcolor="grey">
          <td class="id">
            编号
            <div class="xia-wrapper" v-show="isid == true" @click="idxu()">
              ↓
            </div>
            <div class="shang-wrapper" v-show="isid == false" @click="idxu()">
              ↑
            </div>
          </td>
          <td class="name">名称</td>
          <td class="price">
            价格
            <div class="shang-jia" v-show="ispri == false" @click="prixu()"></div>
            <div class="xia-jia" v-show="ispri == true" @click="prixu()"></div>
          </td>
        </tr>
        <tr v-for="item in list" :key='item.id'>
          <td>{{item.id}}</td>
          <td>{{item.goods_name}}</td>
          <td>{{item.price}}</td>
        </tr>
      </table>
    </div>
    <div class="dibu">
      <div class="zuo">
        每页<input type="text" class="ye" v-model="total" @keydown.enter="tiao()">条，
        共<span>{{count}}</span>条
      </div>
      <div class="fanye-wrapper">
          <p v-for="(item, index) in arr" :key="index" @click="fan(item)">
              {{item}}
          </p>
      </div>
    </div>
  </div>
</template>

<script>
import list from './assets/data.json'

export default {
  components:{
    list
  },
  data() {
    return {
      list:'',
      total:0,
      sou:'',
      isid:false,
      ispri:true,
      arr:[],
      count:0
    }
  },
  mounted() {
    this.getlist()
  },
  methods: {
    // 渲染
    getlist() {
      this.list = list.data
      this.count = list.data.length
    },
    // 搜索
    ss() {
      this.list = this.list.filter(item => {
        return item.goods_name.includes(this.sou)
      })
      if(this.sou == '') {
        this.list = list.data
      }
    },
    // 编号排序
    idxu() {
      if(this.isid == false) {
        this.list = this.list.sort(function(a,b) {
          return a.id - b.id
        })
        this.isid = true
      }else {
        this.list = this.list.sort(function(a,b) {
          return b.id - a.id
        })
        this.isid = false
      }
    },
    // 价格排序
    prixu() {
      if(this.ispri == false) {
        this.list = this.list.sort(function(a,b) {
          return a.price - b.price
        })
        this.ispri = true
      }else {
        this.list = this.list.sort(function(a,b) {
          return b.price - a.price
        })
        this.ispri = false
      }
    },
    // 每页条数
    tiao() {
      this.arr = []
      this.list = list.data;
      var pagenum = Math.ceil(this.list.length / this.total);
      var arr = this.list.slice(0, this.total);
      this.list = arr;
      for (var i = 1; i <= pagenum; i++) {
        this.arr.push(i);
      }
    },
    // 翻页
    fan(num) {
      this.list = list.data;
      var a1 = num * this.total - this.total;
      var a2 = num * this.total;
      var arr = this.list.slice(a1, a2);
      this.list = arr;
    }
  },
};
</script>

<style>
.xia-wrapper {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid red;
    box-sizing: border-box;
    background: white;
    color: red;
    font-size: 20px;
    font-weight: 800px;
    text-align: center;
    line-height: 25px;
    float: right;
    cursor: pointer;
}
.shang-wrapper {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid red;
    box-sizing: border-box;
    background: white;
    color: red;
    font-size: 20px;
    text-align: center;
    line-height: 25px;
    float: right;
    cursor: pointer;
}
table {
  margin-top: 10px;
  width: 100%;
  text-align: center;
}
.dibu {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.ye {
  width: 25px;
}
.id {
  width: 250px;
  box-sizing: border-box;
  padding-right: 20px;
}
.price {
  width: 350px;
  box-sizing: border-box;
  padding-right: 70px;
}
.shang-jia {
  width: 30px;
  height: 30px;
  border: 3px solid white;
  border-top: white;
  border-left: white;
  box-sizing: border-box;
  transform: rotate(42deg);
  float: right;
  margin-top: -10px;
  margin-bottom: 10px;
  margin-right: 20px;
}
.xia-jia {
  width: 30px;
  height: 30px;
  border: 3px solid white;
  border-top: white;
  border-left: white;
  box-sizing: border-box;
  transform: rotate(220deg);
  float: right;
  margin-top: 10px;
  margin-bottom: -10px;
  margin-right: 20px;
}
.fanye-wrapper {
  width: 200px;
  height: 30px;
  display: flex;
  margin-top: -15px;
}
p {
  width: 30px;
  height: 30px;
  border: 1px solid skyblue;
  text-align: center;
  line-height: 30px;
}
</style>