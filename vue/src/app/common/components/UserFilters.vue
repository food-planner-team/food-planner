<template>
    <div>
        <p class="text-gray-500/70 flex items-center gap-1">
            <span class="material-symbols-outlined text-gray-500 text-base" data-te-toggle="tooltip"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
                info
            </span>
            Status
        </p>
        <div class="flex gap-2">
            <button
                class="hidden lg:inline-flex justify-center rounded-md border border-transparent bg-gray-300/50 px-4 py-2 font-semibold text-sm text-gray-600 hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 items-center transition-colors"
                :class="{
                    [activeClass]: status === UserRoleEnum.ALL,
                }" @click="handleChangeFilter(UserRoleEnum.ALL)">
                Wyświetl wszystko
            </button>
            <button
                class="hidden lg:inline-flex justify-center rounded-md border border-transparent bg-gray-300/50 px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 items-center transition-colors"
                :class="{
                    [activeClass]: status === UserRoleEnum.USER,
                }" @click="handleChangeFilter(UserRoleEnum.USER)">
                Użytkownik
            </button>
            <button
                class="hidden lg:inline-flex justify-center rounded-md border border-transparent bg-gray-300/50 px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 items-center transition-colors"
                :class="{
                    [activeClass]: status === UserRoleEnum.EMPLOYEE,
                }" @click="handleChangeFilter(UserRoleEnum.EMPLOYEE)">
                Pracownik
            </button>
            <button
                class="hidden lg:inline-flex justify-center rounded-md border border-transparent bg-gray-300/50 px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 items-center transition-colors"
                :class="{
                    [activeClass]: status === UserRoleEnum.ADMIN,
                }" @click="handleChangeFilter(UserRoleEnum.ADMIN)">
                Administrator
            </button>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { UserRoleEnum } from "../../System/models/User.js";

const emit = defineEmits(["handleActiveFilter"]);

const status = ref(UserRoleEnum.ALL);

const handleChangeFilter = (value) => {
    status.value = value;

    emit("handleActiveFilter", value);
};

const activeClass = computed(() => {
    return "bg-[#E5F5ED] text-[#2F4F4F] hover:bg-[#D9E8E0]";
});
</script>
