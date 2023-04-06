<template>
	<van-swipe>
		<van-swipe-item v-for="(item, index) in state.swiper" :key="index">
			<img :src="item.imgUrl" />
		</van-swipe-item>
		<template #indicator="{ active, total }" >
			<div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
		</template>
	</van-swipe>
</template>

<script setup>
import { reactive } from 'vue';
const state = reactive({
	swiper: [
		{
			imgUrl:
				'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f21e2dbdf45eb3e5425226569954317.jpg'
		},
		{
			imgUrl:
				'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bce98f630d7e309b7050229bad426728.jpg'
		},
		{
			imgUrl:
				'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c2d6dc9150a96b5a73cde67f0411ba30.jpg'
		},
		{
			imgUrl:
				'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56d1c41c4fd210243ced7a381f4935ca.jpg'
		},
		{
			imgUrl:
				'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/77256cee812638f213fa5e4b61856478.jpg'
		},
		{
			imgUrl:
				'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/23327f479a8e22da8e8c98ac38545b0a.jpg'
		}
	]
});
</script>

<style lang="stylus" scoped>
img{
   width 100%
   height auto
}
.custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
</style>
