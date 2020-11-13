<template>
  <panel title="Song Metadata">
    <v-row>
      <v-col class="text-center " cols="12" sm="6" md="6">
        <div class="text-h6 blue--text text--darken-4">
          {{ song.title }}
        </div>
        <div class="blue--text text--lighten-1 text-subtitle-1">
          {{ song.artist }}
        </div>
        <div class="text-body-1 grey--text text--darken-2">
          {{ song.genre }}
        </div>
        <v-btn
          text
          dark
          class="cyan"
          :to="{
            name: 'song-edit',
            params() {
              return {
                songId: song.id
              }
            }
          }"
        >
          Edit
        </v-btn>
      </v-col>
      <v-col class="text-center " sm="6" md="6">
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="200"
          max-width="400"
          :src="song.albumImageUrl"
        ></v-img>
        <div class="my-2 grey--text text--darken-2 text-body-1">
          {{ song.album }}
        </div>
      </v-col>
    </v-row>
  </panel>
</template>

<script>
export default {
  props: ['song']
}
</script>

<style></style>
