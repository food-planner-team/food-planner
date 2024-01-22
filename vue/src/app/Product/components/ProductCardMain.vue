<template>
    <div class="h-[100px] w-[22rem] rounded-lg flex items-center gap-5 shadow-sm border bg-[#fefffe]">
        <div class="w-[98px] h-[98px] flex items-center overflow-hidden">
            <img v-if="product?.image?.url" :src="product?.image?.url" :alt="product.name" class="rounded-l-md w-[99px]" />
            <img v-else src="../../common/assets/no-image.jpg" alt="no image placeholder" />
        </div>
        <div class="flex flex-col justify-around flex-1 gap-1 py-3 h-full">
            <div class="flex justify-between">
                <h1 class="font-bold text-sm max-w-[200px]">
                    {{ product.name }}
                </h1>
                <Dropdown v-if="links.length" icon="more_vert" class="setting__span-btn self-start absolute top-0 right-3"
                    :links="links" />
            </div>
            <div class="flex h-[25x] text-[10px] gap-2">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>
import Dropdown from "../../common/components/Dropdown.vue";

const props = defineProps({
    product: {
        type: Object,
        default: {},
        required: true,
    },
    links: {
        type: Array,
        default: [],
    },
});

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
