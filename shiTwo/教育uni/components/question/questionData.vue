<template>
  <view class="context">
    <view class="items" v-for="item in data" :key="item">
      <view class="topp">
        {{item.title}}
      </view>
      <view class="bottomm">
        <p>{{item.reply}}回答 · {{item.viewCount}}浏览</p>
        <p>{{item.nickName}} · {{item.createDate}}</p>
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
  .context {
    .items {
      width: 100%;
      box-sizing: border-box;
      padding: 20rpx 30rpx;
      border-bottom: 1px solid #f1f1f1;
      .topp {
        font-size: 16px;
        font-weight: 800;
        margin-bottom: 10rpx;
      }
      .bottomm {
        width: 100%;
        display: flex;
        justify-content: space-between;
        color: #999;
        font-size: 12px;
      }
    }
  }
</style>