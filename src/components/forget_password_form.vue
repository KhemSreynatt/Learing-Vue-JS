<template>
  <div class="pages">
    <img style="width: 100%; height: 270px" src="https://www.akamai.com/site/en/images/logo/2019/sinet-logo-2.svg"
      alt="">
    <form @submit.prevent="login">
      <h2>Forgot Password</h2>

      <div class="input-container" style=" margin-top: 20px;">
        <i style="padding-bottom: 10px;" class="material-icons"
          :class="{ icon_valid: !isValid, icon: isValid }">mail</i>
        <input style="" type="text" placeholder="Enter your emal" id="email" v-model="email"
          :class="{ invalid: !isValid, valid: isValid }" required>
        <span v-if="errorMessage" class="error-message">{{ errorMessage }}</span>
      </div>
      <div class="input-container" style=" margin-top: 20px;">
        <i style="padding-bottom: 10px;" class="material-icons"
          :class="{ icon_valid: !isValid, icon: isValid }">lock</i>
        <input style="" placeholder="Enter Passwrod" type="password" id="password" v-model="password"
          :class="{ invalid: !isValid, valid: isValid }" required>
        <span v-if="errorMessage" class="error-message">Please input your password!</span>
      </div>
      <div class="input-container" style=" margin-top: 20px;">
        <i style="padding-bottom: 10px;" class="material-icons"
          :class="{ icon_valid: !isValid, icon: isValid }">lock</i>
        <input style="" placeholder="Enter Confirm Passwrod" type="password" id="password" v-model="confirm_password"
          :class="{ invalid: !isValid, valid: isValid }" required>
        <span v-if="errorMessage" class="error-message">Please input your password!</span>
      </div>
      <button type="submit" @click="login">Submit</button>


    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      email: '',
      confirm_password: '',
      isValid: true,
      errorMessage: '',
    };
  },

  methods: {
    login() {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;

      if (this.email != '' && this.password && re.test(this.email)) {
        this.$router.push({ name: 'home' });
        this.errorMessage = "";
        this.isValid = true;
      } else {
        this.errorMessage = "Please Input you email!";
        this.isValid = false;
      }

    }
  }
}
</script>

<style scoped>
.pages {
  min-height: 100vh;
  backdrop-filter: blur(100px);
  width: 100%;
  background-color: #A4DDED;
  text-align: center;
}

.input-container {
  position: relative;
  text-align: start;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
}

.icon {
  position: absolute;
  left: 10px;
  top: 65%;
  transform: translateY(-50%);
  color: #888;
}

.icon_valid {
  position: absolute;
  left: 10px;
  top: 40%;
  transform: translateY(-50%);
  color: #888;
}



.input-container input {
  padding-left: 45px;
  height: 40px;
  /* font-size: 16px; */
  /* border: 1px solid #ccc; */
  border-radius: 5px;
}

form {
  width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #ffff;
  border: 1px solid #ccc;
  border-radius: 10px;
  justify-content: center;
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

  border-radius: 3px;
  border: 1px solid #ccc;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
}

.invalid {
  border-color: red;
}

.valid {
  border: 1px solid #ccc;
}

.error-message {
  color: red;
  font-size: 0.8rem;
  margin-top: 5px;
}


button {
  width: 90%;
  padding: 10px;
  height: 40px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  /* margin: 20px; */
  background-color: #008080;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>