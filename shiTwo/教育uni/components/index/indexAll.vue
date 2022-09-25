<template>
  <view class="hot">
    <view class="hot-top">
      <span>{{title}}</span>
      <p>{{red}}</p>
      <span class="all">全部></span>
    </view>
    <view class="hot-bottom" circular>
    		<view class="hot-item">
    			<view class="item" v-for="item in data" :key="item">
    			  <view class="left">
    			    <img :src="item.mainImage" alt="" />
              <!-- <image :src="item.mainImage" mode=""></image> -->
    			    <p class="time">{{item.totalTime}}</p>
    			  </view>
    			  <view class="right">
    			    <p class="title">{{item.title}}</p>
    			    <span class="user">
    			      <uni-icons type="person-filled" size="30">{{item.nickName}}</uni-icons>
    			    </span>
    			    <view class="bottom">
    			      <p class="price">
                  <span v-if="item.isFree == 0">免费</span>
                  <span v-if="item.isFree == 1">{{item.priceDiscount}}</span>
                </p>
    			      <p class="now">{{item.studyTotal}}人在学</p>
    			    </view>
    			  </view>
    			</view>
    		</view>
    </view>
  </view>
</template>

<script>
  export default {
    props:['data','title','red']
  }
</script>

<style lang="scss">
  .hot {
    width: 100%;
    padding-bottom: 80rpx;
    .hot-top {
      width: 100%;
      height: 80rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      margin-top: 10rpx;
      padding: 0 5%;
      font-size: 20px;
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
    .hot-item {
      width: 100%;
    }
  }
  .item {
    width: 700rpx;
    height: 220rpx;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 3%;
    .left {
      width: 45%;
      height: 80%;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        border-radius: 20rpx;
      }
      .time {
        display: block;
        width: 120rpx;
        height: 40rpx;
        text-align: center;
        line-height: 40rpx;
        font-size: 12px;
        background: rgba(0, 0, 0, 0.3);
        position: absolute;
        bottom: 10rpx;
        right: 10rpx;
        color: white;
        border-radius: 20rpx;
      }
    }
    .right {
      width: 45%;
      height: 75%;
      font-size: 12px;
      .title {
        font-size: 14px;
        font-weight: 800;
        margin-bottom: 30rpx;
      }
      .user {
        color: #959da5;
      }
      .bottom {
        display: flex;
        width: 100%;
        justify-content: space-between;
        .price {
          color: orange;
          font-size: 14px;
        }
        .now {
          color: dimgrey;
        }
      }
    }
  }
</style>