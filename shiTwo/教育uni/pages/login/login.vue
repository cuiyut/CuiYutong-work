<template>
  <view class="close" @click="close">
    X
  </view>
	<view class="context">
		<view class="login">
			LOGIN
      <view class="welcome">
      	欢迎回来!
      </view>
		</view>
		

		<view class="inps">
			<uni-view class="item">
				<uni-text class="title"><span>手机号码</span></uni-text>
				<uni-view>
					<uni-input>
            <input maxlength="11" autocomplete="off" type="number" placeholder="请输入手机号码"
								class="uni-input-input">
					</uni-input>
				</uni-view>
			</uni-view>

			<uni-view class="item">
				<uni-text class="title"><span>验证码</span></uni-text>
				<uni-view style="display: flex;align-items: center;justify-content: space-between;">
					<uni-input>
							<input maxlength="11" autocomplete="off" type="number" placeholder="请输入手机验证码"
								class="uni-input-input">

					</uni-input>
					<view class="getyan">
						获取验证码
					</view>
				</uni-view>
			</uni-view>
		</view>

		<view class="deng">
			登录
		</view>
	</view>
</template>

<script setup>
	import { reactive } from 'vue'

	const close = () => {
		uni.navigateBack()
	}
</script>

<style lang="scss">
  .close {
    font-size: 18px;
    box-sizing: border-box;
    padding: 40rpx 50rpx;
    font-weight: 500;
  }
	.context {
		padding-top: 150rpx;
    .login {
    	font-size: 60px;
    	color: #f8f8f8;
      position: relative;
      margin-bottom: 100rpx;
      .welcome {
        position: absolute;
      	top: 70rpx;
      	padding-left: 30px;
      	font-size: 23px;
      	color: #555;
      	text-shadow: 1px 0 1px rgb(0 0 0 / 30%)
      }
    }
    .inps {
    	padding: 0 30px;
      .item {
      	display: flex;
      	flex-direction: column;
      	justify-content: center;
      	padding-left: 15px;
      	background: #f8f6fc;
      	height: 60px;
      	border-radius: 4px;
      	margin-bottom: 25px;
        .title {
        	height: 25px;
        	line-height: 28px;
        	font-size: 13px;
        	color: #606266;
        	margin-bottom: 10px;
        }
      	.getyan {
      		background-color: #345dc2;
      		border-radius: 5px;
      		width: 80px;
      		text-align: center;
      		font-size: 12px;
      		padding: 5px 0;
      		color: #fff;
      	}
      }
    }
    .deng {
    	border-radius: 5px;
    	height: 46px;
    	color: white;
    	line-height: 46px;
    	text-align: center;
    	background-color: #345dc2;
    	margin: 0 30px;
    }
    .deng:active {
    	background-color: #007aff;
    }
	}
</style>
