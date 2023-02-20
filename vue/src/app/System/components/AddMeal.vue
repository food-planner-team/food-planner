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
                            class="w-full max-w-5xl h-[40rem] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                        >
                            <div
                                class="m-4 flex justify-between items-center mr-7"
                            >
                                <DialogTitle
                                    as="h3"
                                    class="text-2xl font-bold leading-6 text-gray-900 relative after:absolute after:w-[400px] after:h-px after:bg-grey after:ml-6 after:top-[50%]"
                                >
                                    Wybierz danie
                                </DialogTitle>
                                <button
                                    type="button"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-primary-dark px-12 py-2.5 text-sm font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
                                <div class="flex justify-between pr-2.5">
                                    <input
                                        type="search"
                                        id="search"
                                        class="rounded-md w-3/4"
                                        placeholder="Wyszukaj"
                                        v-model="searchValue"
                                    />
                                    <button
                                        class="inline-flex justify-center rounded-md border border-transparent bg-primary-dark px-12 w-[200px] py-2 text-sm font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    >
                                        Szukaj
                                    </button>
                                </div>
                            </div>
                            <div
                                class="m-4 h-[420px] rounded-sm overflow-auto mr-0"
                                v-if="filteredRecipes.length"
                            >
                                <div
                                    class="flex gap-5 h-20 items-center justify-between my-7"
                                    v-for="(item, index) in filteredRecipes"
                                    :key="index"
                                >
                                    <div
                                        class="bg-primary w-28 h-20 rounded-md overflow-hidden"
                                    >
                                        <img :src="item?.image?.url" alt="" />
                                    </div>
                                    <div class="w-7/12">
                                        <h3 class="font-bold">
                                            {{ item.name }}
                                        </h3>
                                        <p class="text-grey text-xs">
                                            {{ item.description }}
                                        </p>
                                    </div>
                                    <div class="pr-4">
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
                                v-if="!filteredRecipes.length && !isLoading"
                                class="m-4"
                            >
                                Brak pasujących przepisów
                            </div>
                            <Loader
                                v-if="isLoading"
                                class="top-[30%] left-[11%]"
                            />
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from "@headlessui/vue";
import { getLocaleDate } from "../../common/utils/datesHelpers";
import Recipe from "../../Recipe/models/Recipe";
import Loader from "../../common/components/Loader.vue";

const props = defineProps({
    date: String,
});
const allRecipes = ref([]);
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

watch(isOpenModal, () => {
    if (!isOpenModal.value) return;

    Recipe.getRecipes({
        include: "image",
    })
        .then((res) => {
            allRecipes.value = res;
        })
        .finally(() => {
            isLoading.value = false;
        });
});

const filteredRecipes = computed(() => {
    if (searchValue.value.trim().length > 0) {
        return allRecipes.value.filter((recipe) =>
            recipe.name
                .toLowerCase()
                .includes(searchValue.value.trim().toLocaleLowerCase())
        );
    }

    return allRecipes.value;
});
</script>

<style lang="scss" scoped>
.meal-block {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 1rem;
    padding-top: 0.8rem;
    box-shadow: 2px 3px 12px $alpha-dark;
    height: 110px;

    &__element {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        height: 100px;
        cursor: pointer;
    }
}
</style>
