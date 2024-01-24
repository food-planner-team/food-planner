<template>
    <button
        class="inline-flex justify-center rounded-md border border-transparent bg-primary-dark px-12 py-2 text-base font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        @click="openModal">
        Dodaj produkt
    </button>
    <TransitionRoot appear :show="isOpenModal" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-5xl h-[90dvh] lg:h-[40rem] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all flex flex-col relative">
                            <button class="flex justify-center items-center absolute top-5 right-5 lg:hidden"
                                @click="closeModal">
                                <span class="material-symbols-outlined">
                                    close
                                </span>
                            </button>
                            <div class="m-4 flex justify-between items-center mr-7">
                                <DialogTitle as="h3"
                                    class="text-2xl font-bold leading-6 text-gray-900 relative lg:after:absolute after:w-[400px] after:h-px after:bg-grey after:ml-6 after:top-[50%]">
                                    Dodaj produkt
                                </DialogTitle>
                                <button type="button"
                                    class="hidden lg:inline-flex justify-center rounded-md border border-transparent bg-primary-dark px-12 py-2.5 text-sm font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    @click="closeModal">
                                    Powrót
                                </button>
                            </div>
                            <div class="ml-4">Szukaj produktu</div>
                            <div class="m-4 flex flex-col">
                                <div class="flex justify-between pr-2.5">
                                    <input type="search" id="search" class="rounded-md w-full lg:w-3/4"
                                        placeholder="Wyszukaj" v-model="searchValue" @keyup.enter="getProducts()" />
                                    <button
                                        class="hidden lg:inline-flex justify-center rounded-md border border-transparent bg-primary-dark px-12 w-[200px] py-2 text-sm font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        @click="getProducts()">
                                        Szukaj
                                    </button>
                                </div>
                            </div>
                            <div class="lg:m-4 h-[420px] rounded-sm overflow-auto mr-0 p-1" v-if="products.length"
                                ref="scrollComponent">
                                <div class="lg:h-36 rounded-lg flex flex-col lg:flex-row items-center gap-2 lg:gap-5 p-5 mb-2 shadow-md"
                                    v-for="(product, index) in products" :key="index">
                                    <div class="w-[120px] h-[120px] rounded-md ml-1 flex items-center justify-center">
                                        <img v-if="product?.image?.url" :src="`${product?.image?.url}`" :alt="product.name"
                                            class="rounded-md max-w-full max-h-full mix-blend-multiply" />
                                        <img v-else src="../../common/assets/no-image.jpg" alt="no image placeholder"
                                            class="rounded-md mix-blend-darken" />
                                    </div>
                                    <div class="flex flex-col justify-center flex-1 gap-2 p-1 h-full">
                                        <h1 class="font-bold text-xl">
                                            {{ product.name }}
                                        </h1>
                                        <div class="text-base">
                                            <p>
                                                Miara:
                                                {{ product.quantity }}
                                                {{ product.quantityType }}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="lg:pr-4">
                                        <button
                                            class="inline-flex justify-center rounded-md border border-transparent bg-white px-12 py-2.5 text-sm font-medium text-black hover:bg-primary-dark hover:text-white border-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            @click="
                                                $emit('addProduct', product)
                                                ">
                                            Wybierz produkt
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div v-if="!products.length && !isLoading" class="m-4">
                                Brak pasujących produktów
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
import Loader from "../../common/components/Loader.vue";
import { useInfiniteScroll } from "@vueuse/core";
import Product from "../../Product/models/Product";

const props = defineProps({
    date: String,
});
const products = ref([]);
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

const emit = defineEmits(["addProduct"]);

const page = ref(1);
const scrollComponent = ref(null);

const getProducts = async () => {
    products.value = [];
    isLoading.value = true;
    page.value = 1;

    const response = await Product.getProducts({
        search: searchValue.value,
        page: page.value,
        limit: 10,
    });

    products.value = response.products;
    page.value++;
    isLoading.value = false;
};

watch(isOpenModal, () => {
    if (!isOpenModal.value) return;

    getProducts();
});

const getProductsOnScroll = async () => {
    const response = await Product.getProducts({
        search: searchValue.value,
        page: page.value,
        limit: 10,
    });

    if (page.value > response.meta.pagination.total_pages) return;

    products.value.push(...response.products);
    page.value++;
};

useInfiniteScroll(
    scrollComponent,
    () => {
        getProductsOnScroll();
    },
    { distance: 300 }
);
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
