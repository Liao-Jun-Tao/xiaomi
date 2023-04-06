<template>
	<div>
		<div class="search" :class="{ active: state.headerScroll }">  <!-- 根据state.headerScroll的值，动态绑定active类 -->
			<div class="logo">
				<img src="https://s1.ax1x.com/2023/03/14/pplqFLn.png" />  <!-- 图片logo -->
			</div>
			<div class="search-box" @click="gotoSearch">  
         <!-- 点击跳转到搜索页面 -->
				<div class="search-icon"><van-icon name="search" /></div>  <!-- 搜索图标 -->
				<div class="input">
					<input type="text" placeholder="小米13" disabled />  <!-- 输入框，disabled表示不可用 -->
				</div>
				<div class="search-icon"><van-icon name="scan" /></div>  <!-- 扫一扫图标 -->
			</div>
			<div class="other" other-x>  
         <!-- other-x类，在active时修改字体颜色 -->
				<div><van-icon name="qr" /></div>  <!-- 二维码图标 -->
				<div><van-icon name="chat-o" /></div>  <!-- 聊天图标 -->
			</div>
		</div>
	</div>
</template>

<script setup>
	import _ from 'lodash';
	import { useRouter } from 'vue-router';
	import { reactive, nextTick } from 'vue ';

	const state = reactive({  // 创建响应式对象
		headerScroll: false  // 初始化headerScroll为false
	});

	nextTick(() => {  // 下一帧执行
		const handleScroll = () => {  // 监听滚动条事件
			let scrollTop =
				window.pageYOffset ||
				document.documentElement.scrollTop ||
				document.body.scrollTop;
			if (scrollTop > 40) {  // 滚动超过40px
				if (!state.headerScroll) {  // headerScroll为false时
					state.headerScroll = true;  // 修改为true
				}
			}
			if (scrollTop < 40) {  // 滚动小于40px
				if (state.headerScroll) {  // headerScroll为true时
					state.headerScroll = false;  // 修改为false
				}
			}
		};

		window.addEventListener('scroll', _.throttle(handleScroll, 100));  // 监听滚动事件，使用_.throttle节流函数，100ms内只执行一次handleScroll函数
	});
	const router = useRouter();
	const gotoSearch = () => {  // 跳转到搜索页面
		router.push({
			path: `/search`
		});
	};
</script>

<style lang="stylus" scoped>
    @import '../../../common/mixin.styl'

.search
      fj()
      align-items center
      width 100vw
      height 30px
      position fixed
      z-index 9999
      opacity 0.9
      top .133333rem
      transition background-color .5s
      &.active
            height 1.066667rem
            background-color #fff
            opacity 1
            top 0
            .other
                  color #000
            .search-box
                  flex:1
                  margin-left .266667rem
            .logo
                  transition width .5s
                  width  0
            .logo img
                  width 0
      .logo
            width 50px
            height 30px
      .logo img
            width .64rem
            position absolute
            left 50%
            top 50%
            translate -50% -50%
      .search-box
            fj(space-around)
            align-items center
            // opacity 0.8
            background-color #ddd
            height 30px
            width 60%
            border-radius 30px
            opacity 0.5
            .search-icon
                  font-size .48rem
            .input input
                  background-color #ddd
                  width 100%
                  border none
                  color #000
      .other
            display: flex;
            align-items: center;
            font-size: 24px;
            width: 70px;
            color: #fffff8;
            justify-content: space-around;
            &.other-x
                  color #000
	
</style>
