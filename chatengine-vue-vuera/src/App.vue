<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <chat-engine
      projectID="5962c7ff-e3d3-4c68-99be-26d8302ad226"
      userName="oliver"
      userSecret="pass1234"
    />
  </div>
</template>

<script>
import { ChatEngine } from 'react-chat-engine'

export default {
  name: 'App',
  components: {
    'chat-engine': ChatEngine,
  }
}
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
