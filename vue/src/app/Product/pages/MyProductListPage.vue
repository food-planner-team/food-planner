<template>
    <main class="main">
        <div class="wrapper">
            <div class="h-full flex flex-col">
                <div class="m-5 mt-0 flex justify-between">
                    <div>
                        <h1 class="font-bold text-2xl my-5 xs:mt-0">
                            Moje produkty
                        </h1>
                        <div>
                            <p class="pb-2 text-sm text-gray-500">
                                <label for="search">NAZWA PRODUKTU</label>
                            </p>
                            <div class="flex flex-wrap gap-6">
                                <input type="search" id="search" class="rounded-lg w-full md:w-[28rem]"
                                    placeholder="Wyszukaj" v-model="searchValue" @keyup.enter="getProducts()" />
                                <div class="flex gap-6 flex-wrap justify-center w-full md:w-auto">
                                    <button
                                        class="hidden lg:inline-flex justify-center rounded-md border border-transparent bg-primary-dark px-12 w-[200px] py-2 text-base font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 items-center"
                                        @click="getProducts()">
                                        Szukaj
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="my-5 flex flex-col items-end gap-4">
                        <AddProductModal />
                        <EditProductModal />
                        <RecipeFilters @handleActiveFilter="handleActiveFilter" />
                    </div>
                </div>
                <div class="h-full relative">
                    <div class="lg:overflow-y-scroll relative justify-items-center pb-5 pt-1 lg:absolute left-0 top-0 h-full w-full"
                        :class="products.length > 3
                            ? 'grid products-grid'
                            : 'flex flex-wrap gap-10 justify-center lg:justify-start xl:ml-8 xl:mr-8'
                            " ref="scrollComponent">
                        <template v-if="!isLoading">
                            <ProductCardMain v-for="product in products" :key="product.id" :product="product"
                                :links="links(product.id)">
                                <RecipeCardInfo :bg-color="statusBgColor(product.status)"
                                    :text-color="statusTextColor(product.status)">
                                    <template #icon> info </template>
                                    {{ statusLabel(product.status) }}
                                </RecipeCardInfo>
                                <RecipeCardInfo>
                                    <template #icon> table_chart_view </template>
                                    {{ product.quantity }} {{ product.quantityType }}
                                </RecipeCardInfo>
                            </ProductCardMain>
                        </template>
                        <Loader v-else class="m-auto col-start-2 col-span-2 3xl:col-start-3 3xl:col-span-1" />
                        <div v-if="!products.length && !isLoading">
                            <p class="text-center text-gray-500">
                                Brak produktów
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";
import ProductCardMain from "../components/ProductCardMain.vue";
import Loader from "../../common/components/Loader.vue";
import Product, { ProductStatusEnum } from "../models/Product";
import { useInfiniteScroll } from "@vueuse/core";
import RecipeFilters from "../../Recipe/components/RecipeFilters.vue";
import RecipeCardInfo from "../../Recipe/components/RecipeCardInfo.vue";
import AddProductModal from "../../Product/components/AddProductModal.vue";
import EditProductModal from "../components/EditProductModal.vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const searchValue = ref("");
const products = ref([]);
const isLoading = ref(false);
const filterValue = ref(ProductStatusEnum.ALL);

const page = ref(1);
const scrollComponent = ref(null);

const links = (id) => {
    return [
        {
            name: "edytuj",
            pathName: "MyProductListPage",
            query: { 'edit': id },
            icon: "edit",
            action: "",
        },
        {
            name: "usuń",
            pathName: "",
            icon: "delete",
            action: () => handleRemoveProduct(id),
            disabled: false,
        },
    ];
};

const getProducts = async () => {
    products.value = [];
    isLoading.value = true;
    page.value = 1;

    const response = await Product.getProducts({
        search: searchValue.value,
        page: page.value,
        limit: 20,
        status:
            filterValue.value !== ProductStatusEnum.ALL
                ? filterValue.value
                : null,
    });

    products.value = response.products;
    page.value++;
    isLoading.value = false;
};

watch(route, () => {
    if (route.query.refresh) {
        getProducts();
    }

    const newQuery = { ...route.query };
    delete newQuery.refresh;
    router.push({ query: newQuery });
});

onMounted(() => {
    getProducts();
    const newQuery = { ...route.query };
    delete newQuery.edit;
    router.push({ query: newQuery });
});

const getProductsOnScroll = async () => {
    const response = await Product.getProducts({
        search: searchValue.value,
        page: page.value,
        limit: 20,
        status:
            filterValue.value !== ProductStatusEnum.ALL
                ? filterValue.value
                : null,
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

const handleActiveFilter = (filter) => {
    filterValue.value = filter;
};

watch(filterValue, () => {
    getProducts();
});

const handleRemoveProduct = async (productId) => {
    const productIndex = products.value.findIndex(
        (product) => product.id === productId
    );
    const response = await Product.removeProduct(productId);

    if (response.data.status_code === 200) {
        products.value.splice(productIndex, 1);
    }
};

const statusLabel = (status) => {
    switch (status) {
        case ProductStatusEnum.ACCEPTED:
            return "Zaakceptowany";
        case ProductStatusEnum.PENDING:
            return "Do weryfikacji";
        case ProductStatusEnum.REJECTED:
            return "Odrzucony";
        default:
            return "Nieznany";
    }
};

const statusBgColor = (status) => {
    switch (status) {
        case ProductStatusEnum.ACCEPTED:
            return "bg-[#E4FFDB]";
        case ProductStatusEnum.PENDING:
            return "bg-[#FFF5DC]";
        case ProductStatusEnum.REJECTED:
            return "bg-[#FFEAEA]";
        default:
            return "bg-gray-300";
    }
};

const statusTextColor = (status) => {
    switch (status) {
        case ProductStatusEnum.ACCEPTED:
            return "text-[#5D8F4C]";
        case ProductStatusEnum.PENDING:
            return "text-[#9F6D21]";
        case ProductStatusEnum.REJECTED:
            return "text-[#B03E3E]";
        default:
            return "text-gray-500";
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
