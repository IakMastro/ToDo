<template>
  <div>
    <h1>To Do Webapp</h1>
    <to-do></to-do>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ToDo from "./components/ToDo.vue";

@Options({
  components: {
    ToDo,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
