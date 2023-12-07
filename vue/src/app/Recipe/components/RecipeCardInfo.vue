<template>
    <span
        class="flex items-center gap-1 rounded-3xl px-3"
        :class="`${bgColor} ${textColor}`"
    >
        <span
            class="material-symbols-outlined text-base"
            data-te-toggle="tooltip"
        >
            <slot name="icon" />
        </span>
        <slot></slot>
    </span>
</template>

<script setup>
const props = defineProps({
    bgColor: {
        type: String,
        default: "bg-gray-300/50",
    },
    textColor: {
        type: String,
        default: "text-gray-800",
    },
});
</script>
