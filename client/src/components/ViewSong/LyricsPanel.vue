<template>
  <panel title="Song Lyrics">
    <v-textarea
      style="font-family: monospace;"
      readonly
      v-model="lyrics"
      full-width
      rows="8"
    ></v-textarea>
  </panel>
</template>

<script>
export default {
  props: ['lyrics']
}
</script>

<style></style>
