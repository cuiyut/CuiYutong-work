<template>
	<view class="context">
		<scroll-view class="left" scroll-y>
		  <view :class="{'item':true, active:data.idx==index}" v-for="item,index in data.leftData" :key="index" @click="change(index)">
		    {{item.name}}
		  </view>
		</scroll-view>
    <view class="right">
      <view class="item-item" v-for="item in data.labelData" :key="item">
        {{item.name}}
      </view>
    </view>
	</view>
</template>

<script setup>
	import {getCate} from '../../api/category.js'
	import { reactive } from 'vue'
	const data = reactive({
    leftData:[],
    labelData:[],
    idx:0
  })
  getCate().then(res => {
    // console.log(res);
    data.leftData = res.data.data
    data.labelData = res.data.data[0].labelList
  })
  const change = (index) => {
    data.labelData = data.leftData[index].labelList
    data.idx = index
  }
</script>

<style lang="scss">
  .context {
    display: flex;
    // margin-bottom: 30rpx;
    .left {
      width: 25%;
      height: calc(100vh - 96px);
      background: #f8f9fb;
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 100%;
        height: 100rpx;
        text-align: center;
        line-height: 100rpx;
        margin: 20px 0;
        position: relative;
      }
    }
    .right {
      width: 75%;
      display: flex;
      justify-content: space-around;
      align-content: flex-start;
      flex-wrap: wrap;
      .item-item {
        width: 170rpx;
        height: 70rpx;
        line-height: 70rpx;
        text-align: center;
        box-sizing: border-box;
        border: 1px solid grey;
        margin: 20rpx 0;
        font-size: 14px;
        border-radius: 30rpx;
      }
    }
  }
  .active {
    color: #345DC2;
   }
  .active::after {
    content: " ";
    width: 2px;
    height: 15px;
    background: #345DC2;
    position: absolute;
    top: 18px;
    left: 0px;
  }
</style>
