<template>
    <div>
        <p class="text-gray-500/70 flex items-center gap-1">
            <span
                class="material-symbols-outlined text-gray-500 text-base"
                data-te-toggle="tooltip"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            >
                info
            </span>
            Status
        </p>
        <div class="flex gap-2">
            <button
                class="hidden lg:inline-flex justify-center rounded-md border border-transparent bg-gray-300/50 px-4 py-2 font-semibold text-sm text-gray-600 hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 items-center"
                :class="{
                    [activeClass]: status === RecipeStatusEnum.ALL,
                }"
                @click="handleChangeFilter(RecipeStatusEnum.ALL)"
            >
                Wyświetl wszystko
            </button>
            <button
                class="hidden lg:inline-flex justify-center rounded-md border border-transparent bg-gray-300/50 px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 items-center"
                :class="{
                    [activeClass]: status === RecipeStatusEnum.ACCEPTED,
                }"
                @click="handleChangeFilter(RecipeStatusEnum.ACCEPTED)"
            >
                Zaakceptowany
            </button>
            <button
                class="hidden lg:inline-flex justify-center rounded-md border border-transparent bg-gray-300/50 px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 items-center"
                :class="{
                    [activeClass]: status === RecipeStatusEnum.REJECTED,
                }"
                @click="handleChangeFilter(RecipeStatusEnum.REJECTED)"
            >
                Odrzucony
            </button>
            <button
                class="hidden lg:inline-flex justify-center rounded-md border border-transparent bg-gray-300/50 px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 items-center"
                :class="{
                    [activeClass]: status === RecipeStatusEnum.PENDING,
                }"
                @click="handleChangeFilter(RecipeStatusEnum.PENDING)"
            >
                Do weryfikacji
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { RecipeStatusEnum } from "../models/Recipe";
import { computed } from "@vue/reactivity";

const emit = defineEmits(["handleActiveFilter"]);

const status = ref(RecipeStatusEnum.ALL);

const handleChangeFilter = (value) => {
    status.value = value;

    emit("handleActiveFilter", value);
};

const activeClass = computed(() => {
    return "bg-[#E5F5ED] text-[#2F4F4F] hover:bg-[#D9E8E0]";
});
</script>
