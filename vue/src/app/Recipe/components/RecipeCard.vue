<template>
    <div
        class="w-[535px] h-[200px] border-[1px] border-gray-400/20 rounded-xl p-5 flex gap-5"
    >
        <div
            class="h-full w-[250px] rounded-lg flex items-center overflow-hidden"
        >
            <img
                v-if="recipe?.image?.url"
                :src="`${recipe?.image?.url}`"
                :alt="recipe.name"
                class="rounded-md"
            />
            <img
                v-else
                src="../../common/assets/no-image.jpg"
                alt="no image placeholder"
                class="rounded-md mix-blend-darken"
            />
        </div>
        <div class="h-full w-full flex flex-col gap-3 p-1 relative">
            <h2 class="text-lg font-bold" :title="recipe.name">
                {{ recipeName }}
            </h2>
            <div class="absolute right-0 top-2">
                <Dropdown
                    v-if="links.length"
                    icon="more_vert"
                    :links="links"
                    @click.stop
                />
            </div>
            <div class="flex gap-1 text-[10px]">
                <slot />
            </div>
            <div>
                <p class="text-sm" :title="recipe.description">
                    {{ recipeDescription }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from "vue";
import Dropdown from "../../common/components/Dropdown.vue";

const props = defineProps({
    recipe: {
        type: Object,
        default: {},
        required: true,
    },
    links: {
        type: Array,
        default: () => [],
        required: false,
    },
});

const recipeName = computed(() => {
    if (props.recipe.name.length > 25) {
        return props.recipe.name.slice(0, 25) + "...";
    } else {
        return props.recipe.name;
    }
});

//TODO: change to product description
const recipeDescription = computed(() => {
    if (props.recipe.preparation.length > 110) {
        return props.recipe.preparation.slice(0, 110) + "...";
    } else {
        return props.recipe.preparation;
    }
});
</script>

<style lang="scss" scoped></style>
