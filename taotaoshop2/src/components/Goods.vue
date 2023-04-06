<template>
   <van-back-top  :height="100" bottom="60px" right="10px" />
   <div class="like">--猜你喜欢--</div>
	<van-pull-refresh v-model="refreshng" @refresh="onRefresh">
		<van-list
			v-model:loading="loading"
			:finished="finished"
			finished-text="没有更多了"
			@load="onLoad">
			<div class="goods" @click="gotoDetails">
				<div class="goods-item" v-for="item in list" :key="item.id">
					<img class="goods-photo" :src="item.image" />
					<div class="text-box">
						<div class="goods-name">{{ item.title }}</div>
						<p class="goods-mes">{{ item.message }}</p>
						<p class="goods-pri">￥{{ item.price }}</p>
					</div>
				</div>
			</div>
		</van-list>
	</van-pull-refresh>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue';
import { useHomeStore } from '@/store/home.js';
import { useRouter } from 'vue-router';
const router = useRouter()
const homeStore = useHomeStore();
// const goods = computed(() => homeStore.goods);
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);
const list = ref([]);
const  gotoDetails = ()=>{
   router.push({
      path:'/details'
   })
}
const goods = ref([]);

const moveArray = () => {
	if (Array.isArray(goods.value)) {
		const arr1 = goods.value.splice(0, 10);  //把goods前十个元素放入到arr1中   
       list.value.push(...arr1);  // 把arr1中10个元素全放入list中
	}
};

const onLoad = () => {
	setTimeout(() => {
		if (refreshing.value) {
			list.value = [];
			refreshing.value = false;
		}
		moveArray();
		loading.value = false;

		if (list.value.length >= 100) {
			finished.value = true;
		}
	},500);
};

const onRefresh = () => {
	// 清空列表数据
	finished.value = false;

	// 重新加载数据
	// 将 loading 设置为 true，表示处于加载状态
	loading.value = true;
	onLoad();
};

onMounted(async () => {
	await homeStore.getGoods();
	//  console.log(homeStore.goods);
	goods.value = homeStore.goods;
	//  console.log(arr1);
});
</script>

<style lang="stylus" scoped>
.like{
   text-align: center;
   margin 20px 5px 
   font-size:18px
   font-weight 700
   }
.goods{
   display flex
   flex-wrap wrap
   justify-content: space-evenly;
}
.goods-item{
  width 48%
  background-color #f8f8f8
  margin-bottom 5px
  border-radius 7px
}
.goods-photo{
  width 150px
  height 150px
  position reactive
  left 50%
  translate -50%
}
.text-box{
   padding-left 5px
}
.goods-name{
   font-size 0.426667rem /* 16/37.5 */
   font-weight 600
}
.goods-mes{
   font-size 0.32rem /* 12/37.5 */
   color #7d7b7c
   font-weight 300
}
.goods-pri{
   font-size 18px
   font-weight 500
}
</style>
