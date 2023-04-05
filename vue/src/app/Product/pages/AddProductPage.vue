<template>
    <main class="main">
        <div class="wrapper">
            <h1 class="font-bold text-2xl m-5 pl-3">
                Dodawanie nowego produktu
            </h1>
            <div class="m-5 pl-3">
                <p class="pb-2 text-sm text-gray-500">
                    <label for="search">NAZWA PRODUKTU</label>
                </p>
                <div class="flex flex-wrap gap-6">
                    <input
                        type="search"
                        id="search"
                        class="rounded-lg w-full md:w-[29rem]"
                        placeholder="Wyszukaj"
                        v-model="searchValue"
                        @keyup.enter="searchValue.length && getProducts()"
                    />
                    <div
                        class="flex gap-6 flex-wrap justify-center w-full md:w-auto"
                    >
                        <button
                            class="hidden lg:inline-flex justify-center rounded-md border border-transparent bg-primary-dark px-12 w-[200px] py-2 text-base font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 items-center"
                            @click="searchValue.length && getProducts()"
                        >
                            Szukaj
                        </button>
                        <AddMainProductModal
                            :chosen-products="chosenProducts"
                            v-model:product-name="searchValue"
                            v-model:products="products"
                        />
                    </div>
                </div>
            </div>
            <div
                class="h-auto min-h-[35vh] lg:h-[550px] 3xl:h-[57rem] lg:overflow-y-scroll relative grid products-grid justify-items-center pb-5 pt-5"
                ref="scrollComponent"
            >
                <template v-if="!isLoading">
                    <ProductCard
                        v-for="product in products"
                        :key="product.id"
                        :product="product"
                        :chosen-products="chosenProducts"
                        @choose-product="handleChooseProduct"
                        @remove-product="handleRemoveProduct"
                    />
                </template>
                <Loader
                    v-else
                    class="m-auto col-start-2 col-span-2 3xl:col-start-3 3xl:col-span-1"
                />
                <p
                    v-if="!searchValue"
                    class="m-auto col-start-2 col-span-2 3xl:col-start-3 3xl:col-span-1"
                >
                    Wpisz nazwę i wyszukaj produkt!
                </p>
            </div>
        </div>
    </main>
</template>
<script setup>
import { ref } from "vue";
import AddMainProductModal from "../components/AddMainProductModal.vue";
import ProductCard from "../components/ProductCard.vue";
import Product from "../models/Product.js";
import Loader from "../../common/components/Loader.vue";
import { useInfiniteScroll } from "@vueuse/core";

const searchValue = ref("");
const products = ref([]);
const chosenProducts = ref([]);
const isLoading = ref(false);

const page = ref(1);
const scrollComponent = ref(null);

const getProducts = () => {
    chosenProducts.value = [];
    isLoading.value = true;
    page.value = 1;

    Product.getProducts({
        include: "image",
        search: searchValue.value,
        connected: 0,
        limit: 20,
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

const getProductsOnScroll = () => {
    Product.getProducts({
        include: "image",
        search: searchValue.value,
        connected: 0,
        limit: 20,
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

const handleChooseProduct = (id) => {
    chosenProducts.value.push(...products.value.filter((e) => e.id === id));
};

const handleRemoveProduct = (id) => {
    chosenProducts.value = chosenProducts.value.filter((e) => e.id !== id);
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
