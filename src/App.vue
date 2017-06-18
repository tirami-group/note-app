<template>
  <div id="app">
    <sidebar class="side"></sidebar>
    <view-note class="content"></view-note>
  </div>  
</template>

<script>
import Sidebar from './components/sidebar.vue'
import ViewNote from './components/view-note.vue'

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
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
}
 
.side {
  min-height: 100%;
  flex-basis: 30%;
}

.content {
  min-height: 100%;
  flex-basis: 70%;
}
</style>