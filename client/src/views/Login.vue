<template>
  <v-app>
    <v-card max-width="500px" width="400" class="mt-5 mx-auto">
      <v-toolbar color="blue-grey darken-2" flat dense dark>
        <v-card-title>
          <h3>Login</h3>
        </v-card-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Username"
            type="email"
            v-model="email"
            name="email"
            prepend-icon="mdi-account-circle"
          />
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            v-model="password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="login" color="success">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
      showPassword: false
    }
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.err {
  color: red;
}
</style>
