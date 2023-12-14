<template>
    <div
        class="rounded-lg flex flex-col items-center gap-5 p-5 shadow-md bg-[#fefffe] w-[240px] max-h-[330px] mb-2"
    >
        <div class="w-[120px] h-[120px] rounded-md ml-1 flex items-center">
            <img
                v-if="props.product?.defaultProduct?.image?.url"
                :src="`${props.product?.defaultProduct?.image?.url}.webp`"
                :alt="props.product.name"
                class="rounded-md"
            />
            <img
                v-else
                src="../../common/assets/no-image.jpg"
                alt="no image placeholder"
                class="rounded-md"
            />
        </div>
        <div class="flex flex-col justify-between flex-1 gap-2 p-1 h-full">
            <div class="flex justify-between">
                <h1 class="font-bold text-sm">
                    {{ props.product.name }}
                </h1>
                <Switch
                    v-model="props.product.optional"
                    :class="
                        !props.product.optional
                            ? 'bg-primary-dark'
                            : 'bg-gray-200'
                    "
                    class="relative inline-flex h-6 w-11 items-center rounded-full"
                    data-te-toggle="tooltip"
                    title="Czy produkt jest wymagany w przepisie?"
                >
                    <span class="sr-only">Enable notifications</span>
                    <span
                        :class="
                            !props.product.optional
                                ? 'translate-x-6'
                                : 'translate-x-1'
                        "
                        class="inline-block h-4 w-4 transform rounded-full bg-white transition"
                    />
                </Switch>
            </div>
            <div class="text-sm">
                <div class="flex flex-col gap-2">
                    <label
                        for="quantity"
                        class="block text-sm font-medium text-gray-700"
                    >
                        Miara w ({{
                            convertQuantity(props.product.quantityType)
                        }}):
                    </label>
                    <input
                        v-model="props.product.quantity"
                        type="number"
                        name="quantity"
                        id="quantity"
                        placeholder="Podaj miarę"
                        class="border border-gray-300 rounded-md p-1 pl-2"
                        :class="props.error.error ? 'bg-red-100' : ''"
                        @keypress="$emit('removeError', props.product.id)"
                    />
                </div>
            </div>
            <button
                class="rounded-md border border-transparent bg-primary-dark px-12 py-2 text-sm font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                @click="$emit('removeProduct', props.product.id)"
            >
                Usuń
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { Switch } from "@headlessui/vue";

const props = defineProps({
    product: {
        type: Object,
        default: {},
        required: true,
    },
    error: {
        type: Object,
        default: {},
    },
});

const emit = defineEmits(["updateProduct", "removeProduct", "removeError"]);

watch(props.product, () => {
    emit("updateProduct", props.product);
});

const convertQuantity = (quantity) => {
    if (quantity.toLowerCase() === "kg") {
        return "g";
    } else if (quantity.toLowerCase() === "l") {
        return "ml";
    } else {
        return quantity;
    }
};
</script>

<style lang="scss" scoped>
.setting__span-btn {
    padding: 3px 0;
    border-radius: 6px;
    transition: background-color 0.2s ease-out;

    &:hover {
        background-color: $white-accent;
    }
}
</style>
