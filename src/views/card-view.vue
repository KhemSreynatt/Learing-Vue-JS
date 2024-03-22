<template>
    <div style="padding: 20px; width: 100%;">
        <h2 style="padding-bottom: 30px;">Add Student</h2>
        <div style="display: flex;">
            <p>ID:</p> <input type="text" placeholder="Enter your ID" v-model="id" required>
        </div>
        <div style="display: flex;">
            <p>Name:</p> <input type="text" placeholder="Enter your name" v-model="name" required>
        </div>
        <div style="display: flex;">
            <p> Age:</p> <input type="text" placeholder="Enter your age" v-model="age" required>
        </div>
        <div style="display: flex;">
            <p>Address:</p> <input type="text" placeholder="Enter your address" v-model="address" required>
        </div>
        <button style=" width: 100px; color: white;   background-color: #007bff;"
            v-on:click="addStudents">Submit</button>
        <button style=" width: 100px; margin-left: 20px; color: white;   background-color: green;"
            v-on:click="tbnUpdate" v-if="isUpdate">Update</button>

        <table style="margin-top: 30px;">
            <tr>
                <th> ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Addres</th>
                <th>QR Code</th>
                <th>Action</th>
            </tr>
            <tr v-for="(student, index) in listStudents" :key="student.id">
                <td>{{ student.id }}</td>
                <td>{{ student.name }}</td>
                <td>{{ student.age }}</td>
                <td>{{ student.address }}</td>
                <td>
                    <vue-qrcode :value="qrCodeValue" :options="{ width: 100, height: 200 }"></vue-qrcode>
                </td>
                <td> <button style=" margin-left: 20px; width: 70px;  color: white;   background-color: red;"
                        @click="btnDeleta(index)"> Delete </button>
                    <button style=" margin-left: 20px; width: 50px;  color: white;   background-color: #007bff;"
                        @click="tbnEdit(index)"> Edit </button>
                </td>
            </tr>

        </table>


    </div>
</template>

<script>

import { ref, watch, computed, reactive, toRefs } from 'vue';
import VueQrcode from 'vue-qrcode';

export default {
    components: { VueQrcode },
    name: 'template_refs',
    data() {
        return {
            fName: '',
            lName: '',
            title: '',
            listItems: ["List"],
            listStudents: [],
            name: '',
            age: null,
            address: '',
            id: null,
            isUpdate: false,
            index: null,
            // Qr code
            qrCodeValue: 'https://vuejs.org/',
        }
    },
    setup() {
        const refFirstName = ref('')
        const refLastName = ref('')
        watch([refFirstName, refLastName], (newValue, oldValue) => {
            console.log('firstName Old value', oldValue[0])
            console.log('firstName New value', newValue[0])
            console.log('lastName Old value', oldValue[1])
            console.log('lastName new value', newValue[1])
        },
            {
                immediate: true,
            }
        )
        const refFullName = computed(function () {
            return `${refFirstName.value} ${refLastName.value}`
        })


        return {
            refFirstName,
            refLastName,
            refFullName,
        }
    },

    computed: {
        fullName() {
            return `${this.fName} ${this.lName}`
        }
    },
    methods: {
        addItems() {
            this.listItems.push(this.title)
        },
        addStudents() {
            if (this.name != '' && this.age != null && this.address != '' && this.id != null)
                this.listStudents.push({ id: this.id, name: this.name, age: this.age, address: this.address, },)
        },
        btnDeleta(index) {
            this.listStudents.splice(index, 1);

        },
        tbnEdit(index) {
            this.name = this.listStudents[index].name
            this.age = this.listStudents[index].age
            this.address = this.listStudents[index].address
            this.index = index
            this.isUpdate = true
        },
        tbnUpdate() {
            this.index
            this.listStudents[this.index].name = this.name
            this.listStudents[this.index].age = this.age
            this.listStudents[this.index].address = this.address
            this.isUpdate = false
            this.name = ''
            this.age = ''
            this.address = ''
            this.id = null

        }
    }
}
</script>

<style scoped>
input {
    width: 40%;
    height: 40px;
    margin-bottom: 20px;
    padding-left: 10px;
}

p {
    width: 100px;
}

table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td,
th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 4px;
}

/* tr:nth-child(even) {
    background-color: #fff;
} */
</style>