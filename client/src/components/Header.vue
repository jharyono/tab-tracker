<template>
  <v-toolbar color="blue-grey darken-3" flat dark>
    <v-toolbar-title class="mr-4"
      ><v-btn text to="/">Tab Tracker</v-btn>
    </v-toolbar-title>
    <!-- <v-toolbar-items>
      <v-btn text>Browse</v-btn>
    </v-toolbar-items> -->
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" to="/login" text dark
        >Login</v-btn
      >
      <v-btn v-if="!$store.state.isUserLoggedIn" to="/register" text dark
        >Sign Up</v-btn
      >
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {}
</script>

<style></style>
