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
                <input
                    type="search"
                    id="search"
                    class="rounded-lg w-[29rem]"
                    placeholder="Wyszukaj"
                    v-model="searchValue"
                    @keyup.enter="searchValue.length && getProducts()"
                />
                <button
                    class="inline-flex justify-center rounded-md border border-transparent ml-5 bg-primary-dark px-12 w-[200px] py-2 text-base font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="searchValue.length && getProducts()"
                >
                    Szukaj
                </button>
                <AddMainProductModal
                    :products="chosenProducts"
                    :product-name="searchValue"
                />
            </div>
            <div
                class="m-5 p-7 pl-3 pt-8 flex flex-wrap gap-16 justify-between h-[550px] 3xl:h-[57rem] overflow-y-scroll relative"
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
                <Loader v-else class="self-center mx-auto" />
                <p v-if="!searchValue" class="self-center mx-auto">
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

const searchValue = ref("");
const products = ref([]);
const chosenProducts = ref([]);
const isLoading = ref(false);

const getProducts = () => {
    chosenProducts.value = [];
    isLoading.value = true;

    Product.getProducts({
        include: "image",
        search: searchValue.value,
        connected: 0,
        limit: 9999,
    })
        .then((res) => {
            products.value = res;
        })
        .finally(() => {
            isLoading.value = false;
        });
};

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
    padding: 2rem;
    overflow: hidden;
}
</style>
