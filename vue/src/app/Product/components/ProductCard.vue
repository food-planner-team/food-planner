<template>
    <div
        class="h-56 w-[23rem] rounded-lg flex items-center gap-5 p-5 shadow-md bg-[#fefffe]"
    >
        <div
            class="w-[120px] h-[120px] rounded-md ml-1 flex items-center"
            :style="
                chosenProductsId.includes(props.product.id)
                    ? { opacity: 0.5 }
                    : { opacity: 1 }
            "
        >
            <img
                :src="`${props?.product?.image?.url}.webp`"
                alt=""
                class="rounded-md"
            />
        </div>
        <div class="flex flex-col justify-between flex-1 gap-2 p-1 h-full">
            <h1
                class="font-bold text-sm"
                :style="
                    chosenProductsId.includes(props.product.id)
                        ? { opacity: 0.5 }
                        : { opacity: 1 }
                "
            >
                {{ props.product.name }}
            </h1>
            <div
                class="text-sm"
                :style="
                    chosenProductsId.includes(props.product.id)
                        ? { opacity: 0.5 }
                        : { opacity: 1 }
                "
            >
                <p>
                    Miara: {{ props.product.quantity }}
                    {{ props.product.quantity_type }}
                </p>
                <!-- <p>Cena: 5.55 zł</p> -->
            </div>
            <button
                v-if="!chosenProductsId.includes(props.product.id)"
                class="rounded-md border border-transparent bg-primary-dark px-12 py-2 text-sm font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                @click="$emit('chooseProduct', props.product.id)"
            >
                Wybierz
            </button>
            <button
                v-else
                class="rounded-md border border-transparent bg-primary-dark px-12 py-2 text-sm font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                @click="$emit('removeProduct', props.product.id)"
            >
                Usuń
            </button>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    product: {
        type: Object,
        default: {},
        required: true,
    },
    chosenProducts: {
        type: Array,
        default: [],
        required: false,
    },
});

const chosenProductsId = computed(() => props.chosenProducts.map((e) => e.id));
</script>

<style lang="scss" scoped></style>
