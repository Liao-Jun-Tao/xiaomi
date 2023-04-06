 <template>
   <van-action-bar>
  <van-action-bar-icon icon="chat-o" text="客服" color="#ee0a24" />
  <van-action-bar-icon icon="cart-o" text="购物车" @click="gotocart"/>
  <van-action-bar-icon icon="star" text="已收藏" color="#ff5000" />
  <van-action-bar-button type="warning" text="加入购物车" @click="showPopup" />
  <van-action-bar-button type="danger" text="立即购买" />
</van-action-bar>

</template>

<script setup>
import { ref, computed } from 'vue';
import { showToast } from 'vant';
import {useRouter} from 'vue-router'
const router = useRouter()
const show = ref(false)

const showPopup = () => {
showToast('添加成功');
}
const gotocart=()=>{
router.push({
   path:`/cart`
})
}
</script>

<style lang="scss" scoped>
.product-detail {
	height: 100%;
	display: flex;
	flex-direction: column;
}

.van-nav-bar__title {
	font-size: 16px;
	font-weight: bold;
}

.van-nav-bar__left,
.van-nav-bar__right {
	font-size: 14px;
}

.van-icon {
	font-size: 18px;
	margin-left: 10px;
}
</style>