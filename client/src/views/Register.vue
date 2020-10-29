<template>
  <div class="register">
    <h1>Register</h1>
    <input type="email" v-model="email" name="email" placeholder="email" />
    <br />
    <input
      type="password"
      v-model="password"
      name="password"
      placeholder="password"
    />
    <br />
    <button @click="register">Register</button>
  </div>
</template>

<script>
import Authentication from '@/services/Authentication'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register() {
      await Authentication.register({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>
