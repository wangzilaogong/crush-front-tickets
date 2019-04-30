<template>
	<view class="content">
		{{title}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Orders2'
			}
		},
		onLoad: function (e) { //option为object类型，会序列化上个页面传递的参数
        console.log(e); 
		this.title = e.cardid
		},
		computed:{

		},

		methods: {

		}
	}
</script>

<style>

</style>
