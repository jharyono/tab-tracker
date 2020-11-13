<template>
  <panel title="Youtube Video">
    <div style="text-align: center">
      <youtube :video-id="youtubeId" :player-width="500" :player-height="220" />
      {{ youtubeId }}
    </div>
  </panel>
</template>

<script>
export default {
  props: ['youtubeId']
}
</script>

<style lang="scss" scoped>
// .yt-center {
//   text-align: center;
// }
</style>
