<template>
  <aside>
    <div>
      <a v-for="note in notes"
         :class="{ active: activeNote === note }"
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
      notes: [
        {title: 'Note 1', content: 'Hehehehehehehh'},
        {title: 'Note 2', content: 'Hahahahahhahah'}
      ]
    }
  },
  computed: {
      activeNote: function () {
        return this.notes[0]
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
</style>