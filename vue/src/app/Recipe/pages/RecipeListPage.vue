<template>
    <main class="main">
        <div class="wrapper">
            <div class="h-full flex flex-col">
                <h1 class="font-bold text-2xl m-5 xs:mt-0">Przepisy</h1>
                <div class="m-5 mt-0">
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
                            @keyup.enter="getRecipes()"
                        />
                        <div
                            class="flex gap-6 flex-wrap justify-center w-full md:w-auto"
                        >
                            <button
                                class="hidden lg:inline-flex justify-center rounded-md border border-transparent bg-primary-dark px-12 w-[200px] py-2 text-base font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 items-center"
                                @click="getRecipes()"
                            >
                                Szukaj
                            </button>
                        </div>
                    </div>
                </div>
                <div class="h-full relative">
                    <div
                        class="lg:overflow-y-scroll relative justify-items-center pb-5 pt-1 lg:absolute left-0 top-0 h-full w-full 3xl:px-2"
                        :class="
                            recipes.length > 3
                                ? 'grid recipes-grid'
                                : 'flex flex-wrap gap-10 justify-center lg:justify-start xl:ml-8 xl:mr-8'
                        "
                        ref="scrollComponent"
                    >
                        <template v-if="!isLoading">
                            <RecipeCard
                                v-for="recipe in recipes"
                                :key="recipe.id"
                                :recipe="recipe"
                            />
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
import { onMounted, ref } from "vue";

import Recipe from "../models/Recipe.js";
import Loader from "../../common/components/Loader.vue";
import { useInfiniteScroll } from "@vueuse/core";
import RecipeCard from "../components/RecipeCard.vue";

const recipes = ref([]);
const searchValue = ref("");
const isLoading = ref(true);
const page = ref(1);
const scrollComponent = ref(null);

const getRecipes = () => {
    recipes.value = [];
    isLoading.value = true;
    page.value = 1;

    Recipe.getRecipes({
        include: "image",
        search: searchValue.value,
        page: page.value,
        limit: 24,
    })
        .then((res) => {
            recipes.value = res.recipes;
            page.value++;
        })
        .finally(() => {
            isLoading.value = false;
        });
};

onMounted(() => {
    getRecipes();
});

const getRecipesOnScroll = () => {
    Recipe.getRecipes({
        include: "image",
        search: searchValue.value,
        page: page.value,
        limit: 24,
    }).then((res) => {
        if (page.value > res.meta.pagination.total_pages) return;

        recipes.value.push(...res.recipes);
        page.value++;
    });
};

useInfiniteScroll(
    scrollComponent,
    () => {
        getRecipesOnScroll();
    },
    { distance: 300 }
);
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
