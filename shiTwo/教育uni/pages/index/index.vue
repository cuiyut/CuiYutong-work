<template>
  <view class="content">
    <view class="top" :style="'background:linear-gradient(' + data.bgColor + ',white)'">
      <search></search>
      <!-- 轮播 -->
      <view class="uni-margin-wrap">
        <swiper class="swiper" circular indicator-dots="true" autoplay="true" interval="5000" duration="500" @change="changeBG">
          <swiper-item v-for="item in data.swiperData" :key="item.id">
            <view class="swiper-item">
              <img :src="'http://m.mengxuegu.com'+item.imageUrl" :alt="item.title">
            </view>
          </swiper-item>
        </swiper>
      </view>
    </view>
    
    <!-- 首页分类 -->
    <view class="fen">
      <view class="fen-item" v-for="item in data.fenList" :key="item.id" @click="goFen">
        {{item.name}}
      </view>
    </view>
    
    <!-- 热门推荐 -->
    <view class="hot">
      <view class="hot-top">
        <span>热门推荐</span>
        <p>HOT</p>
        <span class="all">全部></span>
      </view>
      <view class="hot-bottom">
        <view class="hot-item">
          
        </view>
      </view>
    </view>
    
    <!-- 近期上新 -->
    
    <!-- 免费精选 -->
    
    <!-- 付费精品 -->
  </view>
</template>

<script setup>
  import search from "/components/search/search.vue"
  import { getSwiper,getFen,getHot,getNew,getFree,getnoFree } from "../../api/index.js"
  import { reactive } from 'vue'
  const data = reactive({
    // 轮播图
    swiperData: [],
    // 分类列表
    fenList:[],
    // 背景颜色
    bgColor:'',
    // 热门推荐
    hotData:[],
    // 近期上新
    newData:[],
    // 免费精选
    freeData:[],
    // 付费精品
    nofreeData:[]
  })
  
  // 轮播图
  getSwiper().then(res => {
    data.swiperData = res.data.data
  })
  // 随轮播变色背景
  const changeBG = (e) => {
    data.bgColor = data.swiperData[e.detail.current].background
  }
  
  // 首页分类
  getFen().then(res => {
    data.fenList = res.data.data
    data.fenList = data.fenList.splice(0,8)
  })
  // 跳转分类
  const goFen = () => {
    console.log('123');
  }
  
  // 热门推荐
  getHot().then(res => {
    console.log(res);
  })
  
  // 近期上新
  
  // 免费精选
  
  // 付费精品
</script>

<style lang="scss">
  .content {
    width: 100%;
    .top {
      width: 100%;
      height: 440rpx;
      background: linear-gradient(#006C00,white);
      .uni-margin-wrap {
        width: 100%;
        height: 350rpx;
        box-sizing: border-box;
        padding-top: 20rpx;
        .swiper {
          height: 330rpx;
          width: 90%;
          margin: auto;
          .swiper-item {
            display: block;
            height: 100%;
            width: 100%;
            img {
              width: 100%;
              height: 100%;
              border-radius: 30rpx;
            }
          }
        }
      }
    }
    .fen {
      width: 100%;
      height: 200rpx;
      margin-top: 10rpx;
      display: flex;
      box-sizing: border-box;
      padding: 20rpx 30rpx;
      flex-wrap: wrap;
      justify-content: space-around;
      align-content: space-around;
      .fen-item {
        width: 160rpx;
        height: 65rpx;
        background: #f8f9fb;
        line-height: 65rpx;
        text-align: center;
        font-size: 16rpx;
        border-radius: 20rpx;
      }
    }
    .hot {
      width: 100%;
      .hot-top {
        width: 100%;
        height: 80rpx;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        margin-top: 10rpx;
        padding: 0 5%;
        font-size: 35rpx;
        p {
          width: 70rpx;
          height: 30rpx;
          background: linear-gradient(to right,orange,red);
          font-size: 12rpx;
          color: white;
          text-align: center;
          line-height: 30rpx;
          border-radius: 15rpx 15rpx 15rpx 0;
          margin-left: -350rpx;
        }
        .all {
          font-size: 14px;
          color: #959da5;
        }
      }
    }
  }
</style>
