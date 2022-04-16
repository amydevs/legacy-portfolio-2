<template>
  <div class="home">
    <div class="topper">
      <img class= "pfp" alt="Vue logo" src="https://github.com/jy1263.png">
    
      <div class="title">Hi, I'm Amy. A student based in Sydney who likes to mess around with music stuff. <br> Here's a lil page for my accounts.</div>
    </div>
    <Social></Social>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Social from '@/components/Social.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Social
  },
});
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100%;
  .topper {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .title {
      margin: 8px;
      text-align: center;
    }
    .pfp {
      max-height: 50vh;
      max-width: 100%;
      width: auto;
      overflow: hidden;
      flex-shrink: 1;
      border-radius: 100%;
      margin: 8px;
    }
  }
}
</style>
