<template>
    <div>
        <input type="text" ref="inputRef">
        <h2>Composition{{ state.firstName }} {{ state.lastName }} {{ state.heroName }}</h2>
    </div>
</template>

<script>
import { reactive } from 'vue';

export default {
    name: 'template_refs',
    mounted() {
        console.log(this.$$refs.InputEvent),
            this.$refs.inputRef.focus()
    },
    setup() {
        const state = reactive({
            firstName: 'ANatt',
            lastName: 'Devv',
            heroName: 'jiiroo',
        })
    }
}
</script>

<style scoped></style>