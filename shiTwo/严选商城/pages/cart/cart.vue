<template>
  <view class="car-wrapper">
    <view class="top">
      <view class="left">
        <p>张三</p>
        <p>北京市</p>
      </view>
      <view class="right">
        020-10334431
      </view>
    </view>
    <view class="middle">
      购物车
    </view>
    <view class="bottom">
      <view class="fubox">
        <u-checkbox></u-checkbox>
      </view>
      <view class="imgs">
        <img src="../../static/logo.png" alt="">
      </view>
      <view class="detail">
        <view class="desc">
          撒都会i减哦卡度过his价哦看到你还i加我看佩奇和我进去哦我看
        </view>
        <view class="bottomm">
          <view class="price">
            ￥1899
          </view>
          <view class="num">
            <u-button class="btn">-</u-button>
            <span>12</span>
            <u-button class="btn">+</u-button>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
</script>

<style lang="scss">
  .car-wrapper {
    .top {
      display: flex;
      justify-content: space-between;
      padding: 20rpx;
    }
    .middle {
      height: 90rpx;
      border-top: 5rpx solid #eb4450;
      border-bottom: 5rpx solid #eb4450;
      color: #eb4450;
      font-size: 18px;
      line-height: 80rpx;
      padding-left: 20rpx;
      box-sizing: border-box;
    }
    .bottom {
      width: 100%;
      display: flex;
      height: 200rpx;
      align-items: center;
      padding: 0rpx 20rpx;
      box-sizing: border-box;
      .fubox {
        width: 10%;
      }
      .imgs {
        width: 30%;
        img {
          width: 85%;
          height: 140rpx;
        }
      }
      .detail {
        width: 60%;
      }
      .bottomm {
        margin-top: 20rpx;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .price {
          color: #eb4450;
          font-size: 18px;
          font-weight: 800;
        }
        .num {
          width: 50%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          .btn {
            width: 10rpx;
            box-sizing: border-box;
            height: 50rpx;
          }
        }
      }
    }
  }
</style>