<template>
	<div class="subnav">
		<van-swipe class="my-swipe" indicator-color="white">
			<van-swipe-item>
				<template v-for="items in subnav" :key="items.id">
					<div class="wrapper">
						<div class="content" v-for="item in items.data1">
							<img class="photo" :src="item.imgSrc" alt="" />
							<p class="title">{{ item.title }}</p>
						</div>
					</div>
				</template>
			</van-swipe-item>
			<van-swipe-item>
				<template v-for="items in subnav" :key="items.id">
					<div class="wrapper">
						<div class="content" v-for="item in items.data2">
							<img class="photo" :src="item.imgSrc" alt="" />
							<p class="title">{{ item.title }}</p>
						</div>
					</div>
				</template>
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue';
import { useHomeStore } from '@/store/home.js';
const homeStore = useHomeStore();
const subnav = computed(() => homeStore.subnav);
onMounted(async () => {
	await homeStore.getSubnav();
});
</script>

<style lang="stylus" scoped>
.wrapper{
   display: flex;
   flex-wrap: wrap;
  justify-content center
}
.content{
   margin 0 10px
   text-align: center
}
.photo{
   width 50px
   height 50px
}
</style>
