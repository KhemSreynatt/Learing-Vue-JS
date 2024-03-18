<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in paginatedItems" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                </tr>
            </tbody>
        </table>

        <!-- Pagination controls -->
        <div>
            <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
            <span v-for="pageNumber in totalPageArray" :key="pageNumber">
                <button @click="goToPage(pageNumber)" :class="getPageButtonClass(pageNumber)">{{ pageNumber }}</button>
            </span>
            <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
        </div>

        <!-- Items per page selector -->
        <div>
            <label for="itemsPerPage">Items per page:</label>
            <select id="itemsPerPage" v-model="itemsPerPage">
                <option v-for="option in perPageOptions" :key="option" :value="option">{{ option === -1 ? 'All' : option
                    }}</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [{
                id: 1, name: 'vue', price: 100
            }
                ,
            {
                id: 2, name: 'test', price: 100
            }
                ,
            {
                id: 3, name: 'vue', price: 100
            }
                ,
            {
                id: 4, name: 'test', price: 100
            }
                ,
            ],        // Your array of items
            currentPage: 1,        // Current page
            itemsPerPage: 10,      // Items per page
            perPageOptions: [2, 5, 10, -1]  // Options for items per page, -1 means show all items
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.items.length / this.itemsPerPage);
        },
        paginatedItems() {
            if (this.itemsPerPage === -1) {
                return this.items; // Show all items if per page option is -1
            } else {
                const startIndex = (this.currentPage - 1) * this.itemsPerPage;
                const endIndex = startIndex + this.itemsPerPage;
                return this.items.slice(startIndex, endIndex);
            }
        },
        totalPageArray() {
            return Array.from({ length: this.totalPages }, (_, index) => index + 1);
        }
    },
    methods: {
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
.active {
    background-color: #007bff;
    /* Blue background color for active page number */
    color: #fff;
    /* White text color for active page number */
    border: 1px solid #007bff;
    /* Blue border for active page number */
}
</style>