// useScroll.js
import { ref } from 'vue';

function debounce(func, delay) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

export default function useScroll() {
  const isReachBottom = ref(false);

  const onReachBottom = () => {
    window.addEventListener('scroll', debounce(onBottom, 200));
  };
  // 触底相应函数
  const onBottom = () => {
    // 获取可视高度
    let clientHeight = document.documentElement.clientHeight;
    // 获取滚动高度
    let scrollTop = document.documentElement.scrollTop;
    // 滚动条高度
    let scrollHeight = document.documentElement.scrollHeight;
    if (clientHeight + scrollTop > scrollHeight / 2) {
      isReachBottom.value = !isReachBottom.value;
    }
  };
  return { isReachBottom, onReachBottom };
}
