<template>
  <div>
    <h1>User Login</h1>
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <div v-if="responseMessage">
      <p>{{ responseMessage }}</p>
    </div>
  </div>
</template>

<script>
import { login } from '../api/index.js';

export default {
  data() {
    return {
      email: '',
      password: '',
      responseMessage: ''
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await login({
          email: this.email,
          password: this.password
        });
        this.responseMessage = `Login successful: ${response.data.message}`;
      } catch (error) {
        this.responseMessage = `Login failed: ${error.response.data.message}`;
      }
    }
  }
};
</script>
