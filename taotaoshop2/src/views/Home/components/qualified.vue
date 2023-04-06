<template>
	<div class="icon">
		<div class="icon-wrapper">
			<div class="icon-list">
				<span class="icon-gou iconfont"></span>
				<p>官方商城</p>
			</div>
			<div class="icon-list">
				<span class="icon-gou iconfont"></span>
				<p>售后无忧</p>
			</div>
			<div class="icon-list">
				<span class="icon-gou iconfont"></span>
				<p>资质证照</p>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style lang="stylus" scoped>
@import '../../../common/mixin.styl'
.icon-wrapper {
   fj() color #888888
}
.icon-list {
   padding 0 0.8rem
   fj()
   align-items center;
}
</style>
