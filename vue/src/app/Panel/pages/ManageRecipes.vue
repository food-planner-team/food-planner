<template>
    <main class="main bg-[#fff] rounded-lg">
        <div class="wrapper">
            <RejectModal v-model:isOpenModal="isOpenModal" v-model:rejectValue="rejectValue"
                :reject="() => handleRejectRecipe(recipeId)" />
            <div class="h-full flex flex-col">
                <div class="m-5 mt-0 flex justify-between">
                    <div>
                        <h1 class="font-bold text-2xl my-5 xs:mt-0">
                            Zarządzanie przepisami
                        </h1>
                        <div>
                            <p class="pb-2 text-sm text-gray-500">
                                <label for="search">NAZWA PRZEPISU</label>
                            </p>
                            <div class="flex flex-wrap gap-6">
                                <input type="search" id="search" class="rounded-lg w-full md:w-[28rem]"
                                    placeholder="Wyszukaj" v-model="searchValue" @keyup.enter="getRecipes()" />
                                <div class="flex gap-6 flex-wrap justify-center w-full md:w-auto">
                                    <button
                                        class="hidden lg:inline-flex justify-center rounded-md border border-transparent bg-primary-dark px-12 w-[200px] py-2 text-base font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 items-center transition-colors"
                                        @click="getRecipes()">
                                        Szukaj
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-20 flex flex-col items-end gap-4">
                        <RecipeFilters @handleActiveFilter="handleActiveFilter" />
                    </div>
                </div>
                <div class="h-full relative m-5 mb-0">
                    <template v-if="!isLoading">
                        <div
                            class="relative justify-items-center pb-5 pt-1 lg:absolute left-0 top-0 h-full w-full 3xl:px-2">
                            <div class="h-full overflow-y-auto" ref="scrollComponent">
                                <table class="w-full text-left" v-if="recipes.length">
                                    <thead>
                                        <tr>
                                            <th
                                                class="sticky top-0 py-2 px-4 bg-[#fff] z-10 border-b-[1px] border-gray-300">
                                                ID
                                            </th>
                                            <th
                                                class="sticky top-0 py-2 px-4 bg-[#fff] z-10 border-b-[1px] border-gray-300">
                                                Zdjęcie
                                            </th>
                                            <th
                                                class="sticky top-0 py-2 px-4 bg-[#fff] z-10 border-b-[1px] border-gray-300">
                                                Status
                                            </th>
                                            <th
                                                class="sticky top-0 py-2 px-4 bg-[#fff] z-10 border-b-[1px] border-gray-300">
                                                Nazwa
                                            </th>
                                            <th
                                                class="sticky top-0 py-2 px-4 bg-[#fff] z-10 border-b-[1px] border-gray-300">
                                                Opis
                                            </th>
                                            <th
                                                class="sticky top-0 py-2 px-4 bg-[#fff] z-10 border-b-[1px] border-gray-300">
                                                Kaloryczność
                                            </th>
                                            <th
                                                class="sticky top-0 py-2 px-4 bg-[#fff] z-10 border-b-[1px] border-gray-300">
                                                Czas przygotowania
                                            </th>
                                            <th
                                                class="sticky top-0 py-2 px-4 bg-[#fff] z-10 border-b-[1px] border-gray-300">
                                                Ilość produktów
                                            </th>
                                            <th
                                                class="sticky top-0 py-2 px-4 bg-[#fff] z-10 border-b-[1px] border-gray-300">
                                                Autor
                                            </th>
                                            <th
                                                class="sticky top-0 py-2 px-4 bg-[#fff] z-10 border-b-[1px] border-gray-300">
                                                Data dodania
                                            </th>
                                            <th
                                                class="sticky top-0 py-2 px-4 bg-[#fff] z-10 border-b-[1px] border-gray-300">
                                                Akcja
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="recipe in recipes" :key="recipe.id">
                                            <td class="py-2 px-4 border-b-[1px] border-gray-300">
                                                {{ recipe.id }}
                                            </td>
                                            <td class="py-2 px-4 border-b-[1px] border-gray-300">
                                                <div
                                                    class="w-[50px] h-[50px] rounded-lg flex items-center justify-center overflow-hidden">
                                                    <img v-if="recipe?.image?.url
                                                        " :src="`${recipe?.image?.url}`" :alt="recipe.name"
                                                        class="rounded-md" />
                                                    <img v-else src="../../common/assets/no-image.jpg"
                                                        alt="no image placeholder" class="rounded-md mix-blend-darken" />
                                                </div>
                                            </td>
                                            <td class="py-2 px-4 border-b-[1px] border-gray-300">
                                                <RecipeCardInfo :bg-color="statusBgColor(
                                                    recipe.status
                                                )
                                                    " :text-color="statusTextColor(
        recipe.status
    )
        ">
                                                    <template #icon>
                                                        info
                                                    </template>
                                                    {{
                                                        statusLabel(
                                                            recipe.status
                                                        )
                                                    }}
                                                </RecipeCardInfo>
                                            </td>
                                            <td class="py-2 px-4 border-b-[1px] border-gray-300">
                                                {{ recipe.name }}
                                            </td>
                                            <td class="py-2 px-4 border-b-[1px] border-gray-300">
                                                {{
                                                    recipeDescription(
                                                        recipe.preparation
                                                    )
                                                }}
                                            </td>
                                            <td class="py-2 px-4 border-b-[1px] border-gray-300">
                                                {{ recipe.kcal }} kcal
                                            </td>
                                            <td class="py-2 px-4 border-b-[1px] border-gray-300 w-[150px]">
                                                {{ recipe.preparationTime }} min
                                            </td>
                                            <td class="py-2 px-4 border-b-[1px] border-gray-300 w-[150px]">
                                                {{ recipe.recipeItems.length }}
                                                produktów
                                            </td>
                                            <td class="py-2 px-4 border-b-[1px] border-gray-300">
                                                {{ recipe.user.name }}
                                            </td>
                                            <td class="py-2 px-4 border-b-[1px] border-gray-300 w-[130px]">
                                                {{ recipe.createdAt }}
                                            </td>
                                            <td class="py-2 px-4 border-b-[1px] border-gray-300">
                                                <div class="flex gap-2 items-center">
                                                    <button
                                                        class="bg-[#E4FFDB] text-[#5D8F4C] font-semibold rounded-lg py-1 px-5 hover:bg-[#D4FFC8] transition-colors w-[130px] h-[30px] disabled:cursor-not-allowed disabled:opacity-60"
                                                        :disabled="recipe.status ===
                                                            RecipeStatusEnum.ACCEPTED
                                                            " @click="
        handleAcceptRecipe(
            recipe.id
        )
        ">
                                                        <span class="flex justify-center items-center">
                                                            <svg v-show="isLoadingBtn
                                                                " class="w-4 h-4 text-white animate-spin" fill="none"
                                                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <circle class="opacity-25" cx="12" cy="12" r="10"
                                                                    stroke="currentColor" stroke-width="4"></circle>
                                                                <path class="opacity-75"
                                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                                    fill="currentColor"></path>
                                                            </svg>
                                                        </span>
                                                        <span v-show="!isLoadingBtn
                                                            ">Zaakceptuj</span>
                                                    </button>
                                                    <button
                                                        class="bg-[#FFEAEA] text-[#B03E3E] font-semibold rounded-lg py-1 px-5 hover:bg-[#FFDADA] transition-colors w-[100px] h-[30px] disabled:cursor-not-allowed disabled:opacity-60"
                                                        :disabled="recipe.status ===
                                                            RecipeStatusEnum.REJECTED
                                                            " @click="
        handleOpenModal(
            recipe.id
        )
        ">
                                                        <span class="flex justify-center items-center">
                                                            <svg v-show="isLoadingBtn
                                                                " class="w-4 h-4 text-white animate-spin" fill="none"
                                                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <circle class="opacity-25" cx="12" cy="12" r="10"
                                                                    stroke="currentColor" stroke-width="4"></circle>
                                                                <path class="opacity-75"
                                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                                    fill="currentColor"></path>
                                                            </svg>
                                                        </span>
                                                        <span v-show="!isLoadingBtn
                                                            ">Odrzuć</span>
                                                    </button>
                                                    <Dropdown icon="more_vert"
                                                        class="setting__span-btn bg-gray-200 rounded-lg py-1 hover:bg-gray-300 transition-colors"
                                                        :links="links(recipe.id)
                                                            " />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </template>
                    <div class="h-full flex" v-else>
                        <Loader class="m-auto" />
                    </div>
                    <div v-if="!recipes.length && !isLoading">
                        <p class="text-left text-gray-500">Brak przepisów</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";

import Recipe from "../../Recipe/models/Recipe.js";
import Loader from "../../common/components/Loader.vue";
import { useInfiniteScroll } from "@vueuse/core";
import RecipeFilters from "../../Recipe/components/RecipeFilters.vue";
import { RecipeStatusEnum } from "../../Recipe/models/Recipe.js";
import RecipeCardInfo from "../../Recipe/components/RecipeCardInfo.vue";
import Dropdown from "../../common/components/Dropdown.vue";
import RejectModal from "../components/RejectModal.vue";

const recipes = ref([]);
const searchValue = ref("");
const isLoading = ref(true);
const isLoadingBtn = ref(false);
const page = ref(1);
const scrollComponent = ref(null);
const filterValue = ref(RecipeStatusEnum.ALL);
const isOpenModal = ref(false);
const rejectValue = ref("");
const recipeId = ref(null);

const links = (id) => {
    return [
        {
            name: "zobacz przepis",
            pathName: "RecipeDetails",
            params: { id: id },
            icon: "search",
            action: "",
        },
        {
            name: "edytuj",
            pathName: "UpdateRecipe",
            params: { id: id },
            icon: "edit",
            action: "",
        },
        {
            name: "usuń",
            pathName: "",
            icon: "delete",
            action: () => handleRemoveRecipe(id),
            disabled: false,
        },
    ];
};

const getRecipes = async () => {
    recipes.value = [];
    isLoading.value = true;
    page.value = 1;

    const response = await Recipe.getRecipes({
        search: searchValue.value,
        page: page.value,
        limit: 20,
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
    getRecipes();
});

const getRecipesOnScroll = async () => {
    const response = await Recipe.getRecipes({
        search: searchValue.value,
        page: page.value,
        limit: 20,
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
        getRecipesOnScroll();
    },
    { distance: 500 }
);

const handleActiveFilter = (filter) => {
    filterValue.value = filter;
};

watch(filterValue, () => {
    getRecipes();
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

const handleAcceptRecipe = async (recipeId) => {
    isLoadingBtn.value = true;
    const recipeIndex = recipes.value.findIndex(
        (recipe) => recipe.id === recipeId
    );
    const response = await Recipe.updateRecipeStatus(
        recipeId,
        RecipeStatusEnum.ACCEPTED,
        'accepted'
    );
    recipes.value[recipeIndex].status = response.status;
    isLoadingBtn.value = false;
};

const handleOpenModal = (id) => {
    recipeId.value = id;
    isOpenModal.value = true;
    rejectValue.value = "";
};

const handleRejectRecipe = async (recipeId) => {
    isLoadingBtn.value = true;
    const recipeIndex = recipes.value.findIndex(
        (recipe) => recipe.id === recipeId
    );
    const response = await Recipe.updateRecipeStatus(
        recipeId,
        RecipeStatusEnum.REJECTED,
        rejectValue.value
    );
    recipes.value[recipeIndex].status = response.status;
    isLoadingBtn.value = false;
};

const handleRemoveRecipe = async (recipeId) => {
    const recipeIndex = recipes.value.findIndex(
        (recipe) => recipe.id === recipeId
    );
    const response = await Recipe.removeRecipe(recipeId);

    if (response.data.status_code === 200) {
        recipes.value.splice(recipeIndex, 1);
    }
};

const recipeDescription = (description) => {
    if (description.length > 80) {
        return description.slice(0, 80) + "...";
    } else {
        return description;
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
