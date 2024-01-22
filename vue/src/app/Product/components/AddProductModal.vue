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
                            class="w-full max-w-[500px] h-[90dvh] lg:h-[40rem] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all flex flex-col relative">
                            <button class="flex justify-center items-center absolute top-5 right-5 lg:hidden"
                                @click="closeModal">
                                <span class="material-symbols-outlined">
                                    close
                                </span>
                            </button>
                            <div class="m-4 flex justify-between items-center">
                                <DialogTitle as="h3"
                                    class="text-2xl font-bold leading-6 text-gray-900 relative lg:after:absolute after:w-[400px] ">
                                    Dodaj produkt
                                </DialogTitle>
                                <button type="button"
                                    class="hidden lg:inline-flex justify-center rounded-md border border-transparent bg-primary-dark px-12 py-2.5 text-sm font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    @click="closeModal">
                                    Powrót
                                </button>
                            </div>
                            <div class="w-full h-full flex flex-col p-4 mt-10 pb-0">
                                <div class="flex flex-col gap-4">
                                    <div class="flex flex-col">
                                        <label class="mb-2" for="name">Nazwa produktu</label>
                                        <input class="border border-gray-300 rounded-md p-2" type="text" id="name"
                                            placeholder="Nazwa przepisu" v-model="name"
                                            :class="errors.name ? 'bg-red-100 ' : ''" @keypress="errors.name = false" />
                                    </div>
                                </div>
                                <div class="flex gap-5 pt-5">
                                    <div class="flex flex-col">
                                        <label class="mb-2" for="image">Zdjęcie</label>
                                        <input class="hidden" type="file" id="image" v-on:change="onFileChange"
                                            ref="imageInput" :class="errors.image ? 'bg-red-100 ' : ''" />
                                        <div class="w-[120px] h-[120px] rounded-md items-center cursor-pointer overflow-hidden"
                                            :style="errors.image ? 'border: 4px solid rgb(255 232 232)' : 'border: 1px solid #d1d5db'"
                                            @click="handleChangeImage">
                                            <img v-if="newImage" :src="newImage" class="rounded-md" />
                                            <img v-else src="../../common/assets/imageAdd.jpg" class="rounded-md" />
                                        </div>
                                    </div>
                                    <div class="flex flex-col w-full justify-between">
                                        <div class="flex flex-col">
                                            <label class="mb-2 flex gap-2" for="quantity">Wartość miary</label>
                                            <input class="border border-gray-300 rounded-md p-2" type="number" id="quantity"
                                                min="0" placeholder="Wartość miary" v-model="quantity"
                                                @keypress="errors.quantity = false" :class="errors.quantity ? 'bg-red-100 ' : ''
                                                    " />
                                        </div>
                                        <div class="flex flex-col">
                                            <label class="mb-2 flex gap-2" for="quantityType">
                                                Jednostka miary
                                            </label>
                                            <select
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                                v-model="quantityType" @change="errors.quantityType = false"
                                                :class="errors.quantityType ? 'bg-red-100' : ''">
                                                <option value="g">gramy</option>
                                                <option value="ml">mililitry</option>
                                                <option value="szt">sztuki</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col pt-5">
                                    <label class="mb-2" for="kcal">Ilość kalorii produktu</label>
                                    <input class="border border-gray-300 rounded-md p-2" type="number" id="kcal" min="0"
                                        placeholder="Ilość kalorii produktu" v-model="kcal" :class="errors.kcal ? 'bg-red-100 ' : ''
                                            " @keypress="errors.kcal = false" />
                                </div>
                            </div>
                            <div class="flex justify-center sm:justify-end p-4">
                                <button
                                    class="inline-flex justify-center rounded-md border border-transparent bg-primary-dark px-12 py-2 text-base font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    @click="createProduct">
                                    Dodaj produkt
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { reactive, ref, watch } from "vue";
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from "@headlessui/vue";
import { useStore } from "vuex";
import { isFileImage } from "../../common/utils/validateImage";
import Product from "../models/Product";

const store = useStore();

const name = ref("");
const quantity = ref("");
const quantityType = ref("");
const kcal = ref("");
const image = ref(null);
const newImage = ref(null);
const imageInput = ref(null);
const errors = reactive({
    name: false,
    image: false,
});

const isOpenModal = ref(false);

function closeModal() {
    isOpenModal.value = false;
}

function openModal() {
    isOpenModal.value = true;
    name.value = "";
    kcal.value = "";
    quantity.value = "";
    quantityType.value = null;
    newImage.value = null;
}

watch(isOpenModal, () => {
    if (!isOpenModal.value) return;
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

const createProduct = async () => {
    if (
        !name.value ||
        !quantity.value ||
        !quantityType.value ||
        !kcal.value ||
        !image.value
    ) {
        store.commit("Toast/addToast", {
            message: "Popraw błędy",
            type: "warning",
        });

        errors.name = name.value ? false : true;
        errors.image = image.value ? false : true;
        errors.kcal = kcal.value > 0 ? false : true;
        errors.quantity = quantity.value > 0 ? false : true;
        errors.quantityType = quantityType.value ? false : true;

        return;
    }

    const data = {
        name: name.value,
        kcal: kcal.value,
        quantity: quantity.value,
        quantity_type: quantityType.value,
    };

    if (image.value) {
        data.image = image.value[0];
    }

    try {
        await Product.createProduct(data);

        store.commit("Toast/addToast", {
            message: "Product został dodany",
            type: "success",
        });

        name.value = "";
        kcal.value = "";
        quantity.value = "";
        quantityType.value = null;
        newImage.value = null;
    } catch (err) {
        store.commit("Toast/addToast", {
            message: "Coś poszło nie tak",
            type: "warning",
        });
    }
};
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
