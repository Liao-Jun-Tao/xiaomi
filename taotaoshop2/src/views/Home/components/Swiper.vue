<template>
	<div class="swiper">
		<van-swipe
			class="swipe"
			:autoplay="2000"
			indicator-color="white"
			lazy-render
			duration="200">
			<van-swipe-item
				class="swipe_item"
				v-for="swiper in swiperList"
				:key="swiper.id">
				<img class="swipe_item__img" :src="swiper.imgSrc" />
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useHomeStore } from '@/store/home.js';
import { showLoadingToast, closeToast } from 'vant';

const homeStore = useHomeStore();
const swiperList = computed(() => homeStore.swiperList);

onMounted(async () => {
	showLoadingToast({
		message: '加载中...',
		forbidClick: true
	});
	await homeStore.getSwiperList();
	closeToast();
});
</script>

<style lang="stylus" scoped>
@import '../../../common/mixin.styl'
.swiper{
	width 100%
}
.swipe{
		width 100%
}
.swipe_item{
			width 100%
			height 6.24rem}
.swipe_item__img{
				wh(100%,6.24rem)
}
</style>
