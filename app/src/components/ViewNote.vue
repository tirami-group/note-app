<template>
<div>
  <article v-if="note" class="container">
    <div class="meta">
      <h1>{{ note.title }}</h1>
      <span>{{ note.date }} / {{ note.author }}</span>
    </div>
    <div class="content">
      <template v-for="part in note.content">
      <div class="part">
        <hr />
        <audio v-bind:src="getUrl(part.audio)" controls loop/>
        <img v-bind:src="getUrl(part.image)" />
      </div>
    </template>
    </div>
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
    getUrl (name) {
      return `data/${name}`
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  min-height: 100%;
  padding: 1em 2em;
  box-sizing: border-box;
}

.part {
  min-height: auto;
}

.content {
  min-height: auto;
}

img {
  width: 100%;
}

audio {
  width: 100%;
  color: rgba(0, 0, 0, 0.1);
}

hr {
  display: block;
  border: 0;
  margin: 1em auto 1em;
}

hr::after {
  content: "* * *";
  color: rgba(0, 0, 0, 0.2);
  text-align: center;
  display: block;
}

h1 {
  font-size: 1.7em;
}

.meta {
  font-size: 1.2em;
  margin-bottom: 2em;
}

.meta span {
  color: rgba(0, 0, 0, 0.5);
  font-style: italic;
}
</style>