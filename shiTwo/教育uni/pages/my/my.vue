<template>
	<view class="top">
		<view class="topp" @click="login">
			<view class="left">
				<img src="http://m.mengxuegu.com/static/logo.png">
				<p>请登录</p>
			</view>
      <view class="right">
        <i class="iconfont icon-right"></i>
      </view>
		</view>
	</view>

	<view class="list">
		<view class="list-item">
			<view class="left">
        <i class="color iconfont icon-icon_A"></i>
        我的订单
      </view>
      <view class="right"><i class="iconfont icon-right"></i></view>
		</view>
		<view class="list-item">
			<view class="left">
        <i class="color iconfont icon-Package"></i>
        我的余额
      </view>
      <view class="right"><i class="iconfont icon-right"></i></view>
		</view>
		<view class="list-item">
			<view class="left">
        <i class="color iconfont icon-shuben"></i>
        我的学习
      </view>
      <view class="right"><i class="iconfont icon-right"></i></view>
		</view>
	</view>
	<view class="list">
		<view class="list-item">
			<view class="left">
        <i class="color iconfont icon-icon_A2"></i>
        设置
      </view>
      <view class="right"><i class="iconfont icon-right"></i></view>
		</view>
		<view class="list-item">
			<view class="left">
        <i class="color iconfont icon-icon_A1"></i>
        意见反馈
      </view>
      <view class="right"><i class="iconfont icon-right"></i></view>
		</view>
	</view>
	<view class="about">
		<view class="left">
      <i class="color iconfont icon-icon_A3"></i>
      关于我们
    </view>
    <view class="right"><i class="iconfont icon-right"></i></view>
	</view>
</template>

<script setup>
	import { reactive } from 'vue'

	const login = () => {
		uni.navigateTo({
			url: '/pages/login/login'
		})
	}
	
	
</script>

<style lang="scss">
	.about {
		width: 100%;
		display: flex;
		padding: 13px 19px;
		box-sizing: border-box;
		justify-content: space-between;
		border-bottom: 0.5px solid #efeff4;
	}

	.list {
		width: 100%;
		border-bottom: 10px solid #f8f9fb;

		.list-item {
			width: 100%;
			display: flex;
			padding: 13px 19px;
			box-sizing: border-box;
			justify-content: space-between;
			border-bottom: 0.5px solid #efeff4;
		}
	}
  .color {
    color: #345dc2;
    font-size: 20px;
    font-weight: 900;
  }

	.top {
		background-color: #345dc2;

		.topp {
			width: 100%;
			padding: 25px 19px;
			background-color: #fff;
			border-radius: 15px 15px 0 0;
			display: flex;
			justify-content: space-between;
			box-sizing: border-box;
			align-items: center;
			border-bottom: 10px solid #f8f9fb;
			.left {
				display: flex;
				align-items: center;
				font-size: 19px;
				font-weight: 700;
				img {
					width: 140rpx;
					margin-right: 10px;
				}
			}
		}
	}
</style>
