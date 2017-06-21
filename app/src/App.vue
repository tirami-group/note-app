<template>
  <div id="app">
    <sidebar class="side"></sidebar>
    <view-note class="content"></view-note>
  </div>  
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import ViewNote from './components/ViewNote.vue'

export default {
  name: 'app',
  data () {
    return {
      title: 'Tirami Note'
    }
  },
  components: {
    Sidebar,
    ViewNote
  }
}
</script>

<style scoped>
div {
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
}
 
.side {
  height: 100vh;
  flex-basis: 20%;
  overflow: auto;
}

.content {
  min-height: 100vh;
  flex-basis: 80%;
  overflow: auto;
}
</style>

<style>
html, body, #app {
  height: 100%;
}

html, body {
  margin: 0;
  border: none;
}

html {
  font-family: 'Lora', serif;
}
</style>