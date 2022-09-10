<template>
  <div id="app">
    <Main msg="Welcome to Your ProjectChecker"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Main from './views/Main.vue';

export default defineComponent({
  name: 'FirstScreen',
  components: {
    Main,
  },
});

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
