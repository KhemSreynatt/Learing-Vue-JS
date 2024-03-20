<template>
  <div style="justify-content: center;  width: 100%; background-color: #F0F8FF; ">
    <img style="width: 100%; height: 270px" src="https://www.akamai.com/site/en/images/logo/2019/sinet-logo-2.svg"
      alt="">
    <form @submit.prevent="register" style="background-color: #ffff;">
      <h2>Login</h2>
      <div class="input-container">
        <i style="padding-bottom: 10px;" class="material-icons">mail</i>
        <input style="" type="text" placeholder="Enter your emal" id="email" v-model="email" required>

      </div>
      <div class="input-container">
        <i style="padding-bottom: 10px;" class="material-icons">lock</i>
        <input style="" placeholder="Enter Passwrod" type="password" id="password" v-model="password" required>
      </div>
      <button type="submit" @click="login">Submit</button>
      <div>
        <p>Already have Forget password? <span style="color: #0066b2 ;">Forgot Password</span></p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      email: '',
    };
  },
  computed: {
    emailError() {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
      if (this.email && !re.test(this.email)) {
        return 'Please enter a valid email address.';
      }
      return '';
    }
  },
  methods: {
    login() {
      if (this.email != '' && this.password)
        this.$router.push({ name: 'home' });
    }
  }
}
</script>

<style scoped>
.input-container {
  position: relative;
  /* margin: 15px; */
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
}

.input-container i {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
}

.input-container input {
  padding-left: 45px;
  height: 40px;
  /* font-size: 16px; */
  border: 1px solid #ccc;
  border-radius: 5px;
}

form {
  width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

h2 {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  padding-bottom: 20px;
}

p {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  padding-top: 20px;
  text-align: center;
}

label {
  display: block;
  margin-bottom: 5px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 3px;
  border: 1px solid #ccc;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
}

.error {
  color: red;
}

button {
  width: 90%;
  padding: 10px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  /* margin: 20px; */
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>