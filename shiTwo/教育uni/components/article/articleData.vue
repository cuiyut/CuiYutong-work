<template>
  <view class="big">
    <view class="items" v-for="item in data" :key="item">
      <view class="leftt">
        <view class="topp">
          {{item.title}}
        </view>
        <view class="middle">
          <span class="decs">{{item.summary}}</span>
        </view>
        <view class="bottomm">
          <span class="name">{{item.nickName}}</span>
          <span class="date"> · {{item.updateDate}} · {{item.viewCount}}赞</span>
        </view>
      </view>
      <view class="rightt" v-if="item.imageUrl != null">
        <img :src="item.imageUrl">
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props:['data']
  }
</script>

<style lang="scss">
  .big {
    width: 100%;
    .items {
      width: 100%;
      display: flex;
      border-bottom: 1px solid #f1f1f1;
      box-sizing: border-box;
      padding: 20rpx;
      .leftt {
        width: 65%;
        flex: 1;
        .topp {
          width: 100%;
          font-size: 18px;
          font-weight: 800;
        }
        .middle {
          .decs {
            display: inline-block;
            width: 100%;
            font-size: 14px;
            color: darkgray;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
       }
        .bottomm {
          width: 100%;
          font-size: 12px;
          color: darkgray;
          font-weight: 400;
          margin-top: 20rpx;
          .name {
            color: black;
          }
        }
      }
      .rightt {
        width: 35%;
        box-sizing: border-box;
        padding: 30rpx 20rpx;
        img {
          width: 220rpx;
          height: 150rpx;
          border-radius: 20rpx;
        }
      }
    }
  }
</style>