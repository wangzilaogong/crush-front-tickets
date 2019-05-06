<template>
	<view class="content">
		<cards v-if="PageCur=='cards'"></cards>
		<orders v-if="PageCur=='orders'"></orders>
		<account v-if="PageCur=='account'"></account>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="cards">
				<view class='cuIcon-cu-image'>
					<!-- <image :src="'/static/tabbar/basics' + [PageCur=='basics'?'_cur':''] + '.png'"></image> -->
				</view>
				<view :class="PageCur=='cards'?'text-green':'text-gray'">卡包</view>
			</view>
			<view class="action" @click="NavChange" data-cur="orders">
				<view class='cuIcon-cu-image'>
					<!-- <image :src="'/static/tabbar/component' + [PageCur == 'component'?'_cur':''] + '.png'"></image> -->
				</view>
				<view :class="PageCur=='orders'?'text-green':'text-gray'">下单</view>
			</view>
			<view class="action" @click="NavChange" data-cur="account">
				<view class='cuIcon-cu-image'>
					<!-- <image :src="'/static/tabbar/plugin' + [PageCur == 'plugin'?'_cur':''] + '.png'"></image> -->
				</view>
				<view :class="PageCur=='account'?'text-green':'text-gray'">我的</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'; 

	export default {
		data() {
			return {
				PageCur: 'cards',
				userInfo:''
			}
		},
		computed:{
			...mapState(['login', 'userName'])
		},
		onLoad() {
	
			uni.getUserInfo({
				success(res) {
				const { encryptedData , iv } = res
				uni.login({
				success(res) {
					console.log(res,res.code);
					const code = res.code
					uni.request({
						url: 'http://127.0.0.1:3000/users/wxLogin',
						method: 'POST',
						data: {
							code:code,
							encryptedData,
							iv
						},
						success: res => {
							console.log(res);
							console.log('ss');
						},
						fail: () => {},
						complete: () => {}
					});
				}
			})
				}
			})
		},
		methods: {
			 ...mapMutations(['logout']) ,
				NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			},
		}
	}
</script>

<style>

</style>
