<template>
    <div class="wrapper">
        <div class="flex w-full h-full items-center gap-6 justify-start">
            <div class="flex">
                <h2 class="font-bold text-2xl">Planner posiłków</h2>
            </div>

            <div class="flex items-center relative">
                <input
                    type="text"
                    id="litepicker"
                    class="w-[275px] rounded-md cursor-pointer bg-transparent"
                    readonly
                    :value="dateRange"
                />
                <span
                    class="material-symbols-outlined absolute right-0 translate-x-[-50%] z-[-1]"
                >
                    calendar_month
                </span>
            </div>
            <p class="ml-auto flex cursor-pointer" href="/" @click="generatePdf">
                <span class="material-symbols-outlined"> print </span>
            </p>
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

import FileDownload from "js-file-download";

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
        FileDownload(res.data, "plan-meals.pdf");
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
    padding: 2rem;
    display: flex;
    flex-direction: column;
}
</style>
