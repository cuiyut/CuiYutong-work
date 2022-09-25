<template>
  <view class="content">
    <view class="top" :style="'background:linear-gradient(' + data.bgColor + ',white)'">
      <!-- 轮播 -->
      <view class="uni-margin-wrap">
        <swiper class="swiper" circular indicator-dots="true" autoplay="true" interval="5000" duration="500" @change="changeBG">
          <swiper-item v-for="item in data.swiperData" :key="item.id">
            <view class="swiper-item">
              <img :src=" item.imageUrl" :alt="item.title">
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
    
    <indexAll :data="data.hotData" title="热门推荐" red="HOT"></indexAll>
    <indexAll :data="data.newData" title="近期上新" red="NEW"></indexAll>
    <indexAll :data="data.freeData" title="免费精选" red="FREE"></indexAll>
    <indexAll :data="data.nofreeData" title="付费精品" red="NICE"></indexAll>
    
  </view>
</template>

<script setup>
  import { getSwiper,getFen,getHot,getNew,getFree,getNofree } from "../../api/index.js"
  import indexAll from "/components/index/indexAll.vue"
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
  getHot({ sort: "hot", current: 1, size: 10}).then(res => {
    // console.log(res,'hot');
    data.hotData = res.data.data.records
  })
  
  // 近期上新
  getNew({ sort: "new", current: 1, size: 10}).then(res => {
    // console.log(res,'new');
    data.newData = res.data.data.records
  })
  
  // 免费精选
  getFree({ isFree: 1, current: 1, size: 10}).then(res => {
    // console.log(res,'free');
    data.freeData = res.data.data.records
  })
  
  // 付费精品
  getNofree({ isFree: 0, current: 1, size: 10}).then(res => {
    // console.log(res,'nofree');
    data.nofreeData = res.data.data.records
  })
</script>

<style lang="scss">
  .content {
    width: 100%;
    .top {
      width: 100%;
      height: 360rpx;
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
  }
</style>
