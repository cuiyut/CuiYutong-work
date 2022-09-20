<template>
	<view class="search-box">
		<input class='search-input' type="text" placeholder='搜索你想要的内容' @click="go" >
	</view>
</template>

<script setup>
	// let value='123'
	let go=()=>{
		console.log(1);
	}
</script>

<style lang="scss">
	.search-box {
		width: 100%;
		height: 90rpx;
		// background-color: royalblue;
		padding: 9px;
		box-sizing: border-box;
		.search-input {
			background-color: #f8f8f8;
			height: 100%;
			text-align: center;
			border-radius: 30rpx;
		}
	}
</style>
