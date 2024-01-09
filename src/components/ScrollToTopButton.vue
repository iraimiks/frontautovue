<script>
export default {
  data() {
    return {
      showButton: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollOffset = 300;
      this.showButton = window.pageYOffset > scrollOffset;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
</script>
<template>
  <div>
    <button class="scroll-to-top" @click="scrollToTop" v-show="showButton">
      Augša
    </button>
  </div>
</template>
<style>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  background-color: #6f80c0;
  color: #000073;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.scroll-to-top:hover {
  opacity: 1;
}
</style>