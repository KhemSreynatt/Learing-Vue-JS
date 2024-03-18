<!-- <template>
    <div>
        <ul>
            <li v-for="(item, index) in displayedItems" :key="index">{{ item }}</li>
        </ul>

        <div>
            <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
            <span>Page {{ currentPage }}</span>
            <button @click="nextPage" :disabled="currentPage === pageCount">Next</button>
            <ul class="pagination">
                <li v-for="pageNumber in pageCount" @click="gotoPage(pageNumber)" :key="pageNumber"
                    :class="{ active: pageNumber === currentPage }">{{ pageNumber }}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"],
            currentPage: 1,
            itemsPerPage: 5, // Number of items per page
        };
    },
    computed: {
        pageCount() {
            return Math.ceil(this.items.length / this.itemsPerPage);
        },
        displayedItems() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.items.slice(startIndex, endIndex);
        }
    },
    methods: {
        nextPage() {
            if (this.currentPage < this.pageCount) {
                this.currentPage += 1;
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage -= 1;
            }
        },
        gotoPage(pageNumber) {
            if (pageNumber >= 1 && pageNumber <= this.pageCount) {
                this.currentPage = pageNumber;
            }
        }
    }
};
</script> -->
