<template>
  <view class="context">
    <scroll-view class="top">
      <view :class="{'item':true, active:data.idx==1}" @click="change(1)">
        热门回答
      </view>
      <view :class="{'item':true, active:data.idx==2}" @click="change(2)">
        最新问题
      </view>
      <view :class="{'item':true, active:data.idx==3}" @click="change(3)">
        等待回答
      </view>
    </scroll-view>
    <view class="bottom">
      <!-- 热门问答 -->
      <questionData v-if="data.idx==1" :data="data.hotData"></questionData>
      <!-- 最新问题 -->
      <questionData v-if="data.idx==2" :data="data.newData"></questionData>
      <!-- 等待回答 -->
      <questionData v-if="data.idx==3" :data="data.wiatData"></questionData>
    </view>
  </view>
</template>

<script setup>
  import questionData from '../../components/question/questionData.vue'
  import {getHot,getNew,getWiat} from '../../api/question.js'
  import {reactive} from 'vue'
  
  const data = reactive({
    // 热门
    hotData:[],
    // 最新
    newData:[],
    // 等待
    wiatData:[],
    // 切换标识
    idx:1
  })
  const change = (index) => {
    data.idx = index
  }
  
  // 热门问答
  getHot({current: 1, size: 10}).then(res => {
    // console.log(res,'hot');
    data.hotData = res.data.data.records
  })
  
  // 最新问答
  getNew({current: 1, size: 10}).then(res => {
    // console.log(res,'new');
    data.newData = res.data.data.records
  })
  
  // 等待回答
  getWiat({current: 1, size: 10}).then(res => {
    // console.log(res,'wiat');
    data.wiatData = res.data.data.records
  })
</script>

<style lang="scss">
  .context {
    .top {
      width: 100%;
      height: 80rpx;
      background: white;
      border-bottom: 1px solid #f1f1f1;
      position: fixed;
      top: 85rpx;
      left: 0;
      .item {
        width: 33%;
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
    width: 25px;
    height: 2px;
    background: #345DC2;
    position: absolute;
    bottom: 3px;
    left: 50px;
  }
</style>