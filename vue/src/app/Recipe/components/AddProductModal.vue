<template>
    <button
        class="inline-flex justify-center rounded-md border border-transparent ml-5 bg-primary-dark px-12 py-2 text-base font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        @click="openModal"
    >
        Dodaj produkt
    </button>
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
                            class="w-full max-w-5xl h-[40rem] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all flex flex-col"
                        >
                            <div
                                class="m-4 flex justify-between items-center mr-7"
                            >
                                <DialogTitle
                                    as="h3"
                                    class="text-2xl font-bold leading-6 text-gray-900 relative after:absolute after:w-[400px] after:h-px after:bg-grey after:ml-6 after:top-[50%]"
                                >
                                    Dodaj produkt
                                </DialogTitle>
                                <button
                                    type="button"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-primary-dark px-12 py-2.5 text-sm font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    @click="closeModal"
                                >
                                    Powrót
                                </button>
                            </div>
                            <div class="ml-4">Szukaj produktu</div>
                            <div class="m-4 flex flex-col">
                                <div class="flex justify-between pr-2.5">
                                    <input
                                        type="search"
                                        id="search"
                                        class="rounded-md w-3/4"
                                        placeholder="Wyszukaj"
                                        v-model="searchValue"
                                        @keyup.enter="getProducts()"
                                    />
                                    <button
                                        class="inline-flex justify-center rounded-md border border-transparent bg-primary-dark px-12 w-[200px] py-2 text-sm font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        @click="getProducts()"
                                    >
                                        Szukaj
                                    </button>
                                </div>
                            </div>
                            <div
                                class="m-4 h-[420px] rounded-sm overflow-auto mr-0 p-1"
                                v-if="products.length"
                                ref="scrollComponent"
                            >
                                <div
                                    class="h-36 rounded-lg flex items-center gap-5 p-5 mb-2 shadow-md"
                                    v-for="(product, index) in products"
                                    :key="index"
                                >
                                    <div
                                        class="w-[120px] h-[120px] rounded-md ml-1 flex items-center"
                                    >
                                        <img
                                            v-if="
                                                product.defaultProduct?.image
                                                    ?.url
                                            "
                                            :src="`${product.defaultProduct?.image?.url}.webp`"
                                            alt=""
                                            class="rounded-md"
                                        />
                                    </div>
                                    <div
                                        class="flex flex-col justify-center flex-1 gap-2 p-1 h-full"
                                    >
                                        <h1 class="font-bold text-xl">
                                            {{ product.name }}
                                        </h1>
                                        <div class="text-base">
                                            <p>
                                                Miara:
                                                {{ product.quantity }}
                                                {{ product.quantity_type }}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="pr-4">
                                        <button
                                            class="inline-flex justify-center rounded-md border border-transparent bg-white px-12 py-2.5 text-sm font-medium text-black hover:bg-primary-dark hover:text-white border-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            @click="
                                                $emit('addProduct', product)
                                            "
                                        >
                                            Wybierz produkt
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div
                                v-if="!products.length && !isLoading"
                                class="m-4"
                            >
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
import MainProduct from "../../Product/models/MainProduct";

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

// function addProduct(product) {
//     emit("addProduct", product);
// }

const page = ref(1);
const scrollComponent = ref(null);

const getProducts = () => {
    products.value = [];
    isLoading.value = true;
    page.value = 1;

    MainProduct.getMainProducts({
        include: "defaultProduct.image",
        search: searchValue.value,
        page: page.value,
    })
        .then((res) => {
            products.value = res.products;
            page.value++;
        })
        .finally(() => {
            isLoading.value = false;
        });
};

watch(isOpenModal, () => {
    if (!isOpenModal.value) return;

    getProducts();
});

const getProductsOnScroll = () => {
    MainProduct.getMainProducts({
        include: "defaultProduct.image",
        search: searchValue.value,
        page: page.value,
    }).then((res) => {
        if (page.value > res.meta.pagination.total_pages) return;

        products.value.push(...res.products);
        page.value++;
    });
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
