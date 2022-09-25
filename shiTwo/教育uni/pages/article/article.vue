<template>
  <view class="context">
    <scroll-view class="top" scroll-x>
      <view :class="{'item':true, active:data.idx==null}" @click="change(null)">
        推荐
      </view>
      <view :class="{'item':true, active:data.idx==item.id}" v-for="item,index in data.tuiData" :key="item" @click="change(item.id)">
        {{item.name}}
      </view>
    </scroll-view>
    <view class="bottom">
      <articleData :data="data.bottomData"></articleData>
    </view>
  </view>
</template>

<script setup>
  import articleData from '../../components/article/articleData.vue'
  import { getQie,getTop } from '../../api/article.js'
  import { reactive } from 'vue'
  const data = reactive({
    // 上分分类
    tuiData:[],
    // 切换样式标识
    idx:null,
    // 下面数据
    bottomData:[]
  })
  getTop().then(res => {
    // console.log(res,'top');
    data.tuiData = res.data.data
  })
  const change = (index) => {
    data.idx = index
  }
  getQie({categoryId:data.idx,size:10,current:1}).then(res => {
    // console.log(res,'qie');
    data.bottomData = res.data.data.records
  })
</script>

<style lang="scss">
  .context {
    .top {
      width: 100%;
      height: 80rpx;
      white-space: nowrap;
      border-bottom: 1px solid #f1f1f1;
      position: fixed;
      top: 85rpx;
      background: white;
      left: 0;
      .item {
        width: 150rpx;
        height: 80rpx;
        line-height: 80rpx;
        text-align: center;
        display: inline-block;
        position: relative;
      }
    }
    .bottom {
      margin-top: 85rpx;
    }
  }
  .active {
    color: #345DC2;
   }
  .active::after {
    content: " ";
    width: 15px;
    height: 2px;
    background: #345DC2;
    position: absolute;
    bottom: 3px;
    left: 30px;
  }
</style>