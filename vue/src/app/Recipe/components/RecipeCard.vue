<template>
    <router-link
        :to="{ name: 'RecipeDetails', params: { id: props.recipe.id } }"
    >
        <div
            class="h-56 min-w-[22rem] max-w-[24rem] rounded-lg flex flex-col items-center gap-5 shadow-md bg-[#fefffe] overflow-hidden relative cursor-pointer"
        >
            <img
                v-if="props.recipe?.image"
                :src="props.recipe?.image?.url"
                :alt="props.recipe.name"
                class="hover:scale-110 transition-transform duration-300"
            />
            <img
                src="../../common/assets/no-image.jpg"
                :alt="props.recipe.name"
                class="object-fill"
            />
            <div
                class="bg-alpha-accent absolute bottom-0 w-full p-3 text-center"
            >
                <p class="font-medium">{{ props.recipe.name }}</p>
            </div>
        </div>
    </router-link>
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
