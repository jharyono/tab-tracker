<template>
  <v-toolbar color="blue-grey darken-3" flat dark>
    <v-toolbar-title class="mr-4"
      ><v-btn text to="/"><span>Tab</span><span>Tracker</span></v-btn>
    </v-toolbar-title>
    <v-toolbar-items class="ml-15">
      <v-btn to="/songs" text dark>Browse</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" to="/login" text dark
        >Login</v-btn
      >
      <v-btn v-if="!$store.state.isUserLoggedIn" to="/register" text dark
        >Sign Up</v-btn
      >
      <v-btn v-if="$store.state.isUserLoggedIn" @click="logout" text dark
        >Log Out</v-btn
      >
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$store.dispatch('setSnackbar', {
        showing: true,
        color: 'success',
        text: 'You have logout from application.'
      })
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<style></style>
