<template>
    <button
        class="inline-flex justify-center rounded-md border border-transparent bg-primary-dark px-12 py-2 text-base font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        @click="openModal()"
    >
        Zatwierdź produkt
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
                            class="w-full max-w-5xl h-[50rem] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                        >
                            <div
                                class="m-4 flex justify-between items-center mr-7"
                            >
                                <DialogTitle
                                    as="h3"
                                    class="text-2xl font-bold leading-6 text-gray-900 relative after:absolute after:w-[400px] after:h-px after:bg-grey after:ml-6 after:top-[50%]"
                                >
                                    Zatwierdź produkt
                                </DialogTitle>
                                <button
                                    type="button"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-primary-dark px-12 py-2.5 text-sm font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    @click="closeModal"
                                >
                                    Powrót
                                </button>
                            </div>
                            <p class="m-4 text-grey">
                                Posortuj produkty (łapiąc za produkt i go
                                przeciągając)
                            </p>

                            <draggable
                                item-key="order"
                                :list="props.chosenProducts"
                                v-bind="dragOptions"
                                @start="drag = true"
                                @end="drag = false"
                                class="h-[550px] rounded-sm overflow-auto mb-10"
                            >
                                <template #item="{ element, index }">
                                    <div
                                        :key="element.name"
                                        class="m-4 cursor-grab"
                                    >
                                        <div
                                            class="h-36 rounded-lg flex items-center gap-5 p-5 shadow-md"
                                        >
                                            <div
                                                class="w-[120px] h-[120px] rounded-md ml-1 flex items-center"
                                            >
                                                <img
                                                    :src="`${element.image?.url}.webp`"
                                                    :alt="element.name"
                                                    class="rounded-md"
                                                />
                                            </div>
                                            <div
                                                class="flex flex-col justify-between flex-1 gap-2 p-1 h-full"
                                            >
                                                <h1 class="font-bold text-xl">
                                                    {{ element.name }}
                                                </h1>
                                                <div class="text-base">
                                                    <p>
                                                        Miara:
                                                        {{ element.quantity }}
                                                        {{
                                                            element.quantity_type
                                                        }}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </draggable>
                            <div class="m-4">
                                <input
                                    type="text"
                                    class="rounded-md mr-6"
                                    :value="props.productName"
                                    disabled
                                />
                                <select
                                    name="quantity_type"
                                    id="pet-quantity_type"
                                    class="rounded-md mr-6"
                                    v-model="quantityType"
                                >
                                    <option value="">--Wybierz miarę--</option>
                                    <option value="kg">kilogramy</option>
                                    <option value="l">litry</option>
                                    <option value="szt.">sztuki</option>
                                </select>
                                <button
                                    type="button"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-primary-dark px-12 py-2.5 text-sm font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    @click="createMainProduct"
                                >
                                    Zatwierdź
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
import { ref } from "vue";
import draggable from "vuedraggable";
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from "@headlessui/vue";
import MainProduct from "../models/MainProduct";
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
    chosenProducts: {
        type: Array,
        default: [],
        required: true,
    },
    productName: {
        type: String,
        default: "",
        required: true,
    },
    products: {
        type: Array,
        default: [],
        required: true,
    },
});

const dragOptions = ref({
    animation: 200,
    group: "products",
    disabled: false,
    ghostClass: "ghost",
});

const emit = defineEmits(["update:products", "update:product-name"]);

const quantityType = ref("");

const drag = ref(false);

const isOpenModal = ref(false);

function closeModal() {
    isOpenModal.value = false;
}

function openModal() {
    if (props.chosenProducts.length === 0) {
        store.commit("Toast/addToast", {
            message: "Wybierz produkty!",
            type: "warning",
        });
        return;
    }

    isOpenModal.value = true;
}

const createMainProduct = () => {
    if (!quantityType.value || !props.productName) {
        store.commit("Toast/addToast", {
            message: "Uzupełnij miarę i nazwę produktu!",
            type: "warning",
        });
        return;
    }

    isOpenModal.value = false;

    const productsData = props.chosenProducts.map((e, index) => {
        return { id: e.id, order: index };
    });

    MainProduct.createMainProduct("", {
        name: props.productName[0].toUpperCase() + props.productName.slice(1),
        quantity_type: quantityType.value,
        products: productsData,
    });

    emit("update:products", []);
    emit("update:product-name", "");
};
</script>

<style lang="scss">
.ghost {
    opacity: 0.5;
    background: $grey-light;
    border-radius: 8px;
}
</style>
