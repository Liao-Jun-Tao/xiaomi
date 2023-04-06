<template>
  <div class="page">
    <div class="wrapper">
      <div @click="onClickLeft" class="goBack">
        <van-icon name="arrow-left" />
      </div>

      <div class="search">
        <van-search
          background="#f6f6f6"
          v-model="state.SearchVal"
          shape="round"
          show-action
          placeholder="请输入搜索关键词"
        >
          <template #action>
            <div @click="gotoSearchList">搜索</div>
          </template>
        </van-search>
      </div>
    </div>
<section>
    <div class="content">
      <div class="history">搜索历史</div>
      <div class="delete" @click="Delete"><van-icon name="delete-o" /></div>
    </div>

    <div v-if="state.searchArr.length">
      <ul class="record">
        <li v-for="(item, index) in state.searchArr" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
    <div v-else>暂无搜索记录</div>
  </section></div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const state = reactive({
  SearchVal: '',
  searchArr: []
});
const router = useRouter();
const onClickLeft = () => history.back();

const Delete = () => {
  //删除本地存储
  localStorage.removeItem('searchList');
  //清空数据
  state.searchArr = [];
};

const gotoSearchList = () => {
  if (!state.SearchVal) return;
  if (!localStorage.getItem('searchList')) {
    localStorage.getItem('searchList', '[]');
  } else {
    state.searchArr = JSON.parse(localStorage.getItem('searchList'));
  }
  // 增加数据
  state.searchArr.unshift(state.SearchVal);
  // 去重
  let newArr = new Set(state.searchArr);
  //给本地存储赋值
  localStorage.setItem('searchList', JSON.stringify(Array.from(newArr)));

  //   console.log(state.SearchVal);
  // router.push({
  //     path:`/SearchDetails`
  // })
};
onMounted(() => {
  // console.log(state.searchArr);
  state.searchArr = JSON.parse(localStorage.getItem('searchList')) || [];
});
</script>

<style lang="stylus" scoped>
.page
    width 100vw
    height 100vh
    background-color rgb(246,246,246)
    .wrapper
        display flex
        align-items center
        .search
            flex:1
        .goBack
            font-size .48rem
            margin 0 .133333rem
    section
        .content
            display flex
            justify-content space-between
            .history
                font-weight 600
                margin-top .373333rem
                margin-left .133333rem
            .delete 
                font-size .48rem
                margin-top .373333rem
        .record
            display flex
            flex-wrap wrap
            margin 0 10px 
        .record li
            background-color rgb(255,255,255)
            margin .133333rem .266667rem
            padding .133333rem .266667rem
</style>
