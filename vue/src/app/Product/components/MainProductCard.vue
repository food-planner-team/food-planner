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
                v-if="props.product?.defaultProduct?.image?.url"
                :src="`${props.product?.defaultProduct?.image?.url}.webp`"
                alt=""
                class="rounded-md"
            />
            <img
                v-else
                src="../assets/No-Image-Placeholder.png"
                alt=""
                class="rounded-md"
            />
        </div>
        <div class="flex flex-col justify-between flex-1 gap-2 p-1 h-full">
            <div class="flex justify-between">
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
                <Dropdown
                    v-if="user.admin"
                    icon="more_vert"
                    class="setting__span-btn self-start"
                    :links="links"
                />
            </div>
            <div
                class="text-sm"
                :style="
                    chosenProductsId.includes(props.product.id)
                        ? { opacity: 0.5 }
                        : { opacity: 1 }
                "
            >
                <p>
                    Miara:
                    {{
                        props.product.quantity ||
                        props.product.defaultProduct.quantity
                    }}
                    {{ props.product.quantity_type }}
                </p>
                <p>Cena: 5.55 zł - TODO</p>
            </div>
            <button
                class="rounded-md border border-transparent bg-primary-dark py-2 text-sm font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                style="opacity: 0.5"
                disabled="true"
            >
                Wybierz kolejność
            </button>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from "vue";
import Dropdown from "../../common/components/Dropdown.vue";
import { useStore } from "vuex";

const store = useStore();
const user = computed(() => store.getters["User/getUser"]);

const props = defineProps({
    product: {
        type: Object,
        default: {},
        required: true,
    },
    chosenProducts: {
        type: Array,
        default: null,
        required: false,
    },
});

const links = ref([
    {
        name: "pokaż",
        pathName: "",
        icon: "search",
        action: "",
    },
    {
        name: "edytuj",
        pathName: "",
        icon: "edit",
        action: "",
    },
    {
        name: "usuń",
        pathName: "",
        icon: "delete",
        action: "",
    },
]);

const chosenProductsId = computed(
    () => props.chosenProducts?.map((e) => e.id) || []
);
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
