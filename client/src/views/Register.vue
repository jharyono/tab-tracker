<template>
  <v-row>
    <v-col>
      <v-card max-width="500" class="mt-5 mx-auto">
        <panel title="Register">
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
            <v-btn @click="register" color="blue-grey" dark>Submit</v-btn>
          </v-card-actions>
        </panel>
      </v-card>
    </v-col>
  </v-row>
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
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$store.dispatch('setSnackbar', {
          showing: true,
          color: 'success',
          text:
            'You have successfully registered. You may login to application now.'
        })
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error
        this.$store.dispatch('setSnackbar', {
          showing: true,
          color: 'error',
          text: this.error
        })
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
