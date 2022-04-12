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
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Social from '@/components/Social.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
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
      color: #e22c78;
      margin: 8px;
      font-size: 20pt;
    }
    .pfp {
      max-height: 50vh;
      max-width: 50vh;
      width: auto;
      overflow: hidden;
      border-radius: 100%;
      margin: 8px;
    }
  }
}
</style>
