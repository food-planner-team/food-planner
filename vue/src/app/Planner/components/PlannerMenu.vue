<template>
    <div class="wrapper">
        <div class="flex w-full h-full items-center md:gap-6 justify-start">
            <div class="flex">
                <h2 class="font-bold text-2xl hidden md:block">
                    Planner posiłków
                </h2>
            </div>

            <div class="flex items-center relative">
                <input type="text" id="litepicker" class="w-[275px] rounded-md cursor-pointer bg-transparent" readonly
                    :value="dateRange" />
                <span class="material-symbols-outlined absolute right-0 translate-x-[-50%] z-[-1]">
                    calendar_month
                </span>
            </div>
            <div class="flex ml-auto gap-5">
                <p class="flex cursor-pointer" @click="generateShoppingList">
                    <span class="material-symbols-outlined"> shopping_bag </span>
                </p>
                <p class="flex cursor-pointer" @click="generatePdf">
                    <span class="material-symbols-outlined"> print </span>
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed, ref } from "vue";
import Litepicker from "litepicker";
import { onMounted } from "vue";
import {
    getFirstDayOfWeek,
    getLastDayOfWeek,
} from "../../common/utils/datesHelpers.js";
import Pdf from "../../System/models/Pdf";

const emit = defineEmits(["update:dateStart", "update:dateEnd"]);

const props = defineProps({
    dateStart: {
        type: String,
        default: "",
    },
    dateEnd: {
        type: String,
        default: "",
    },
});

const dateStart = computed(() => props.dateStart || getFirstDayOfWeek());
const dateEnd = computed(() => props.dateEnd || getLastDayOfWeek());
const dateRange = computed(() => `${dateStart.value} - ${dateEnd.value}`);

onMounted(() => {
    new Litepicker({
        element: document.getElementById("litepicker"),
        singleMode: false,
        lang: "pl",
        showTooltip: false,
        minDays: 2,
        resetButton: true,
        autoRefresh: true,
        setup: (picker) => {
            picker.on("hide", () => {
                const date = document
                    .getElementById("litepicker")
                    .value.split(" - ");

                emit("update:dateStart", date[0]);
                emit("update:dateEnd", date[1]);
            });
        },
    });
});

const generatePdf = () => {
    Pdf.generatePdf(dateStart.value, dateEnd.value).then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "planner.pdf");
        document.body.appendChild(link);
        link.click();
    });
};

const generateShoppingList = () => {
    Pdf.generateSoppingList(dateStart.value, dateEnd.value).then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "shoppingList.pdf");
        document.body.appendChild(link);
        link.click();
    });
};
</script>
<style lang="scss" scoped>
.wrapper {
    grid-area: creator;
    background-color: $alpha;
    box-shadow: 0px 6px 24px $alpha-dark;
    border-radius: 16px;
    backdrop-filter: blur(25px);
    padding: 2rem 1.2rem;
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
        padding: 2rem 2rem;
    }
}
</style>
