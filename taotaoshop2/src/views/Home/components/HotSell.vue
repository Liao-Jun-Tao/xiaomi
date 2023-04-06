<template>
	<div class="hot-sell">
		<div class="hot-title">
			<div class="hot-choose">热销甄选</div>
			<div class="hot-content">
				<p class="more">更多手机推荐</p>
				<van-icon name="arrow" class="arrow" />
			</div>
		</div>
		<div class="hot-goods">
			<div class="big-content">
				<van-swipe class="big-swipe" :autoplay="3000" indicator-color="#DDDDDD">
					<van-swipe-item
						class="big-swiperItem"
						v-for="item in hotsell"
						:key="item.id">
						<div class="big-box">
							<div class="big-title">{{ item.title }}</div>
							<div class="big-intor">{{ item.introduce }}</div>
							<div class="big-mes">{{ item.message }}</div>
							<img class="big-photo" :src="item.image" />
						</div>
					</van-swipe-item>
				</van-swipe>
			</div>

			<div class="small-content">
				<template v-for="hotsell in hotsell">
					<div class="small-goods" v-for="item in hotsell.other">
						<div class="small-box">
							<div class="small-title">{{ item.title }}</div>
							<div class="small-intro">{{ item.introduce }}</div>
							<div class="small-mes">{{ item.message }}</div>
						</div>
						<div class="small-box2">
							<img class="small-photo" :src="item.image" />
						</div>
					</div>
				</template>
			</div>
		</div>

		<div class="hot-goods-box"></div>
	</div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useHomeStore } from "@/store/home.js";
const homeStore = useHomeStore(); // 调用中央仓库存储的数据
const hotsell = computed(() => homeStore.hotsell); // 只读操作   读取store里 hotsell[]

onMounted(async () => {
  // 周期函数

  await homeStore.getHotSell();
});
</script>

<style lang="stylus" scoped>
@import '../../../common/mixin.styl'
.hot-sell {
        .hot-title {
            padding-bottom: 0.266667rem;
            fj(space-between);

            .hot-choose {
                font-size: 0.48rem;
                font-weight: 700;
                margin: 0 0.133333rem;
                color: #313131;
            }

            .hot-content {
                fj();
                margin: 0 0.4rem;
                color: #6f6f6f;
                align-items: center;

                .more {
                    font-size: 0.32rem;
                    margin: 0 0.133333rem;
                }
            }
        }
    }

    .hot-goods {
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
        width: 100%;

        .big-content {
            width: 48%;

            .big-swipe {
                // margin 0 .133333rem
                border-radius: 0.106667rem;
                background-color: #f8f8f8;
                width: 100%;

                .big-swiperItem {
                    .big-box {
                        width: 100%;

                        .big-title {
                            color: #1a1a1a;
                            font-weight: 500;
                            font-size: 0.48rem;
                            margin-left: 0.266667rem;
                        }

                        .big-intor {
                            color: #181818;
                            font-size: 0.32rem;
                            // font-family "正楷"
                            font-weight: 300;
                            margin-left: 0.266667rem;
                        }

                        .big-photo {
                            wh(3.6rem, auto);
                        }

                        .big-mes {
                            color: #1a1a1a;
                            font-size: 0.32rem;
                            font-weight: 600;
                            margin-left: 0.266667rem;
                        }
                    }
                }
            }
        }

        .small-content {
            fj();
            flex-direction: column;

            .small-goods {
                width: 4.8rem;
                display: flex;
                margin-bottom: 0.133333rem;
                // margin-bottom .133333rem
                border-radius: 0.106667rem;
                background-color: #f8f8f8;

                .small-box {
                    fj();
                    flex-direction: column;

                    .small-title {
                        // padding-top .266667rem
                        color #1a1a1a
                        font-size: 14px;
                        font-weight: 500;
                    }

                    .small-intro {
                        font-size: 0.266667rem;
                        color: #6a6a6a;
                        font-weight 300
                    }

                    .small-mes {
                        font-size: 12px;
                        // padding-bottom: 0.533333rem;
                        font-weight: 700;
                        color: #1a1a1a
                        font-weight 600
                    }
                }

                .small-box2 {
                    margin: 0 auto;

                    .small-photo {
                        wh(1.6rem, auto);
                    }
                }
            }
        }
    }
</style>
