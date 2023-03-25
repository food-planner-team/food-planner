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
                            />
                        </div>

                        <div class="flex flex-col">
                            <label class="mb-2" for="formFile">Zdjęcie</label>
                            <input
                                class="relative rounded-md block w-full min-w-0 flex-auto border border-gray-300 py-2 px-3 file:-mx-3 file:-my-2 file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-2 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] file:hover:cursor-pointer outline-none focus:outline-blue-600 outline-offset-1"
                                type="file"
                                id="formFile"
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
                                v-for="(product, index) in products"
                                :key="product.id"
                            >
                                <ProductCard
                                    @remove-product="removeProduct"
                                    v-model:product="products[index]"
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

const products = ref([]);

const addProduct = (product) => {
    const productExists = products.value.find(
        (p) => p.name.toLowerCase() === product.name.toLowerCase()
    );
    if (productExists) {
        alert("Produkt już jest dodany do listy");
        return;
    }

    products.value.push({ ...product, optional: false, quantaity: 1 });
    // products.value.push(product);
    console.log(products.value);
};

const removeProduct = (productId) => {
    products.value = products.value.filter(
        (product) => product.id !== productId
    );
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
