<template>
  <aside>
    <div class="search">
      <input type="text" v-model="searchStr" placeholder="Search" />
    </div>
    <div class="list">
      <a v-for="note in notes"
         @click="click(note)"
         :class="{ active: currentNote === note }"
         href="#">
         <span class="note-title">{{ note.title }}</span>
      </a>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      searchStr: '',
    }
  },
  computed: {
    notes () {
      return this.$store.state.notes
    },
    currentNote () {
      return this.$store.state.currentNote
    }
  },
  methods: {
    click (note) {
      this.$store.commit('setActive', note)
    }
  }
}
</script>

<style scoped>
a {
  display: block;
  text-decoration: none;
  text-align: left;
  color: inherit;
  border-bottom: 1px solid #dedede;
  padding: 1em;
  margin: 0;
}

.active {
  color: #eeeeee;
  background-color: #31aa75;
}

aside {
  padding: 0;
  background-color: #eeeeee;
}

.search {
  text-align: center;
  margin: 2em;
}

.search input {
  width: 75%;
  height: 2em;
}
</style>