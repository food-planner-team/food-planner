<template>
    <main class="main">
        <div class="wrapper">
            <div class="h-full flex flex-col">
                <div class="m-5 mt-0 flex justify-between">
                    <div>
                        <h1 class="font-bold text-2xl my-5 xs:mt-0">
                            Moje przepisy
                        </h1>
                        <div>
                            <p class="pb-2 text-sm text-gray-500">
                                <label for="search">NAZWA PRZEPISU</label>
                            </p>
                            <div class="flex flex-wrap gap-6">
                                <input
                                    type="search"
                                    id="search"
                                    class="rounded-lg w-full md:w-[28rem]"
                                    placeholder="Wyszukaj"
                                    v-model="searchValue"
                                    @keyup.enter="getUserRecipes()"
                                />
                                <div
                                    class="flex gap-6 flex-wrap justify-center w-full md:w-auto"
                                >
                                    <button
                                        class="hidden lg:inline-flex justify-center rounded-md border border-transparent bg-primary-dark px-12 w-[200px] py-2 text-base font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 items-center"
                                        @click="getUserRecipes()"
                                    >
                                        Szukaj
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="my-5 flex flex-col items-end gap-4">
                        <RouterLink :to="{ name: 'AddRecipe' }">
                            <button
                                class="hidden lg:inline-flex justify-center rounded-md border border-transparent bg-primary-dark px-12 w-[230px] py-2 text-base font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 items-center"
                            >
                                <span class="material-symbols-outlined">
                                    add
                                </span>
                                Dodaj przepis
                            </button>
                        </RouterLink>
                        <RecipeFilters
                            @handleActiveFilter="handleActiveFilter"
                        />
                    </div>
                </div>
                <div class="h-full relative">
                    <div
                        class="lg:overflow-y-scroll relative justify-items-center pb-5 pt-1 lg:absolute left-0 top-0 h-full w-full 3xl:px-2"
                        :class="
                            recipes.length > 3
                                ? 'grid my-recipes-grid'
                                : 'flex flex-wrap gap-16 justify-center lg:justify-start xl:ml-5 xl:mr-5'
                        "
                        ref="scrollComponent"
                    >
                        <template v-if="!isLoading">
                            <RecipeCard
                                v-for="recipe in recipes"
                                :key="recipe.id"
                                :recipe="recipe"
                            >
                                <RecipeCardInfo
                                    :bg-color="statusBgColor(recipe.status)"
                                    :text-color="statusTextColor(recipe.status)"
                                >
                                    <template #icon> info </template>
                                    {{ statusLabel(recipe.status) }}
                                </RecipeCardInfo>
                                <RecipeCardInfo>
                                    <template #icon> equalizer </template>
                                    {{ recipe.kcal }} kcal
                                </RecipeCardInfo>
                            </RecipeCard>
                        </template>
                        <Loader
                            v-else
                            class="m-auto col-start-2 col-span-2 3xl:col-start-3 3xl:col-span-1"
                        />
                        <div v-if="!recipes.length && !isLoading">
                            <p class="text-center text-gray-500">
                                Brak przepisów
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";

import Recipe from "../models/Recipe.js";
import Loader from "../../common/components/Loader.vue";
import { useInfiniteScroll } from "@vueuse/core";
import RecipeCard from "../components/RecipeCard.vue";
import RecipeCardInfo from "../components/RecipeCardInfo.vue";
import RecipeFilters from "../components/RecipeFilters.vue";
import { RecipeStatusEnum } from "../models/Recipe.js";

const recipes = ref([]);
const searchValue = ref("");
const isLoading = ref(true);
const page = ref(1);
const scrollComponent = ref(null);
const filterValue = ref(RecipeStatusEnum.ALL);

const getUserRecipes = async () => {
    recipes.value = [];
    isLoading.value = true;
    page.value = 1;

    const response = await Recipe.getUserRecipes({
        search: searchValue.value,
        page: page.value,
        limit: 24,
        status:
            filterValue.value !== RecipeStatusEnum.ALL
                ? filterValue.value
                : null,
    });

    recipes.value = response.recipes;
    page.value++;
    isLoading.value = false;
};

onMounted(() => {
    getUserRecipes();
});

const getUserRecipesOnScroll = async () => {
    const response = await Recipe.getUserRecipes({
        search: searchValue.value,
        page: page.value,
        limit: 24,
        status:
            filterValue.value !== RecipeStatusEnum.ALL
                ? filterValue.value
                : null,
    });

    if (page.value > response.meta.pagination.total_pages) return;

    recipes.value.push(...response.recipes);
    page.value++;
};

useInfiniteScroll(
    scrollComponent,
    () => {
        getUserRecipesOnScroll();
    },
    { distance: 500 }
);

const handleActiveFilter = (filter) => {
    filterValue.value = filter;
};

watch(filterValue, () => {
    getUserRecipes();
});

const statusLabel = (status) => {
    switch (status) {
        case RecipeStatusEnum.ACCEPTED:
            return "Zaakceptowany";
        case RecipeStatusEnum.PENDING:
            return "Do weryfikacji";
        case RecipeStatusEnum.REJECTED:
            return "Odrzucony";
        default:
            return "Nieznany";
    }
};

const statusBgColor = (status) => {
    switch (status) {
        case RecipeStatusEnum.ACCEPTED:
            return "bg-[#E4FFDB]";
        case RecipeStatusEnum.PENDING:
            return "bg-[#FFF5DC]";
        case RecipeStatusEnum.REJECTED:
            return "bg-[#FFEAEA]";
        default:
            return "bg-gray-300";
    }
};

const statusTextColor = (status) => {
    switch (status) {
        case RecipeStatusEnum.ACCEPTED:
            return "text-[#5D8F4C]";
        case RecipeStatusEnum.PENDING:
            return "text-[#9F6D21]";
        case RecipeStatusEnum.REJECTED:
            return "text-[#B03E3E]";
        default:
            return "text-gray-500";
    }
};
</script>

<style lang="scss" scoped>
.main {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "wrapper";
    gap: 1.5rem;
    overflow: hidden;
}

.wrapper {
    grid-area: wrapper;
    background-color: $alpha;
    box-shadow: 0px 6px 24px $alpha-dark;
    border-radius: 16px;
    backdrop-filter: blur(25px);
    overflow: hidden;

    @media screen and (min-width: 1024px) {
        padding: 2rem;
    }
}
</style>
