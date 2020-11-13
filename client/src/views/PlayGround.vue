<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <v-card>
          <panel title="Song Metadata">
            <v-text-field label="Title" v-model="title"></v-text-field>
            <v-text-field label="Artist" v-model="artist"></v-text-field>
            <v-text-field label="Genre" v-model="genre"></v-text-field>
            <v-text-field label="Album" v-model="album"></v-text-field>
            <v-text-field
              label="Album Cover Image"
              v-model="albumImageUrl"
            ></v-text-field>
          </panel>
        </v-card>
      </v-col>
      <v-col sm="6" md="8">
        <v-card>
          <panel title="Tab & Lyrics">
            <v-textarea filled label="Tab" auto-grow v-model="tab"></v-textarea>
            <v-textarea
              filled
              label="Lyrics"
              v-model="lyrics"
              auto-grow
            ></v-textarea>
          </panel>
        </v-card>
      </v-col>
      <v-btn class="mr-8 ml-auto" @click="createSong" color="blue-grey" dark
        >Submit</v-btn
      >
    </v-row>
  </v-container>
  <!-- <v-container>
    <v-row>
      <v-col xs4>
        <v-card max-width="1300" class="mt-5 mx-auto">
          <v-col class="mt-5 mx-auto">
            <panel title="Song Metadata">
              <v-text-field label="Title" v-model="title"></v-text-field>
              <v-text-field label="Artist" v-model="artist"></v-text-field>
              <v-text-field label="Genre" v-model="genre"></v-text-field>
              <v-text-field label="Album" v-model="album"></v-text-field>
              <v-text-field
                label="Album Cover Image"
                v-model="albumImageUrl"
              ></v-text-field>
            </panel>
          </v-col>
          <v-col>
            <v-card max-width="400" class="mt-5 mx-auto">
              <panel title="Song Metadata">
                <v-text-field label="Lyric" v-model="lyrics"></v-text-field>
                <v-text-field label="Tab" v-model="tab"></v-text-field>
              </panel>
            </v-card>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="createSong" color="blue-grey" dark>Submit</v-btn>
            </v-card-actions>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </v-container> -->
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data() {
    return {
      songs: null,
      title: null,
      artist: null,
      genre: null,
      album: null,
      albumImageUrl: null,
      youtubeId: null,
      lyrics: null,
      tab: null
    }
  },
  async mounted() {
    // do request to backend for song list
    this.songs = (await SongsService.index()).data
  }
}
</script>
