<template>
  <v-app app>
    <v-main class="main">
      <page-header />
      <!-- <v-container fluid> -->
      <router-view />
      <!-- </v-container> -->
      <v-snackbar
        v-model="snackbar.showing"
        :timeout="3000"
        :value="true"
        :color="snackbar.color"
        centered
        elevation="24"
      >
        {{ snackbar.text }}

        <template v-slot:action="{ attrs }">
          <v-btn dark text v-bind="attrs" @click="snackbar.showing = false">
            Close
          </v-btn>
        </template>

        <!-- <v-btn text @click="snackbar.showing = false">
          close
        </v-btn> -->
      </v-snackbar>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import PageHeader from './components/Header'

export default {
  name: 'App',
  components: {
    PageHeader
  },
  computed: {
    ...mapState(['snackbar'])
  },
  data: () => ({
    //
  })
}
</script>

<style lang="scss">
.main {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('./assets/img/hero1.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  margin: 0;
  padding: 0;
}
</style>
