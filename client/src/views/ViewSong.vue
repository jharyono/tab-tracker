<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6" md="6">
        <v-card height="320">
          <song-meta-panel :song="song"></song-meta-panel>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-card height="320">
          <youtube-panel :youtubeId="song.youtubeId"></youtube-panel>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="6">
        <v-card height="320">
          <lyrics-panel :lyrics="song.lyrics"></lyrics-panel>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-card height="320">
          <tab-panel :tab="song.tab"></tab-panel>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongMetaPanel from '@/components/ViewSong/SongMetaPanel'
import YoutubePanel from '@/components/ViewSong/YoutubePanel'
import TabPanel from '@/components/ViewSong/TabPanel'
import LyricsPanel from '@/components/ViewSong/LyricsPanel'

export default {
  components: {
    SongMetaPanel,
    YoutubePanel,
    TabPanel,
    LyricsPanel
  },

  data() {
    return {
      song: {}
    }
  },
  async mounted() {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  }
}
</script>

<style></style>
