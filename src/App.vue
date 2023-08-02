<template>
  <div ref="scrollRef" class="container">
    <div v-for="(item, index) in list" :key="index">
      <Comp ref="campEl" :item="item" :index="index" />
    </div>
    <Loading :isLoading="isLoading" />
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, watch } from 'vue';

import Comp from './components/Comp.vue';
import Loading from './components/Loading.vue';
import useScroll from './hooks/useScroll';

const isLoading = ref(false);
const scrollRef = ref();

const { isReachBottom, onReachBottom } = useScroll();
onReachBottom();

watch(isReachBottom, () => {
  console.log('#########isReachBottom改变', isReachBottom);
  if (list.length >= 50) return;
  getList(10);
});

const colors = [
  '#e74c3c',
  '#8e44ad',
  '#3498db',
  '#e67e22',
  '#2ecc71',
  '#282c34',
];
// 随机选择颜色
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

let list = reactive(['rgb(233,32,38)']);
//list 该变量表示页面上 div 的渲染个数
const getList = (num) => {
  isLoading.value = true;

  setTimeout(() => {
    isLoading.value = false;
  }, 3000);

  for (let i = 0; i < num; i++) {
    const color = getRandomColor();
    list.push(color);
  }
};

onMounted(() => {
  useScroll(scrollRef);
  getList(10);
});
</script>

<style scoped></style>
