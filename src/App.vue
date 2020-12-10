<template>
  <div id="app">
    <p>This button is in Vue, mutating a <pre>window</pre> object</p>
    <button @click="addString()">Add</button>
  </div>
  <div id="reactapp"></div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "App",
  setup() {
    window["test"] = ref("test");

    const addString = () => {
      console.log(window["test"]);
      window["test"].value += "other";
    };

    return {
      length,
      addString
    };
  }
};
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

pre {
  display: inline-block;
}
</style>
