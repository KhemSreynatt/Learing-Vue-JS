<template>
    <div>
        <h1>List of Users</h1>
        <ul>
            <li v-for="(user, index) in users" :key="index">{{ user.name }} - {{ user.email }}</li>
        </ul>
        <button @click="downloadPDF">Download as PDF</button>
        <button @click="downloadCSV">Download as CSV</button>
        <button @click="downloadExcel">Download as Excel</button>
    </div>
</template>


<script>
import FileSaver from 'file-saver';
import XLSX from 'xlsx';
import { json2csv } from 'json2csv';

export default {
    data() {
        return {
            users: [
                { name: 'John Doe', email: 'john.doe@example.com' },
                { name: 'Jane Smith', email: 'jane.smith@example.com' }
                // Add more user data as needed
            ]
        };
    },
    methods: {
        downloadPDF() {
            const data = document.querySelector('ul').outerHTML;
            const blob = new Blob([data], { type: 'application/pdf;charset=utf-8' });
            FileSaver.saveAs(blob, 'users.pdf');
        },
        downloadCSV() {
            const csv = json2csv({ data: this.users });
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
            FileSaver.saveAs(blob, 'users.csv');
        },
        downloadExcel() {
            const worksheet = XLSX.utils.json_to_sheet(this.users);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');
            XLSX.writeFile(workbook, 'users.xlsx');
        }
    }
};
</script>