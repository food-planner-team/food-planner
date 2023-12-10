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
                <Dropdown icon="more_vert" :links="links" />
            </div>
            <div class="flex gap-1 text-[10px]">
                <RecipeCardInfo
                    :bg-color="statusBgColor"
                    :text-color="statusTextColor"
                >
                    <template #icon> info </template>
                    {{ statusLabel }}
                </RecipeCardInfo>
                <RecipeCardInfo>
                    <template #icon> equalizer </template>
                    {{ recipe.kcal }} kcal
                </RecipeCardInfo>
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
import RecipeCardInfo from "./RecipeCardInfo.vue";

const props = defineProps({
    recipe: {
        type: Object,
        default: {},
        required: true,
    },
});

const links = ref([
    {
        name: "edytuj",
        pathName: "",
        icon: "edit",
        action: "",
        disabled: true,
    },
    {
        name: "usuń",
        pathName: "",
        icon: "delete",
        action: "",
        disabled: true,
    },
]);

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

const statusLabel = computed(() => {
    switch (props.recipe.status) {
        case 1:
            return "Zaakceptowany";
        case 2:
            return "Do weryfikacji";
        case 3:
            return "Odrzucony";
        default:
            return "Nieznany";
    }
});

const statusBgColor = computed(() => {
    switch (props.recipe.status) {
        case 1:
            return "bg-[#E4FFDB]";
        case 2:
            return "bg-[#FFF5DC]";
        case 3:
            return "bg-[#FFEAEA]";
        default:
            return "bg-gray-300";
    }
});

const statusTextColor = computed(() => {
    switch (props.recipe.status) {
        case 1:
            return "text-[#5D8F4C]";
        case 2:
            return "text-[#9F6D21]";
        case 3:
            return "text-[#B03E3E]";
        default:
            return "text-gray-500";
    }
});
</script>

<style lang="scss" scoped></style>
