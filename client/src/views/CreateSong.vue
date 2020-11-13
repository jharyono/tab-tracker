<template>
  <v-row>
    <v-col cols="12" sm="6" md="4">
      <v-card>
        <panel title="Song Metadata">
          <v-text-field
            label="Title"
            :rules="[required]"
            v-model="song.title"
          ></v-text-field>
          <v-text-field
            label="Artist"
            :rules="[required]"
            v-model="song.artist"
          ></v-text-field>
          <v-text-field
            label="Genre"
            :rules="[required]"
            v-model="song.genre"
          ></v-text-field>
          <v-text-field
            label="Album"
            :rules="[required]"
            v-model="song.album"
          ></v-text-field>
          <v-text-field
            label="Album Cover Image"
            :rules="[required]"
            v-model="song.albumImageUrl"
          ></v-text-field>
          <v-text-field
            label="Youtube Id"
            :rules="[required]"
            v-model="song.youtubeId"
          ></v-text-field>
        </panel>
      </v-card>
    </v-col>
    <v-col sm="6" md="8" class="text-right">
      <v-card>
        <panel title="Tab & Lyrics">
          <v-textarea
            style="font-family: monospace"
            filled
            label="Tab"
            :rules="[required]"
            v-model="song.tab"
          ></v-textarea>
          <v-textarea
            style="font-family: monospace"
            filled
            label="Lyrics"
            :rules="[required]"
            v-model="song.lyrics"
          ></v-textarea>
        </panel>
      </v-card>
      <div class="red--text" v-if="error">{{ error }}</div>
      <v-btn class="mt-8" @click="createSong" color="blue-grey" dark
        >Submit</v-btn
      >
    </v-col>
  </v-row>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data() {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: value => !!value || 'Required.'
    }
  },
  methods: {
    async createSong() {
      this.error = null
      const areAllFieldFilledIn = Object.keys(this.song).every(
        key => !!this.song[key]
      )
      if (!areAllFieldFilledIn) {
        this.$store.dispatch('setSnackbar', {
          showing: true,
          color: 'red',
          text: 'Please fill in all required fields.'
        })
        return
      }
      try {
        await SongsService.post(this.song)
        this.$store.dispatch('setSnackbar', {
          showing: true,
          color: 'success',
          text: 'You have successfully create a song metadata.'
        })
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted() {
    // do request to backend for song list
    this.songs = (await SongsService.index()).data
  }
}
</script>
