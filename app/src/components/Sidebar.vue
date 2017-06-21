<template>
  <aside>
    <div class="search">
      <input type="text" v-model="searchStr" placeholder="Search" />
    </div>
    <div class="list">
      <div  :class="{ active: currentNote === note }" class="note"
            v-for="note in notes" @click="click(note)">
      <span class="note-title">{{ note.title }}</span>
      <span class="meta">
        {{ note.date }} / {{ note.author }}
      </span>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'sidebar',
  data() {
    return {
      searchStr: '',
    }
  },
  computed: {
    notes() {
      return this.$store.state.notes.filter(x => x.title
                                                  .toLowerCase()
                                                  .includes(this.searchStr.toLowerCase()))
    },
    currentNote() {
      return this.$store.state.currentNote
    }
  },
  methods: {
    click(note) {
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
  margin: 0;
}

.note {
  border-bottom: 1px solid #dedede;
  padding: 1em;
}

.note:first-child {
  border-top: 1px solid #dedede;
}

.note:hover {
  cursor: pointer;
}

.note-title, .meta {
  display: block;
  margin-bottom: 0.5em;
}

.note-title {
  font-size: 1.2em;
}

.meta {
  font-size: 1em;
  color: rgba(0, 0, 0, 0.7);
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
  margin: 1em;
}

.search input {
  width: 80%;
  height: 2em;
  border: 1px solid #aeaeae;
  border-radius: 5px;
  color: #aaa;
  background-position: 0.5em 0.5em;
  background-image: url('./assets/search.svg');
  background-repeat: no-repeat;
  background-size: 1.2em;
  text-align: center
}

.search input:focus {
  outline: none;
}
</style>