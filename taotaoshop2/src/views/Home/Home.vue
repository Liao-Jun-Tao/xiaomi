<template>
         <header>
            <!-- 搜索 -->
            <Header />
         </header>
			<main>
            <!-- 轮播图 -->
				<Swiper />
            <!-- 合格Icon -->
            <qualified />
            <!-- 次级导航 -->
				<SubNav />
            <!-- 活动会场 -->
            <activity />
            <!-- 热销甄选 -->
            <HotSell />
            <!-- 人气上新 -->
            <popularity />
            <!-- 商品展示 -->
				<Goods />
            <!-- 占位空白 -->
            <div class="null"></div>
         </main>
      <NavBar />
</template>

<script setup>
import Header from '@/views/Home/components/Header.vue';
import qualified from '@/views/Home/components/qualified.vue'
import popularity from '@/views/Home/components/popularity.vue'
import NavBar from '@/components/NavBar.vue';
import HotSell from '@/views/Home/components/HotSell.vue'
import activity from '@/views/Home/components/activity.vue'
import Swiper from '@/views/Home/components/Swiper.vue';
import SubNav from '@/views/Home/components/SubNav.vue';
import Goods from '@/components/Goods.vue';
</script>

<style lang="stylus" scoped>
.null
   width 100vw
   height 1.333333rem
</style>
