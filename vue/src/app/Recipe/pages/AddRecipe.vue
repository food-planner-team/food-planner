<template>
    <main class="main">
        <div class="wrapper">
            <div class="h-full flex flex-col">
                <div class="m-5">
                    <h1 class="font-bold text-2xl mb-3">
                        Dodawanie nowego przepisu
                    </h1>
                    <span class="text-gray-500">
                        Wypełnij dane dotyczące przepisu, następnie dodaj
                        produkty potrzebne do przygotowania przepisu.
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
                                    placeholder="Nazwa przepisu" v-model="name" :class="errors.name ? 'bg-red-100 ' : ''"
                                    @keypress="errors.name = false" />
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
                                    <input class="hidden" type="file" id="image" v-on:change="onFileChange" ref="imageInput"
                                        :class="errors.image ? 'bg-red-100 ' : ''" />
                                    <div class="w-[120px] h-[120px] rounded-md items-center cursor-pointer overflow-hidden"
                                        @click="handleChangeImage">
                                        <img v-if="newImage" :src="newImage" class="rounded-md" />
                                        <img v-else src="../../common/assets/imageAdd.jpg" class="rounded-md" />
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
                                            <span class="material-symbols-outlined text-gray-500" data-te-toggle="tooltip"
                                                title="Podaj ilość kalorii w porcji">
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
                                <textarea class="border border-gray-300 rounded-md p-2 min-h-[160px]" style="resize: none"
                                    id="preparation" placeholder="Opis przygotowania" v-model="preparation"
                                    @keypress="errors.preparation = false" :class="errors.preparation ? 'bg-red-100 ' : ''
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
                                @click="createRecipe">
                                Dodaj przepis
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup>
import { ref, reactive } from "vue";
import ProductCard from "../../Recipe/components/ProductCard.vue";
import AddProductModal from "../components/AddProductModal.vue";
import Recipe from "../models/Recipe";
import { useStore } from "vuex";
import { isFileImage } from "../../common/utils/validateImage";

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

    console.log('products', products.value);
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

const createRecipe = async () => {
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
            message: "Nie wszystkie pola zostały wypełnione",
            type: "warning",
        });

        errors.name = name.value ? false : true;
        errors.image = image.value ? false : true;
        errors.preparation = preparation.value ? false : true;
        errors.time = time.value ? false : true;
        errors.kcal = kcal.value ? false : true;
        errors.description = description.value ? false : true;
        errors.products = products.value.length ? false : true;

        errors.quantities = products.value.map((p) => {
            return { id: p.id, error: p.quantity ? false : true };
        });

        return;
    }

    const formData = new FormData();
    formData.append("name", name.value);
    formData.append("description", description.value);
    formData.append("preparation", preparation.value);
    formData.append("preparation_time", time.value);
    formData.append("kcal", kcal.value);
    formData.append("image", image.value[0]);
    formData.append(
        "products",
        JSON.stringify(
            products.value.map((product) => {
                return {
                    product_id: product.id,
                    quantity: product.quantity,
                    optional: product.optional,
                };
            })
        )
    );

    try {
        await Recipe.createRecipe(formData);

        store.commit("Toast/addToast", {
            message: "Przepis został dodany",
            type: "success",
        });

        products.value = [];
        name.value = "";
        image.value = null;
        preparation.value = "";
        time.value = "";
        kcal.value = "";
        description.value = "";
        imageInput.value.value = "";
    } catch (err) {
        store.commit("Toast/addToast", {
            message: "Coś poszło nie tak",
            type: "warning",
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
