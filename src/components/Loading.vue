<template>
  <div class="loading-mask" v-if="isLoading">
    <div class="spinner">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isLoading: Boolean,
});
</script>

<style scoped>
/* loading */
.loading-mask {
  height: 200px;
  background-color: rgba(93, 24, 221, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease-in-out;
  opacity: 1;
}

.spinner {
  display: flex;
  gap: 10px;
}

.spinner > div {
  width: 1.2rem;
  height: 1.2rem;
  background-color: white;
  border-radius: 100%;

  animation: bounceDelay 1s ease-in-out infinite both;
}

.spinner .bounce2 {
  animation-delay: 0.16s;
}
.spinner .bounce3 {
  animation-delay: 0.3s;
}

@keyframes bounceDelay {
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
</style>
