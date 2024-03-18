<template>
    <div>
        <!-- Display your paginated items here -->
        <ul>
            <li v-for="item in paginatedItems" :key="item.id">{{ item.name }}</li>
        </ul>
        <!-- Pagination -->
        <Paginate v-if="pageCount > 100" :page-count="pageCount" :click-handler="getPage" :prev-text="'Previous'"
            :next-text="'Next'" :container-class="'pagination'">
        </Paginate>
        <div class="alert-box">
            <strong>This is an Error for Demo Purposes</strong>
            <slot />
        </div>
        <!-- <vue-paginate-al v-if="pageCount > 100" :totalPage="22" :myData="mydata" @btnClick="goToFuncWithData"
            activeBGColor="success" :withNextPrev="true" nextText="Go Forward" prevText="Go back" /> -->
    </div>
</template>

<script>

export default {

    data() {
        return {
            items: [
                { id: 1, name: 'Item 1' },
                { id: 2, name: 'Item 2' },
                { id: 3, name: 'Item 3' },
                { id: 4, name: 'Item 4' },
                { id: 5, name: 'Item 5' },
                { id: 6, name: 'Item 6' },
                // Add more items as needed
            ],
            mydata: 'other data',
            currentPage: 1, // Current page
            itemsPerPage: 5, // Items per page
        };
    },
    computed: {
        // Calculate total pages
        pageCount() {
            return Math.ceil(this.items.length / this.itemsPerPage);
        },
        // Paginated items based on current page
        paginatedItems() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.items.slice(startIndex, endIndex);
        },
    },
    methods: {
        goToFuncWithData: function (n, data) {
            console.log(n, data);
        },
        // Handle page change
        getPage(pageNum) {
            this.currentPage = pageNum;
        },
    },
};
</script>