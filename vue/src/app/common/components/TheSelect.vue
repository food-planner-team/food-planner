<template>
    <select
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        v-model="selectedValue" @change="emit('handleSelect', { userId: userId, selectedValue: selectedValue })">
        <option v-for="option in options" :key="option.value" :value="option.value">
            {{ option.text }}
        </option>
    </select>
</template>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
    options: {
        type: Array,
        required: true,
    },
    selected: {
        type: Number,
        required: false,
        default: '',
    },
    userId: {
        type: Number,
        required: false,
        default: '',
    },
});

const selectedOption = computed(() => {
    return props.options.find((option) => option.value === props.selected);
});

const selectedValue = ref(selectedOption.value.value);

const emit = defineEmits(["handleSelect"]);
</script>

<style lang="scss">
.link-name::first-letter {
    text-transform: uppercase;
}
</style>
