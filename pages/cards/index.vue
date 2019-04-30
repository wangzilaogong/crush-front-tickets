<template>
	<view>
		<image src="https://cdn.nlark.com/yuque/0/2019/png/280374/1552996358228-assets/web-upload/e256b4ce-d9a4-488b-8da2-032747213982.png" mode="widthFix" class="response"></image>
		<scroll-view scroll-y class="page">
		<view v-for="(item ,index) in cardsList" :key="index" class="flex" @tap="changePage" :data-cardId="item.id">
			<view  class="flex-sub padding-sm margin-xs radius bg-pink ">
				<div class="card_line">
					{{item.content}}
				</div>
			</view>
		</view>	
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Cards',
				cardsList:[{content:'KFC',id:1},{content:'COFFEE',id:2},{content:'KFC',id:3},{content:'COFFEE',id:4},{content:'KFC',id:5}]
			}
		},
		computed:{

		},
		onLoad() {

		},
		methods: {
			changePage(e){
				console.log(e.currentTarget.dataset.cardid);
				const id = e.currentTarget.dataset.cardid
				uni.navigateTo({
					url: '../orders/index?cardid='+ id ,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	.page{
		height: 300px;
	}
	.card_line{
		height: 150upx;
	}
</style>
