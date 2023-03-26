<template>
    <main class="main">
        <div class="wrapper">
            <div class="m-5">
                <h1 class="font-bold text-2xl mb-3">
                    Dodawanie nowego przepisu
                </h1>
                <span class="text-gray-500">
                    Wypełnij dane dotyczące przepisu, następnie dodaj produkty
                    potrzebne do przygotowania przepisu.
                </span>
            </div>
            <div class="m-5 flex gap-10">
                <div class="w-7/12 3xl:w-5/12">
                    <h2 class="font-bold text-xl mb-3">
                        Podstawowe informacje
                    </h2>
                    <div class="flex flex-col gap-5">
                        <div class="flex flex-col">
                            <label class="mb-2" for="name"
                                >Nazwa przepisu</label
                            >
                            <input
                                class="border border-gray-300 rounded-md p-2"
                                type="text"
                                id="name"
                                placeholder="Nazwa przepisu"
                                v-model="name"
                            />
                        </div>

                        <div class="flex flex-col">
                            <label class="mb-2" for="image">Zdjęcie</label>
                            <input
                                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-white focus:outline-blue-600 outline-offset-1"
                                type="file"
                                id="image"
                                v-on:change="onFileChange"
                            />
                        </div>
                        <div class="flex flex-1 gap-5">
                            <div class="flex flex-col w-full">
                                <label class="mb-2 flex gap-2" for="time"
                                    >Czas<span
                                        class="material-symbols-outlined text-gray-500"
                                        data-te-toggle="tooltip"
                                        title="Podaj czas przygotowania w minutach."
                                    >
                                        info
                                    </span></label
                                >
                                <input
                                    class="border border-gray-300 rounded-md p-2"
                                    type="text"
                                    id="time"
                                    placeholder="Czas"
                                    v-model="time"
                                />
                            </div>
                            <div class="flex flex-col w-full">
                                <label class="mb-2 flex gap-2" for="kcal"
                                    >Kaloryczność
                                    <span
                                        class="material-symbols-outlined text-gray-500"
                                        data-te-toggle="tooltip"
                                        title="Podaj ilość kalorii w porcji"
                                    >
                                        info
                                    </span></label
                                >

                                <input
                                    class="border border-gray-300 rounded-md p-2"
                                    type="text"
                                    id="kcal"
                                    placeholder="Kaloryczność"
                                    v-model="kcal"
                                />
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <label class="mb-2" for="description"
                                >Opis przepisu</label
                            >
                            <textarea
                                class="border border-gray-300 rounded-md p-2 min-h-[200px]"
                                style="resize: none"
                                id="description"
                                placeholder="Opis przepisu"
                                v-model="description"
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div class="w-full">
                    <div class="flex justify-between mb-3">
                        <h2 class="font-bold text-xl mb-3 pl-3 text-center">
                            Produkty potrzebne do przygotowania przepisu
                        </h2>
                        <AddProductModal @add-product="addProduct" />
                    </div>
                    <div
                        class="flex flex-wrap gap-9 overflow-y-scroll h-[500px] 3xl:h-[53rem] p-2"
                    >
                        <template v-if="products.length">
                            <template
                                v-for="product in products"
                                :key="product.id"
                            >
                                <ProductCard
                                    :product="product"
                                    @remove-product="removeProduct"
                                    @update-product="updateProduct"
                                />
                            </template>
                        </template>
                        <template v-else>
                            <div
                                class="flex flex-col gap-5 self-center mx-auto"
                            >
                                <span class="text-gray-500">
                                    Brak produktów
                                </span>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
            <div class="mx-5 flex justify-end">
                <button
                    class="inline-flex justify-center rounded-md border border-transparent ml-5 bg-primary-dark px-12 py-2 text-base font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="createRecipe"
                >
                    Dodaj przepis
                </button>
            </div>
        </div>
    </main>
</template>
<script setup>
import { ref } from "vue";
import ProductCard from "../../Recipe/components/ProductCard.vue";
import AddProductModal from "../components/AddProductModal.vue";
import Recipe from "../../Planner/models/Recipe";
import { useStore } from "vuex";

const store = useStore();

const products = ref([]);
const name = ref("");
const image = ref(null);
const description = ref("");
const time = ref("");
const kcal = ref("");

const onFileChange = (e) => {
    image.value = e.target.files || e.dataTransfer.files;
};

const addProduct = (product) => {
    const productExists = products.value.find(
        (p) => p.name.toLowerCase() === product.name.toLowerCase()
    );
    if (productExists) {
        store.commit("Toast/addToast", {
            message: "Ten produkt znajduje się już w przepisie",
            type: "warning",
        });
        return;
    }

    products.value.push({ ...product, optional: false, quantity: null });
};

const removeProduct = (productId) => {
    products.value = products.value.filter(
        (product) => product.id !== productId
    );
};

const updateProduct = (product) => {
    const index = products.value.findIndex((p) => p.id === product.id);

    products.value[index] = product;
};

const createRecipe = () => {
    Recipe.createRecipe("", {
        name: name.value,
        description: description.value,
        preparation_time: time.value,
        kcal: kcal.value,
        image: image.value,
        products: products.value,
    });
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
