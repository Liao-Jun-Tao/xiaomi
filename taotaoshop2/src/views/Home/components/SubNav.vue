<template>
  <div ref="el" class="navBar_container" @scroll="handleScroll">
    <div class="navBar_content">
      <div v-for="item in subNav" :key="item.id" class="navBar_item">
        <img :src="item.imgSrc" class="img_item">
      </div>
    </div>
  </div>
  <!--    自定义滚动条-->
  <div class="scroll-wrapper" :style="{width: wrapperScrollWidth + 'px'}">
    <div :style="offset" class="scroll-content" >
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted, useTemplateRef} from 'vue';
import {useScroll} from '@vueuse/core'
import {useHomeStore} from '@/store/home.js';

const el = useTemplateRef('el');

const homeStore = useHomeStore();
const subNav = computed(() => homeStore.subnav);

const {x} = useScroll(el, {behavior: 'smooth'})

const wrapperScrollWidth = 750 / 10
const contentScrollWidth = 750 / 10 * (1 / 3)

const offset = computed(() => {
  return {
    left: `${x.value / 375  * (wrapperScrollWidth - contentScrollWidth)}px`,
    width: contentScrollWidth + "px"
  }
})

const handleScroll = () => {
  // console.log(x.value)
  console.log(offset.value.left)
}

onMounted(async () => {
  await homeStore.getSubnav();
});
</script>

<style lang="stylus" scoped>

//隐藏滚动条
::-webkit-scrollbar {
  display: none;
}

.navBar_container {
  width: 375px;
  overflow: auto;
}

.navBar_content {
  width: 750px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(10, 1fr);
  grid-auto-flow: column;
}

.navBar_item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.img_item {
  width: 50px; /* 图像宽度 */
  height: 50px; /* 图像高度 */
}

.scroll-wrapper {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;

  height: 3px;
  background-color: #f8f8f8;
  border-radius: 5px;
}

.scroll-content {
  height: 3px;
  position: absolute;
  border-radius: 5px;
  background-color: #888888;
}


</style>
