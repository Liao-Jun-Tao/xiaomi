<template>
   <div class="product-detail">
		<van-nav-bar
			title="产品详情"
			left-arrow
			@click-left="goBack">
			<template #right>
				<van-icon class="share" name="share" @click="state.showShare = true" />
				<van-icon class="more" name="more-o" @click="showMore" />
			</template>
		</van-nav-bar>
		<van-share-sheet
			v-model:show="state.showShare"
			title="立即分享给好友"
			:options="options"
			@select="onSelect" />
      
	</div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { showToast, showDialog} from 'vant';
// 使用 useRouter 获取路由实例
const router = useRouter();
const state = reactive({
	showShare: false
});
const options = [
      [
        { name: '微信', icon: 'wechat' },
        { name: '朋友圈', icon: 'wechat-moments' },
        { name: '微博', icon: 'weibo' },
        { name: 'QQ', icon: 'qq' },
      ],
      [
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
        { name: '小程序码', icon: 'weapp-qrcode' },
      ],
    ];
    const goBack = () => history.back();
   
// 返回上一页的方法
const onSelect = (option) => {
      showToast(option.name);
      state.showShare = false;
    };
// 分享的方法

// 显示更多的方法
const showMore = () => {
	showDialog({
		title: '更多功能',
		message: '更多功能待开发'
	});
};
</script>

<style lang="scss" scoped>
.share,.more{
font-size:25px;
margin: 0 8px;
}
</style>