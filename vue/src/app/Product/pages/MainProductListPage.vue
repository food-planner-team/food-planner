<template>
    <main class="main">
        <div class="wrapper">
            <div class="h-full flex flex-col">
                <h1 class="font-bold text-2xl m-5 pl-3">Lista produktów</h1>
                <div class="m-5 pl-3">
                    <p class="pb-2 text-sm text-gray-500">
                        <label for="search">WYSZUKAJ PRODUKT</label>
                    </p>
                    <div class="flex flex-wrap gap-6">
                        <input
                            type="search"
                            id="search"
                            class="rounded-lg w-full lg:w-[29rem]"
                            placeholder="Wyszukaj"
                            v-model="searchValue"
                            @keyup.enter="getProducts()"
                        />
                        <button
                            class="hidden lg:inline-flex justify-center rounded-md border border-transparent bg-primary-dark px-12 w-[200px] py-2 text-base font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            @click="getProducts()"
                        >
                            Szukaj
                        </button>
                    </div>
                </div>
                <div class="h-full relative">
                    <div
                        class="lg:overflow-y-scroll relative justify-items-center pb-5 pt-1 lg:absolute left-0 top-0 h-full w-full"
                        :class="
                            products.length > 3
                                ? 'grid products-grid'
                                : 'flex flex-wrap gap-10 justify-center lg:justify-start ml-8 mr-8'
                        "
                        ref="scrollComponent"
                    >
                        <template v-if="!isLoading">
                            <MainProductCard
                                v-for="product in products"
                                :key="product.id"
                                :product="product"
                            />
                        </template>
                        <Loader
                            v-else
                            class="m-auto col-start-2 col-span-2 3xl:col-start-3 3xl:col-span-1"
                        />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup>
import { ref, onMounted } from "vue";
import MainProductCard from "../components/MainProductCard.vue";
import Loader from "../../common/components/Loader.vue";
import MainProduct from "../models/MainProduct";
import { useInfiniteScroll } from "@vueuse/core";

const searchValue = ref("");
const products = ref([]);
const isLoading = ref(false);

const page = ref(1);
const scrollComponent = ref(null);

const getProducts = () => {
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

onMounted(() => {
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
