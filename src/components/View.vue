<template>
<article>
<textarea :value="activeNote"></textarea>
</article>
</template>

<script>
export default {
  name: 'view-note',
  data () {
    return {
      activeNote: "Hehe"
    }
  }
}
</script>

<style scoped>
article {
  width: 100%;
}

textarea {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  border: none;
  resize: none;
}
</style>