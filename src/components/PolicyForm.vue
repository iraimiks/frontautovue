<template>
    <div v-if="isVisible" class="box policy-to-top">
      <button class="delete" aria-label="close" @click="closeModule"></button>
      <router-link class="p-3" to="/policy">Konfidencialitātes politika</router-link>
  </div>
    
  </template>
  
  <script>
  export default {
    name: 'CloseableModule',
    data() {
      return {
        isVisible: true,
      };
    },
    methods: {
      closeModule() {
        this.isVisible = false;
      },
    },
  };
  </script>
  <style>
.policy-to-top {
  position: fixed;
  bottom: 20px;
  margin: 5rem;
}
</style>