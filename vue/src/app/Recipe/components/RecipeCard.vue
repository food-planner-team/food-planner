<template>
    <div
        class="h-56 w-[22rem] rounded-lg flex flex-col items-center gap-5 shadow-md bg-[#fefffe] overflow-hidden relative cursor-pointer"
    >
        <img
            v-if="props.recipe?.image?.url"
            :src="props.recipe?.image?.url"
            :alt="props.recipe.name"
            class="aspect-auto"
        />
        <img
            v-else
            src="../../common/assets/no-image.jpg"
            :alt="props.recipe.name"
            class="aspect-auto"
        />
        <div class="bg-alpha-accent absolute bottom-0 w-full p-3 text-center">
            <p class="font-medium">{{ props.recipe.name }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    recipe: {
        type: Object,
        default: {},
        required: true,
    },
});
</script>

<style lang="scss" scoped></style>
