<template>
  <div>
    <van-nav-bar title="我的订单"  left-arrow   @click-left="onClickLeft">
      <template #right>
        <van-icon name="search" size="18" />
        <van-icon name="shopping-cart-o" size="18" />
      </template>
    </van-nav-bar>
    <van-tabs v-model:active="active">
  <van-tab title="全部"><div>
  <van-icon name="info-o" />
  <div>您还没有商品订单</div></div>
  </van-tab>
  <van-tab title="待支付"><div><van-icon name="info-o" />
  <div>您还没有待付款订单</div></div>
  </van-tab>
  <van-tab title="代收款">
  <div>
  <van-icon name="info-o" />
  <div>您还没有待收货订单</div></div>
  </van-tab>
  <van-tab title="待评价"><div><van-icon name="info-o" />
  <div>您还没有带评论订单</div>
  </div>
   
  </van-tab>
</van-tabs>
  </div>
</template>

<script setup>
 const onClickLeft = () => history.back();
</script>

<style lang="scss" scoped></style>
