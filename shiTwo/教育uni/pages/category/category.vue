<template>
	<view class="">
		
	</view>
</template>

<script>
	import http from '../../api/category.js'
	import { reactive, toRefs } from 'vue'
	export default {
		setup(props, context) {
			const state = reactive({
				list: []
			})
			let methods = {
				getList: async () => {
					try {
						const data = await http.getSearch()
						console.log(data);
					} catch (error) {
						// console.log(error);
					}
				}
			}
			
			return {
				...toRefs(state),
				...methods.getList()
			}
		}
	}
</script>

<style>
</style>
