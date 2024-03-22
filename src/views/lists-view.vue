<template>
    <div style="width: 100%; background-color: white;">
        <div class="headers">
            <h3>Show List of User </h3>
        </div>
        <div class="rows">
            <div>
                <label for="itemsPerPage">Show per page:</label>
                <select style="width: 80px; color:white; background-color: var(--primary); margin-left: 10px;"
                    id="itemsPerPage" v-model="itemsPerPage">
                    <option v-for="option in perPageOptions" :key="option" :value="option">{{ option === -1 ? 'All' :
                        option
                        }}</option>
                </select>
            </div>

            <input style="height: 40px; margin-right: 100px; width: 300px;" type="text" v-model="searchQuery"
                placeholder="Search...">
        </div>

        <div style="padding-left: 20px;padding-right: 20px; ">
            <table class="table table-striped table-bordered">
                <thead>
                    <tr style="text-align: center;">
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="  justify-content: center;text-align: start; " v-for="user in paginatedItems"
                        :key="user.id">
                        <td style="vertical-align: 0;">{{ user.id }}</td>
                        <td>
                            {{ user.firstName }} {{ user.lastName }}
                        </td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.phone }}</td>
                        <td>{{ user.role }}</td>
                        <td style="text-align: center;">
                            <span
                                style="width: 50px;height: 26px; background-color: #0066b2; margin-right: 10px; color: azure;  padding-top: 2px;"
                                class="material-icons">edit</span>
                            <span
                                style="width: 50px;height: 26px; background-color: red; margin-right: 10px;  color: azure; padding-top: 2px;"
                                class="material-icons">delete</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div style="display: flex; flex-wrap: wrap; ">
                <p>Showing {{ rangeStart }} to {{ rangeEnd }} of {{ totalCount }} entries</p>

                <ul style="width: 85%;" class="pagination justify-content-end">
                    <li class="page-item disabled" @click="prevPage" :disabled="currentPage === 1">
                        <span class="page-link" style=" color: #0066b2;">{{ '<<' }} Previous </span>
                    </li>
                    <li class="page-item" v-for="pageNumber in totalPageArray" :key="pageNumber">
                        <span class="page-link" href="#" @click="goToPage(pageNumber)"
                            :class="getPageButtonClass(pageNumber)">
                            {{ pageNumber }}
                        </span>
                    </li>
                    <li class="page-item">
                        <span class="page-link" @click="nextPage" :disabled="currentPage === totalPages"
                            style="color: #0066b2;">Next >> </span>
                    </li>
                </ul>

            </div>

        </div>
    </div>

</template>

<script>


export default {

    data() {
        return {
            users: [
                { id: 1, firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', role: 'User', phone: "081000999" },
                { id: 2, firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com', role: 'Admin', phone: "081000999" },
                { id: 3, firstName: 'Gina', lastName: 'Jabowski', email: 'gina.jabowski@test.com', role: 'Admin', phone: "081000999" },
                { id: 4, firstName: 'Jessi', lastName: 'Glaser', email: 'jessi.glaser@test.com', role: 'User', phone: "081000999" },
                { id: 5, firstName: 'Jay', lastName: 'Bilzerian', email: 'jay.bilzerian@test.com', role: 'User', phone: "081000999" },
                { id: 6, firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', role: 'User', phone: "081000999" },
                { id: 7, firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com', role: 'Admin', phone: "081000999" },
                { id: 8, firstName: 'Gina', lastName: 'Jabowski', email: 'gina.jabowski@test.com', role: 'Admin', phone: "081000999" },
                { id: 9, firstName: 'Jessi', lastName: 'Glaser', email: 'jessi.glaser@test.com', role: 'User', phone: "081000999" },
                { id: 10, firstName: 'Jay', lastName: 'Bilzerian', email: 'jay.bilzerian@test.com', role: 'User', phone: "081000999" },
                { id: 11, firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', role: 'User', phone: "081000999" },
                { id: 12, firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com', role: 'Admin', phone: "081000999" },
                { id: 13, firstName: 'Gina', lastName: 'Jabowski', email: 'gina.jabowski@test.com', role: 'Admin', phone: "081000999" },
                { id: 14, firstName: 'Jessi', lastName: 'Glaser', email: 'jessi.glaser@test.com', role: 'User', phone: "081000999" },
                { id: 15, firstName: 'Jay', lastName: 'Bilzerian', email: 'jay.bilzerian@test.com', role: 'User', phone: "081000999" },
                { id: 16, firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', role: 'User', phone: "081000999" },
                { id: 17, firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com', role: 'Admin', phone: "081000999" },
                { id: 18, firstName: 'Gina', lastName: 'Jabowski', email: 'gina.jabowski@test.com', role: 'Admin', phone: "081000999" },
                { id: 19, firstName: 'Jessi', lastName: 'Glaser', email: 'jessi.glaser@test.com', role: 'User', phone: "081000999" },
                { id: 20, firstName: 'Jay', lastName: 'Bilzerian', email: 'jay.bilzerian@test.com', role: 'User', phone: "081000999" },
            ],

            currentPage: 1,
            itemsPerPage: 10,
            perPageOptions: [10, 50, 100, 200, -1],
            searchQuery: '',
        };
    },
    computed: {
        filteredList() {
            return this.users.filter(item => {
                return item.firstName.toLowerCase().includes(this.searchQuery.toLowerCase());
            });
        },
        total() {
            return this.users.length;
        },
        totalPages() {
            return Math.ceil(this.total / this.itemsPerPage);
        },
        totalCount() {
            return this.filteredList.length;
        },
        rangeStart() {
            return (this.currentPage - 1) * this.itemsPerPage + 1;

        },
        rangeEnd() {

            return Math.min(this.currentPage * (this.itemsPerPage === -1 ? this.totalCount : this.itemsPerPage), this.totalCount);

        },
        pageCount() {
            return Math.ceil(this.totalCount / this.itemsPerPage);
        },
        paginatedItems() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const allList = startIndex + (this.itemsPerPage === -1 ? this.total : this.itemsPerPage);
            const listUsers = this.filteredList.slice(startIndex, allList);
            return listUsers

            // if (this.itemsPerPage === -1) {
            //     return this.users;
            // } else {
            //     const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            //     const endIndex = startIndex + this.itemsPerPage;
            //     return this.users.slice(startIndex, endIndex);
            // }
        },
        totalPageArray() {
            return Array.from({ length: this.totalPages }, (_, index) => index + 1);
        }
    },
    methods: {
        resetPagination() {
            this.currentPage = 1;
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        goToPage(pageNumber) {
            this.currentPage = pageNumber;
        },
        getPageButtonClass(pageNumber) {
            return pageNumber === this.currentPage ? 'active' : '';
        }
    }

};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.headers {
    height: 70px;
    background-color: #ddecf5;
    text-align: center;
    padding-top: 15px;
    color: black;
    border: 0.2px solid #f0f0f0;
}

.input-container {
    position: relative;
    text-align: start;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 10px;
}

.input-container input {
    padding-left: 45px;
    height: 40px;
    /* font-size: 16px; */
    border: 1px solid #ccc;
    border-radius: 5px;
}

.rows {
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
}

h1,
td,
p {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 13px;
}

h3 {
    font-weight: bold;
}

.material-icons {
    font-size: 20px;
}

.active {
    background-color: #0066b2;
    color: #fff;
    border: 1px solid #0066b2;
}

.table-striped tbody tr:nth-of-type(odd) {
    background-color: #ddecf5;
}

.table td {
    padding: 12px;
    vertical-align: top;
    padding-bottom: 6px;

}
</style>