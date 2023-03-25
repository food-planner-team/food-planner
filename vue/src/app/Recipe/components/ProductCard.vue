<template>
    <div
        class="h-56 w-[500px] rounded-lg flex items-center gap-5 p-5 shadow-md bg-[#fefffe]"
    >
        <div class="w-[120px] h-[120px] rounded-md ml-1 flex items-center">
            <img
                v-if="props.product?.defaultProduct?.image?.url"
                :src="`${props.product?.defaultProduct?.image?.url}.webp`"
                alt=""
                class="rounded-md"
            />
            <img
                v-else
                src="../../Product/assets/No-Image-Placeholder.png"
                alt=""
                class="rounded-md"
            />
        </div>
        <div class="flex flex-col justify-between flex-1 gap-2 p-1 h-full">
            <div class="flex justify-between">
                <h1 class="font-bold text-sm">
                    {{ props.product.name }}
                </h1>
                <Switch
                    v-model="enabled"
                    :class="enabled ? 'bg-primary-dark' : 'bg-gray-200'"
                    class="relative inline-flex h-6 w-11 items-center rounded-full"
                >
                    <span class="sr-only">Enable notifications</span>
                    <span
                        :class="enabled ? 'translate-x-6' : 'translate-x-1'"
                        class="inline-block h-4 w-4 transform rounded-full bg-white transition"
                    />
                </Switch>
            </div>
            <div class="text-sm">
                <p>
                    Miara:
                    <!-- {{
                        props.product.quantity ||
                        props.product.defaultProduct.quantity
                    }}
                    {{ props.product.quantity_type }} -->
                </p>
                <p>Cena: 5.55 zł - TODO</p>
            </div>
            <button
                class="rounded-md border border-transparent bg-primary-dark px-12 py-2 text-sm font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                @click="$emit('remove-product', props.product.id)"
            >
                Usuń
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { Switch } from "@headlessui/vue";

const props = defineProps({
    product: {
        type: Object,
        default: {},
        required: true,
    },
});

const enabled = ref(true);
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
