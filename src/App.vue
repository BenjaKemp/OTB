<template>
  <div id="app">
    <Landing />
  </div>
</template>

<script>
import Landing from "./components/Landing.vue";

export default {
  name: "App",
  components: { Landing },
};
</script>

<style>
body {
  background-image: url("./assets/background.png");
  margin: 0;
  padding: 0;
}
</style>
