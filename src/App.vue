<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <transition name="fade" mode="out-in"> 
    <router-view/>
  </transition>
</template>

<style lang="scss">
@import "@/variables.scss";

#app {
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #7f94a8;
  height: 100%;
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
