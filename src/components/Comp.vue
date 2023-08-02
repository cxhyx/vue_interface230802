<template>
  <div ref="divEl" v-text="index" :style="{ background: item }"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps({
  item: String,
  index: Number,
});

const divEl = ref();

onMounted(() => {
  divEl.value.background = props.item;
});
</script>

<style scoped>
div {
  width: 100%;
  height: 500px;
  font-size: 4rem;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid seagreen;
}
</style>
