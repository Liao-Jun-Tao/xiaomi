<template>
	<div class="category">
		<header>
			<div class="search">
				<van-search
					v-model="SearchVal"
					shape="round"
					show-action
					placeholder="请输入搜索关键词">
				</van-search>
			</div>
		</header>

		<section>
			<div class="list-l" ref="left">
				<ul class="l-item">
					<li
						class="l123"
						:class="{ active: index == currentIndex }"
						v-for="(item, index) in state.leftData"
						:key="index"
						@click="gotoScroll(index)">
						{{ item.name }}
					</li>
				</ul>
			</div>
			<div class="list-r" ref="right">
				<div>
					<ul
						v-for="(list, index) in state.rightData"
						:key="index"
						class="shop-list">
						<li>
							<img
								src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/415bad02d01fa14902f3cfa2178ff447.jpg?w=734&h=220&bg=FFFFFF" />

							<van-tabs class="tabs" v-model:active="active" scrollspy sticky>
								<van-tab
									class="tab"
									v-for="item in list"
									:key="item.id"
									:title="item.name">
									<h3>{{ item.name }}</h3>
									<div v-for="items in item.data" :key="items.id">
										<img :src="items.imgUrl" />
										<div>
											<div class="name">{{ items.name }}</div>
											<div class="price">{{ items.price }}</div>
										</div>
									</div>
								</van-tab>
							</van-tabs>
						</li>
					</ul>
				</div>
			</div>
		</section>
		<footer>
			<NavBar />
		</footer>
	</div>
</template>

<script setup>
import _ from 'lodash';
import NavBar from '../../components/NavBar.vue';
import { computed, onMounted, reactive, nextTick, ref } from 'vue';
import { getCategory } from '@/service/category.js';
import BScroll from '@better-scroll/core';
import ObserveDOM from '@better-scroll/observe-dom';
BScroll.use(ObserveDOM);
const state = reactive({
	AllData: [],
	leftData: [], //左侧数据
	rightData: [], //右侧数据
	AllHeight: [],
	rightBScroll: '',
	scrollY: ''
});
const left = ref(null);
const right = ref(null);

const currentIndex = computed(() => {
	return state.AllHeight.findIndex((item, index) => {
		return state.scrollY >= item && state.scrollY < state.AllHeight[index + 1];
	});
});

onMounted(async () => {
	const data = await getCategory();
	state.AllData = data.result;
	// console.log(state.AllData);

	let leftArr = [];
	let rightArr = [];

	state.AllData.forEach(v => {
		leftArr.push({
			name: v.name,
			id: v.id
		});
		rightArr.push(v.data);
		// console.log(rightArr);
	});
	// console.log(leftArr);
	state.leftData = leftArr;
	state.rightData = rightArr;
	//   console.log(state.leftData);

	nextTick(() => {
		let leftBScroll = new BScroll(left.value, {
			scrollY: true,
			click: true,
			bounce: true,
			probeType: 3
		});
		state.rightBScroll = new BScroll(right.value, {
			scrollY: true,
			click: true,
			probeType: 3,
			bounce: true,
			observeDOM: true
		});
		let height = 0;
		state.AllHeight.push(height);
		let uls = right.value.getElementsByClassName('shop-list');
		Array.from(uls).forEach(v => {
			height += v.clientHeight;
			state.AllHeight.push(height);
		});

		state.rightBScroll.on(
			'scroll',
			_.throttle(pos => {
				state.scrollY = Math.abs(pos.y);
			}, 1000)
		);
	});
});
const gotoScroll = index => {
	// console.log(index);
	state.rightBScroll.scrollTo(0, -state.AllHeight[index], 100);
};
</script>

<style lang="stylus" scoped>

section{
    display: flex;
    overflow: hidden;
    flex: 1;
}
    .list-l
        width: 90px;
        height: 100vh;
        overflow: hidden;
        background-color: #ffffff;
        .l-item
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            flex-wrap: wrap;
            .l123
                width: 100%;
                padding: 10px 0;
                margin: 5px 0;
                font-size: 14px;
                text-align: center;
                color: #666666;
                &.active
                    color: #343434
                    border-left: 6px solid #b54f4a






.list-r {
  width: 270px;
  height: 100vh;
  overflow: hidden;
  ul {
    li {
      img {
        width: 270px;
        height: auto;
      }
      .tabs {
        .tab {
          h3 {
          }
          div {
            width: 270px;
            height: 80px;
            background-color: #f8f8f8;
            margin-bottom: 10px;
            border-radius: 4px;
            display: flex;
            img {
              width: 1.866667rem;
            }
            div {
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              .name {
                font-size: 0.373333rem;
              }
              .price {
                font-size: 0.426667rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
