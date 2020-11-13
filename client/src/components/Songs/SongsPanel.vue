<template>
  <panel title="Songs">
    <v-btn
      class="blue-grey darken-1"
      slot="action"
      absolute
      right
      middle
      small
      fab
      :to="{
        name: 'song-create'
      }"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-row class="" v-for="song in songs" :key="song.id">
      <v-col class="text-center" cols="12" sm="6" md="6">
        <div class="text-h6 blue--text text--darken-4">
          {{ song.title }}
        </div>
        <div class="blue--text text--lighten-1 text-subtitle-1">
          {{ song.artist }}
        </div>
        <div class="text-body-1">
          {{ song.genre }}
        </div>
        <v-btn
          dark
          class="cyan text-center"
          :to="{
            name: 'song',
            params: {
              songId: song.id
            }
          }"
        >
          View
        </v-btn>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-img
          max-height="300"
          max-width="400"
          :src="song.albumImageUrl"
        ></v-img>
      </v-col>
    </v-row>
  </panel>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data() {
    return {
      songs: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler(value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
  }
}
</script>
