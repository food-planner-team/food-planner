<template>
    <main class="main">
        <div class="wrapper">
            <div class="h-full flex flex-col">
                <template v-if="!isLoading">
                    <div class="m-5">
                        <h1 class="font-bold text-2xl mb-3">
                            Edycja przepisu
                        </h1>
                        <span class="text-gray-500">
                            Edytuj dane dotyczące przepisu.
                        </span>
                    </div>
                    <div class="m-5 mb-0 flex gap-10 flex-col xl:flex-row h-full">
                        <div class="xl:w-7/12 3xl:w-5/12">
                            <h2 class="font-bold text-xl mb-3">
                                Podstawowe informacje
                            </h2>
                            <div class="flex flex-col gap-4">
                                <div class="flex flex-col">
                                    <label class="mb-2" for="name">Nazwa przepisu</label>
                                    <input class="border border-gray-300 rounded-md p-2" type="text" id="name"
                                        placeholder="Nazwa przepisu" v-model="name"
                                        :class="errors.name ? 'bg-red-100 ' : ''" @keypress="errors.name = false" />
                                </div>
                                <div class="flex flex-col">
                                    <label class="mb-2" for="description">Krótki opis</label>
                                    <input class="border border-gray-300 rounded-md p-2" type="text" id="description"
                                        placeholder="Krótki opis" v-model="description" :class="errors.description ? 'bg-red-100 ' : ''
                                            " @keypress="errors.description = false" />
                                </div>
                                <div class="flex gap-5">
                                    <div class="flex flex-col">
                                        <label class="mb-2" for="image">Zdjęcie</label>
                                        <input class="hidden" type="file" id="image" v-on:change="onFileChange"
                                            ref="imageInput" :class="errors.image ? 'bg-red-100 ' : ''" />
                                        <div class="w-[120px] h-[120px] rounded-md items-center cursor-pointer overflow-hidden"
                                            :style="errors.image ? 'border: 4px solid rgb(255 232 232)' : 'border: 1px solid #d1d5db'"
                                            @click="handleChangeImage">
                                            <img v-if="newImage" :src="newImage" class="rounded-md" />
                                            <img v-else :src="image" class="rounded-md" />
                                        </div>
                                    </div>
                                    <div class="flex flex-col w-full justify-between">
                                        <div class="flex flex-col">
                                            <label class="mb-2 flex gap-2" for="time">Czas<span
                                                    class="material-symbols-outlined text-gray-500" data-te-toggle="tooltip"
                                                    title="Podaj czas przygotowania w minutach.">
                                                    info
                                                </span></label>
                                            <input class="border border-gray-300 rounded-md p-2" type="number" id="time"
                                                placeholder="Czas" v-model="time" @keypress="errors.time = false" :class="errors.time ? 'bg-red-100 ' : ''
                                                    " />
                                        </div>
                                        <div class="flex flex-col">
                                            <label class="mb-2 flex gap-2" for="kcal">Kaloryczność
                                                <span class="material-symbols-outlined text-gray-500"
                                                    data-te-toggle="tooltip" title="Podaj ilość kalorii w porcji">
                                                    info
                                                </span></label>

                                            <input class="border border-gray-300 rounded-md p-2" type="number" id="kcal"
                                                placeholder="Kaloryczność" v-model="kcal" @keypress="errors.kcal = false"
                                                :class="errors.kcal ? 'bg-red-100 ' : ''
                                                    " />
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col">
                                    <label class="mb-2" for="preparation">Opis przygotowania</label>
                                    <textarea class="border border-gray-300 rounded-md p-2 min-h-[160px]"
                                        style="resize: none" id="preparation" placeholder="Opis przygotowania"
                                        v-model="preparation" @keypress="errors.preparation = false" :class="errors.preparation ? 'bg-red-100 ' : ''
                                            "></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="w-full flex flex-col gap-3">
                            <div class="flex flex-col md:flex-row justify-between">
                                <h2 class="font-bold text-xl mb-3 pl-3 text-center">
                                    Produkty potrzebne do przygotowania przepisu
                                </h2>
                                <AddProductModal @add-product="addProduct" />
                            </div>
                            <div class="relative w-full h-full">
                                <div class="justify-items-center md:pl-2 md:pr-4 bg-purple-500-400 w-full max-h-full overflow-y-scroll xl:absolute left-0 top-0 h-full"
                                    :class="products.length > 2
                                        ? 'products-wrapper'
                                        : 'flex flex-wrap gap-10 justify-center md:justify-start'
                                        ">
                                    <template v-if="products.length">
                                        <template v-for="product in products" :key="product.id">
                                            <ProductCard :product="product" @remove-product="removeProduct"
                                                @update-product="updateProduct" @remove-error="removeError" :error="errors.quantities.find(
                                                    (quantity) =>
                                                        quantity.id ===
                                                        product.id
                                                )
                                                    " />
                                        </template>
                                    </template>
                                    <template v-else>
                                        <div class="flex flex-col gap-5 self-center mx-auto">
                                            <span :class="errors.products
                                                ? 'text-red-500'
                                                : 'text-gray-500'
                                                ">
                                                Brak produktów
                                            </span>
                                        </div>
                                    </template>
                                </div>
                            </div>

                            <div class="flex justify-center sm:justify-end">
                                <button
                                    class="inline-flex justify-center rounded-md border border-transparent bg-primary-dark px-12 py-2 text-base font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    @click="updateRecipe">
                                    Aktualizuj przepis
                                </button>
                            </div>
                        </div>
                    </div>
                </template>
                <Loader v-else class="m-auto col-start-2 col-span-2 3xl:col-start-3 3xl:col-span-1" />
            </div>
        </div>
    </main>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
import ProductCard from "../../Recipe/components/ProductCard.vue";
import AddProductModal from "../components/AddProductModal.vue";
import Recipe from "../models/Recipe";
import { useStore } from "vuex";
import { isFileImage } from "../../common/utils/validateImage";
import { useRoute } from "vue-router";
import Loader from "../../common/components/Loader.vue";

const route = useRoute();
const recipe = ref({});
const isLoading = ref(true);
const store = useStore();
const products = ref([]);
const name = ref("");
const image = ref(null);
const newImage = ref(null);
const preparation = ref("");
const time = ref("");
const kcal = ref("");
const description = ref("");
const imageInput = ref(null);
const errors = reactive({
    name: false,
    image: false,
    preparation: false,
    time: false,
    kcal: false,
    description: false,
    quantities: [],
});

const getRecipe = async () => {
    recipe.value = {};
    isLoading.value = true;

    const response = await Recipe.getRecipeById(route.params.id);

    recipe.value = response;
    isLoading.value = false;
};

onMounted(async () => {
    await getRecipe();

    name.value = recipe.value.name;
    preparation.value = recipe.value.preparation;
    time.value = recipe.value.preparationTime;
    kcal.value = recipe.value.kcal;
    description.value = recipe.value.description;
    image.value = recipe.value.image.url;
    products.value = recipe.value.recipeItems.map((product) => {
        return {
            id: product.product.id,
            image: product.product?.image,
            name: product.product.name,
            quantity: product.quantity,
            quantityType: product.product.quantityType,
            optional: Boolean(product.optional),
        };
    });

});

const handleChangeImage = () => {
    imageInput.value.click();
};

const onFileChange = (e) => {
    if (!isFileImage(e.target.files[0])) {
        store.commit("Toast/addToast", {
            message: "Nieprawidłowy format pliku",
            type: "warning",
        });

        imageInput.value.value = "";
        return;
    }

    image.value = e.target.files || e.dataTransfer.files;
    newImage.value = e.target.files || e.dataTransfer.files;
    const reader = new FileReader();
    reader.onload = function (e) {
        newImage.value = e.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
    errors.image = false;
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
    errors.products = false;
    store.commit("Toast/addToast", {
        message: "Dodano produkt do przepisu",
        type: "success",
    });

    errors.quantities = products.value.map((p) => {
        return { id: p.id, error: false };
    });
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

const removeError = (productsId) => {
    errors.quantities = errors.quantities.map((quantity) => {
        if (quantity.id === productsId) {
            quantity.error = false;
        }
        return quantity;
    });
};

const updateRecipe = async () => {
    if (
        !products.value.length ||
        !name.value ||
        !image.value ||
        !preparation.value ||
        !time.value ||
        !kcal.value ||
        !description.value ||
        products.value.filter((p) => p.quantity).length !==
        products.value.length
    ) {
        store.commit("Toast/addToast", {
            message: "Popraw błędy",
            type: "warning",
        });

        errors.name = name.value ? false : true;
        errors.image = image.value ? false : true;
        errors.preparation = preparation.value ? false : true;
        errors.time = time.value > 0 ? false : true;
        errors.kcal = kcal.value > 0 ? false : true;
        errors.description = description.value ? false : true;
        errors.products = products.value.length ? false : true;

        errors.quantities = products.value.map((p) => {
            return { id: p.id, error: p.quantity > 0 ? false : true };
        });

        return;
    }

    const data = {
        name: name.value,
        description: description.value,
        preparation: preparation.value,
        preparation_time: time.value,
        kcal: kcal.value,
        products: JSON.stringify(
            products.value.map((product) => {
                return {
                    product_id: product.id,
                    quantity: product.quantity,
                    optional: product.optional,
                };
            })
        ),
    };

    if (image.value) {
        data.image = image.value[0];
    }

    const response = await Recipe.updateRecipe(route.params.id, data);

    if (response) {
        store.commit("Toast/addToast", {
            message: "Przepis został zaktualizowany",
            type: "success",
        });
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
    padding: 2rem;
    overflow: hidden;
    height: 100%;

    @media screen and (max-width: 768px) {
        padding-inline: 0;
    }
}

.products-wrapper {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}
</style>
