<!-- RegistrationForm.vue -->
<template>
    <div style="justify-content: center;  width: 100%; background-color: #F0F8FF; ">
        <img style="width: 100%; height: 270px" src="https://www.akamai.com/site/en/images/logo/2019/sinet-logo-2.svg"
            alt="">
        <form @submit.prevent="register" style="background-color: #ffff;">
            <h2>Register</h2>
            <div class="input-container">
                <i style="padding-bottom: 10px;" class="material-icons">person</i>
                <input style="" type="text" placeholder="Enter your username" id="username" v-model="username" required>
            </div>
            <div class="input-container">
                <i style="padding-bottom: 10px;" class="material-icons">mail</i>
                <input style="" type="text" placeholder="Enter your emal" id="email" v-model="email" required>
            </div>
            <div class="input-container">
                <i style="padding-bottom: 10px;" class="material-icons">lock</i>
                <input style="" placeholder="Enter Passwrod" type="password" id="password" v-model="password" required>
            </div>
            <div class="input-container">
                <i style="padding-bottom: 10px;" class="material-icons">lock</i>
                <input style="" placeholder="Enter Comfirm Passwrod" type="password" id="confirm-password"
                    v-model="password" required>
            </div>
            <button type="submit">Register</button>
            <div>
                <p>Already have an account? <span style="color: #0066b2 ;">Login now</span></p>

            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            email: '',
            password: ''
        };
    },
    methods: {
        register() {
            // Perform registration logic here (e.g., send data to server)
            console.log('Registration submitted');
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