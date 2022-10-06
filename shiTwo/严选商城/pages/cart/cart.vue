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
        <u-checkbox v-model="checked" ></u-checkbox>
      </view>
      <view class="imgs">
        <img class="imgss" src="../../static/logo.png" alt="">
      </view>
      <view class="detail">
        <view class="desc">
          撒都会i减哦卡度过his价哦看到你还i加我看佩奇和我进去哦我看sdjfghjkslaksjdhbjshkalmnsbjdhkamsndjbnksml
        </view>
        <view class="bottomm">
          <view class="price">
            ￥1899
          </view>
          <view class="num">
            <u-number-box v-model="value"></u-number-box>
          </view>
        </view>
      </view>
    </view>
    <view class="dibu">
      <view class="left">
        <u-checkbox v-model="checkedAll" ></u-checkbox>
        <span>全选</span>
      </view>
      <view class="right">
        <view class="leftt">
          <p>合计:<span class="spann">￥1899</span></p>
          <p>包含运费</p>
        </view>
        <view class="rightt">
          结算(1)
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
  import {reactive,toRefs} from 'vue'
  
  export default {
    setup() {
      const data = reactive({
        value:0,
        checked:false,
        checkedAll:false
      })
      return {
        ...toRefs(data)
      }
    }
  }
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
      border-bottom: 2rpx solid darkgray;
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
        .imgss {
          width: 85%;
          height: 140rpx;
        }
      }
      .detail {
        width: 60%;
        .desc {
          overflow:hidden;
          text-overflow:ellipsis;         
          display:-webkit-box;       
          -webkit-line-clamp:2;     
          -webkit-box-orient:vertical;
        }
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
    .dibu {
      width: 100%;
      height: 110rpx;
      position: fixed;
      bottom:100rpx;
      display: flex;
      border-top: 2rpx solid darkgrey;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        height: 100%;
        width: 20%;
        align-items: center;
        box-sizing: border-box;
        justify-content: center;
        font-size: 14px;
        padding-left: 20rpx;
      }
      .right {
        width: 60%;
        display: flex;
        height: 100%;
        justify-content: end;
        .leftt {
          height: 100%;
          line-height: 50rpx;
          font-size: 14px;
          box-sizing: border-box;
          padding-right: 10rpx;
          text-align: right;
          .spann {
            color: #eb4450;
          }
        }
        .rightt {
          width: 50%;
          height: 100%;
          background: #eb4450;
          text-align: center;
          color: white;
          font-size: 18px;
          line-height: 100rpx;
        }
      }
    }
  }
</style>