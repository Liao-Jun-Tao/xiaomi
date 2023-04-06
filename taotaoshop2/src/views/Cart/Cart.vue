<template>
	<div class="cart">
		<van-nav-bar
			title="购物车"
			:right-text="editMode ? '完成' : '编辑'"
			@click-left="onClickLeft"
			@click-right="toggleEditMode" />

		<van-swipe-cell v-for="(item, index) in goodsList" :key="item.id">
			<!-- 在编辑模式下，显示删除按钮 -->
			<template #right>
				<van-button
					class="delete"
					type="danger"
					text="删除"
					@click="showDeleteMenu(index)" />
			</template>

			<van-checkbox
				v-show="editMode"
				v-model="item.checked"
				checked-color="#ee0a24"
				class="checkbox" />
			<van-card
				class="goods-card"
				:thumb="item.image"
				:title="item.title"
				:desc="item.desc"
				:num="item.num"
				:price="item.price"
				:is-link="true"
				@click="onClickCard(index)" />
		</van-swipe-cell>

		<!-- 提交栏 -->
		<van-submit-bar
			class="submit"
			:price="totalPrice"
			button-text="提交订单"
			@submit="onSubmit">
			<!-- 全选按钮 -->
			<van-checkbox
				v-show="editMode"
				v-model="checked"
				checked-color="#ee0a24"
				@change="toggleSelectAll"
				>全选</van-checkbox
			>
			<template #tip>
				{{ tipText }}
				<span @click="onClickLink">修改地址</span>
			</template>
		</van-submit-bar>

		<NavBar />
	</div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import { ref, computed, onMounted } from 'vue';
import { showToast, showConfirmDialog } from 'vant';
import { useHomeStore } from '@/store/home.js';

const goods = computed(() => store.goods);
const store = useHomeStore();
const checked = ref(true);
const editMode = ref(false);
const goodsList = ref([
	{
		id: 9,
		image:
			'https://img.youpin.mi-img.com/800_pic/d60dc30791e6bac685eb5e8a83662a01.png@base@tag=imgScale&F=webp',
		title: '多彩指尖积木',
		message: '打开幸运, 翻出乐趣',
		disc: '满1000减60',
		price: '9.99',
		num: 1,
		checked: true
	},
	{
		id: 9,
		image:
			'https://img.youpin.mi-img.com/800_pic/d60dc30791e6bac685eb5e8a83662a01.png@base@tag=imgScale&F=webp',
		title: '多彩指尖积木',
		message: '打开幸运, 翻出乐趣',
		disc: '满1000减60',
		price: '9.99',
		num: 1,
		checked: true
	}
]);
const onClickLeft = () => history.back();
const onClickCard = index => {
	console.log('点击了第', index, '个商品');
};

const toggleEditMode = () => {
	editMode.value = !editMode.value;
};

const showDeleteMenu = index => {
	showConfirmDialog({
		message: '确定要删除该商品吗？'
	})
		.then(() => {
			deleteGoods(index);
		})
		.catch(() => {
			// 取消删除
		});
};

const deleteGoods = index => {
	goodsList.value.splice(index, 1);
};

const onSubmit = () => {
	const checkedGoods = goodsList.value.filter(item => item.checked);
	if (checkedGoods.length === 0) {
		showToast('请选择要购买的商品');
		return;
	}

	const order = {
		goods: checkedGoods,
		totalPrice: totalPrice.value,
		address: currentAddress.value
	};
	showToast('提交订单成功');
};

const currentAddress = ref({
	name: '张三',
	phone: '13800000000',
	address: '上海市浦东新区张江镇'
});

const tipText = ref('你的收货地址不支持配送，'); // 提示文本

const toggleSelectAll = () => {
	setTimeout(() => {
		const allChecked = checked.value;
		for (const item of goodsList.value) {
			item.checked = allChecked;
		}
	}, 0);
}

const totalPrice = computed(() => {
	let totalPrice = 0;
	for (const item of goodsList.value) {
		if (item.checked) {
			totalPrice += item.price * item.num * 100;
		}
	}
   return totalPrice
})

onMounted(async () => {
	await store.getGoods();
})

</script>

<style lang="stylus" scoped>
.goods-card {
  margin: 0;
  background-color: @white;
  padding-left: 1.333333rem /* 50/37.5 */;
  position: relative;
}

.checkbox {
  position: absolute;
  top: 50%;
  left: 0.266667rem /* 10/37.5 */;
  transform: translateY(-50%)
}

.placeholder {
  height: 1.6rem /* 60/37.5 */; /* 设置高度 */
}

.van-action-sheet__item {
  color: #f44; /* 修改文字颜色 */
}

.van-action-sheet__cancel {
  background-color: #fff; /* 修改背景色 */
  color: #f44;
}

.van-cell__title,
.van-cell__label {
  font-size: 0.426667rem /* 16/37.5 */;
  font-weight: bold;
}

.van-cell__value {
  font-size: 0.373333rem /* 14/37.5 */;
  color: #999;
}
.checkbox {
  position: absolute;
  top: 0.533333rem /* 20/37.5 */;
  left: 0.266667rem /* 10/37.5 */;
  z-index: 1;
}
.submit
{
   position reactive
   bottom 1.333333rem /* 50/37.5 */
}
.delete{
   height 2.666667rem /* 100/37.5 */
}
</style>
