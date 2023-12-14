<template>
    <main class="main">
        <div class="wrapper">
            <div class="h-full flex flex-col">
                <template v-if="!isLoading">
                    <div class="flex flex-1 flex-col md:flex-row">
                        <div
                            class="h-[500px] md:w-full md:h-full bg-cover bg-center rounded-md mx-2 shadow-lg"
                            :style="{
                                backgroundImage: `url(${recipe?.image?.url})`,
                            }"
                        ></div>
                        <div class="w-full m-2 p-5 relative">
                            <div
                                class="md:absolute top-0 w-full h-full overflow-auto pr-3"
                            >
                                <h1
                                    class="font-bold text-5xl mb-6 first-letter:uppercase"
                                >
                                    {{ recipe.name }}
                                </h1>
                                <div class="flex flex-col gap-4">
                                    <div>
                                        <p class="text-2xl font-bold">Opis</p>
                                        <p
                                            class="text-lg text-gray-500 first-letter:uppercase"
                                        >
                                            {{ recipe.description }}
                                        </p>
                                    </div>
                                    <div>
                                        <p class="text-2xl font-bold">
                                            Kalorie (na porcję)
                                        </p>
                                        <p class="text-lg text-gray-500">
                                            {{
                                                recipe.kcal
                                                    ? recipe.kcal + " kcal"
                                                    : "Nie podano"
                                            }}
                                        </p>
                                    </div>
                                    <div>
                                        <p class="text-2xl font-bold">
                                            Czas przygotowania
                                        </p>
                                        <p class="text-lg text-gray-500">
                                            {{ recipe.preparation_time }} minut
                                        </p>
                                    </div>
                                    <div>
                                        <p class="text-2xl font-bold">
                                            Przygotowanie
                                        </p>
                                        <p class="text-lg text-gray-500">
                                            {{ recipe.preparation }}
                                        </p>
                                    </div>
                                    <div>
                                        <p class="text-2xl font-bold">
                                            Składniki
                                        </p>
                                        <div class="flex flex-col gap-2">
                                            <div
                                                v-for="item in recipe.recipeItems"
                                                :key="item.id"
                                                class="flex flex-row gap-4"
                                            >
                                                <div class="flex flex-col">
                                                    <p
                                                        class="text-lg font-medium"
                                                    >
                                                        {{ item.product.name }}
                                                    </p>
                                                    <p
                                                        class="text-lg text-gray-500"
                                                    >
                                                        {{
                                                            displayCorrectQuantityType(
                                                                item.product
                                                                    .quantity,
                                                                item.product
                                                                    .quantityType
                                                            )
                                                        }}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <Loader
                    v-else
                    class="m-auto col-start-2 col-span-2 3xl:col-start-3 3xl:col-span-1"
                />
            </div>
        </div>
    </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Recipe from "../models/Recipe.js";
import Loader from "../../common/components/Loader.vue";
import { displayCorrectQuantityType } from "../../common/utils/quantityType.js";

const route = useRoute();
const recipe = ref({});
const isLoading = ref(true);

const getRecipe = async () => {
    recipe.value = {};
    isLoading.value = true;

    const respones = await Recipe.getRecipeById(route.params.id);

    console.log(respones);

    recipe.value = respones;
    isLoading.value = false;
};

onMounted(async () => {
    await getRecipe();
});
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
    padding: 1rem;

    @media screen and (min-width: 1024px) {
        padding: 2rem;
    }
}
</style>
