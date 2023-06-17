<template>
    <div class="meal-block">
        <p class="meal-block__element" type="button" @click="openModal">
            <span class="material-symbols-outlined"> add_circle </span>
            Dodaj danie do dnia
        </p>
    </div>
    <TransitionRoot appear :show="isOpenModal" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div
                    class="flex min-h-full items-center justify-center p-4 text-center"
                >
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95"
                    >
                        <DialogPanel
                            class="w-full max-w-5xl h-[90dvh] lg:h-[40rem] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all flex flex-col relative"
                        >
                            <button
                                class="flex justify-center items-center absolute top-5 right-5 lg:hidden"
                                @click="closeModal"
                            >
                                <span class="material-symbols-outlined">
                                    close
                                </span>
                            </button>
                            <div
                                class="m-4 flex justify-between items-center mr-7"
                            >
                                <DialogTitle
                                    as="h3"
                                    class="text-2xl font-bold leading-6 text-gray-900"
                                >
                                    Wybierz danie
                                </DialogTitle>
                                <button
                                    type="button"
                                    class="lg:inline-flex justify-center rounded-md border border-transparent bg-primary-dark px-12 py-2.5 text-sm font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 hidden"
                                    @click="closeModal"
                                >
                                    Powrót
                                </button>
                            </div>
                            <div class="ml-4">
                                Wybierz danie:
                                <span class="font-medium text-grey">
                                    {{ getLocaleDate(date) }}
                                </span>
                            </div>
                            <div class="m-4 flex flex-col">
                                <div class="flex justify-between lg:pr-2.5">
                                    <input
                                        type="search"
                                        id="search"
                                        class="rounded-md lg:w-3/4 w-full"
                                        placeholder="Wyszukaj"
                                        v-model="searchValue"
                                        @keyup.enter="getRecipes()"
                                    />
                                    <button
                                        class="lg:inline-flex justify-center rounded-md border border-transparent bg-primary-dark px-12 w-[200px] py-2 text-sm font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 hidden"
                                        @click="getRecipes()"
                                    >
                                        Szukaj
                                    </button>
                                </div>
                            </div>
                            <div
                                class="lg:m-4 h-[420px] rounded-sm overflow-auto mr-0"
                                v-if="recipes.length"
                                ref="scrollComponent"
                            >
                                <div
                                    class="flex gap-5 lg:h-20 items-center justify-center lg:justify-between my-7 lg:flex-row flex-col"
                                    v-for="(item, index) in recipes"
                                    :key="index"
                                >
                                    <div
                                        class="flex justify-center items-center w-28 h-20 rounded-md overflow-hidden"
                                    >
                                        <img
                                            v-if="item?.image?.url"
                                            :src="item?.image?.url"
                                            :alt="item.name"
                                            class="rounded-md"
                                        />
                                        <img
                                            v-else
                                            src="../../common/assets/no-image.jpg"
                                            alt="no image placeholder"
                                            class="rounded-md"
                                        />
                                    </div>
                                    <div class="lg:w-7/12">
                                        <h3 class="font-bold">
                                            {{ item.name }}
                                        </h3>
                                        <p class="text-grey text-xs">
                                            {{ item.description }}
                                        </p>
                                    </div>
                                    <div class="lg:pr-4">
                                        <button
                                            class="inline-flex justify-center rounded-md border border-transparent bg-white px-12 w-[200px] py-2.5 text-sm font-medium text-black hover:bg-primary-dark hover:text-white border-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            @click="addMeal(item)"
                                        >
                                            Wybierz danie
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div
                                v-if="!recipes.length && !isLoading"
                                class="m-4"
                            >
                                Brak pasujących przepisów
                            </div>
                            <Loader v-if="isLoading" class="m-auto" />
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { ref, watch } from "vue";
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from "@headlessui/vue";
import { getLocaleDate } from "../../common/utils/datesHelpers.js";
import Recipe from "../../Recipe/models/Recipe.js";
import Loader from "../../common/components/Loader.vue";
import { useInfiniteScroll } from "@vueuse/core";

const props = defineProps({
    date: String,
});
const recipes = ref([]);
const searchValue = ref("");
const isOpenModal = ref(false);
const isLoading = ref(true);

function closeModal() {
    isOpenModal.value = false;
    searchValue.value = "";
}

function openModal() {
    isOpenModal.value = true;
}

const emit = defineEmits(["update"]);

function addMeal(v) {
    emit("update", v);
    closeModal();
}

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
        limit: 10,
    })
        .then((res) => {
            recipes.value = res.recipes;
            page.value++;
        })
        .finally(() => {
            isLoading.value = false;
        });
};

watch(isOpenModal, () => {
    if (!isOpenModal.value) return;

    getRecipes();
});

const getRecipesOnScroll = () => {
    Recipe.getRecipes({
        include: "image",
        search: searchValue.value,
        page: page.value,
        limit: 10,
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
img {
    aspect-ratio: 1 / 1;
    width: 100%;
    object-fit: cover;
}
.meal-block {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 1rem;
    padding-top: 0.8rem;
    box-shadow: 2px 3px 12px $alpha-dark;
    height: 100px;

    &__element {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        cursor: pointer;
    }
}
</style>
