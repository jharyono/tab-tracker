<template>
  <v-row>
    <v-col cols="12" sm="8" md="8" offset-sm="2" offset-md="2">
      <v-card>
        <songs-search-panel />
      </v-card>
      <v-card class="mt-2">
        <songs-panel />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import SongsPanel from '@/components/Songs/SongsPanel.vue'
import SongsSearchPanel from '@/components/Songs/SongsSearchPanel.vue'

export default {
  components: {
    SongsSearchPanel,
    SongsPanel
  }
}
</script>
