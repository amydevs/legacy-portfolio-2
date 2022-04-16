<template>
  <nav>
    <template v-for="(route, i) in routes" :key="i">
      <router-link :to="route.path">{{route.name}}</router-link>
      {{ i === routes.length - 1 ? '' : ' | ' }}
    </template>
  </nav>
  <router-view v-slot="{ Component }" id="router-render">
    <transition name="fade" mode="out-in"> 
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>

</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    routes: function() {
      return this.$router.options.routes;
    }
  }
})
</script>

<style lang="scss">
@import "@/variables.scss";

#app {
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #7f94a8;
  min-height: 100%;
  > #router-render {
    flex-grow: 1;
  }
}
html {
  background: #15202b;
  height: 100%;
}
body {
  margin: 0px;
  height: 100%;
}
a {
  color: $accent-color;
  
}
.title {
  color: $accent-color;
  font-size: 20pt;
}

nav {
  text-align: center;
  padding: 30px;
  position: static;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: $accent-color;
    }
  }
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.25s ease;
}
.fade-leave {}
.fade-leave-active {
  transition: opacity 0.25s ease;
  opacity: 0;
}

</style>
