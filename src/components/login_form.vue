<!-- LoginForm.vue -->
<template>
  <form @submit.prevent="login">
    <h2>Login</h2>
    <label for="username">Username:</label>
    <input type="text" id="username" v-model="username" required>
    <label for="password">Password:</label>
    <input type="password" id="password" v-model="password" required>
    <button type="submit">Login</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Perform login logic here (e.g., send data to server)
      console.log('Login submitted');
    }
  }
}
</script>

<style scoped>
/* Add your CSS styles here */
form {
  max-width: 300px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 3px;
  border: 1px solid #ccc;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>