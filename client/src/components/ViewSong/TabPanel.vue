<template>
  <panel title="Song Guitar Tab">
    <v-textarea
      style="font-family: monospace;"
      readonly
      v-model="tab"
      full-width
      rows="8"
    ></v-textarea>
  </panel>
</template>

<script>
export default {
  props: ['tab']
}
</script>

<style lang="scss" scoped></style>
