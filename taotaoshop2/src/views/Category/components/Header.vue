<template>
	<form action="/">
		<van-search
			v-model="value"
			show-action
			placeholder="请输入搜索关键词"
			@search="onSearch"
			@cancel="onCancel" />
	</form>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
const onSearch = val => showToast(val);
const onCancel = () => showToast('取消');
</script>

<style lang="scss" scoped></style>
