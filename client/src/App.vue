<template>
  <v-app>
    <page-header />
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import PageHeader from './components/Header'

export default {
  name: 'App',
  components: {
    PageHeader
  },

  data: () => ({
    //
  })
}
</script>
