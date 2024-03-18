<template>
    <div>

        <input :value="props.modelValue" @input="emit('update:modelValue', $event.target.value)" />
        <!-- <h2>Composition {{ state.firstName }} {{ state.lastName }} {{ state.heroName }}</h2> -->
        <button class="fancy-btn">Click me!</button>
    </div>
</template>

<script setup>
const props = defineProps(['modelValues'])
const emit = defineEmits(['update:modelValues'])
import { reactive } from 'vue';

// export default {

//     name: 'template_refs',
//     setup() {
//         const state = reactive({
//             firstName: 'ANatt',
//             lastName: 'Devv',
//             heroName: 'jiiroo',
//         })
//         return {
//             state,
//         }
//     }

// }
</script>

<style scoped></style>