<template>
    <div class="card">
        <h1>API Data</h1>
        <div style="justify-content: center; text-align: start;">
            <li v-for="item in data" :key="item.id">
                <div>Email: {{ item.name }}</div>
                <div>Name: {{ item.email }}</div>
            </li>

        </div>
    </div>

</template>

<script>
import { fetchData } from '@/utils/get_api';
export default {

    data() {
        return {
            data: []
        };
    },
    async mounted() {
        // this.fetchData();
        this.data = await fetchData('https://jsonplaceholder.typicode.com/posts/1/comments');
    },
    methods: {
        async fetchData() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
                const jsonData = await response.json();
                this.data = jsonData;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    }
}
</script>

<style>
.card {
    width: 100%;
    height: auto;
    text-align: center;
    padding-top: 20px;

}
</style>