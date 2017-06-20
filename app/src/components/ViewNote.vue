<template>
<div>
  <article v-if="note">
    <h1>{{ note.title }}</h1>
    <template v-for="part in note.content">
      <figure>
        <img v-bind:src="getImageUrl(part.image)" />
      </figure>
    </template>
  </article>
</div>
</template>

<script>
export default {
  name: 'view-note',
  computed: {
    note () {
      return this.$store.state.currentNote
    }
  },
  methods: {
    getImageUrl (name) {
      return `data/${name}`
    }
  }
}
</script>

<style scoped>
div {
  width: 100%;
  min-height: 100%;
  padding: 1em 2em;
  box-sizing: border-box;
}

img {
  width: 100%;
}
</style>