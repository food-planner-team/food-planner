<template>
    <main class="main bg-[#fff] rounded-lg">
        <div class="wrapper">
            <div class="h-full flex flex-col">
                <div class="m-5 mt-0 flex justify-between">
                    <div>
                        <h1 class="font-bold text-2xl my-5 xs:mt-0">
                            Zarządzanie użytkownikami
                        </h1>
                        <div>
                            <p class="pb-2 text-sm text-gray-500">
                                <label for="search">NAZWA UŻYTKOWNIKA</label>
                            </p>
                            <div class="flex flex-wrap gap-6">
                                <input type="search" id="search" class="rounded-lg w-full md:w-[28rem]"
                                    placeholder="Wyszukaj" v-model="searchValue" @keyup.enter="getUsers()" />
                                <div class="flex gap-6 flex-wrap justify-center w-full md:w-auto">
                                    <button
                                        class="hidden lg:inline-flex justify-center rounded-md border border-transparent bg-primary-dark px-12 w-[200px] py-2 text-base font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 items-center transition-colors"
                                        @click="getUsers()">
                                        Szukaj
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-20 flex flex-col items-end gap-4">
                        <UserFilters @handleActiveFilter="handleActiveFilter" />
                    </div>
                </div>
                <div class="h-full relative m-5 mb-0">
                    <template v-if="!isLoading">
                        <div
                            class="relative justify-items-center pb-5 pt-1 lg:absolute left-0 top-0 h-full w-full 3xl:px-2">
                            <div class="h-full overflow-y-auto" ref="scrollComponent">
                                <table class="w-full text-left" v-if="users.length">
                                    <thead>
                                        <tr>
                                            <th
                                                class="sticky top-0 py-2 px-4 bg-[#fff] z-10 border-b-[1px] border-gray-300">
                                                ID
                                            </th>
                                            <th
                                                class="sticky top-0 py-2 px-4 bg-[#fff] z-10 border-b-[1px] border-gray-300">
                                                Zdjęcie
                                            </th>
                                            <th
                                                class="sticky top-0 py-2 px-4 bg-[#fff] z-10 border-b-[1px] border-gray-300">
                                                Imię i nazwisko
                                            </th>
                                            <th
                                                class="sticky top-0 py-2 px-4 bg-[#fff] z-10 border-b-[1px] border-gray-300">
                                                Adres e-mail
                                            </th>
                                            <th
                                                class="sticky top-0 py-2 px-4 bg-[#fff] z-10 border-b-[1px] border-gray-300">
                                                Rola
                                            </th>
                                            <th
                                                class="sticky top-0 py-2 px-4 bg-[#fff] z-10 border-b-[1px] border-gray-300">
                                                Limit kcal
                                            </th>
                                            <th
                                                class="sticky top-0 py-2 px-4 bg-[#fff] z-10 border-b-[1px] border-gray-300">
                                                Data utworzenia
                                            </th>
                                            <th v-if="loggedUser.role === UserRoleEnum.ADMIN"
                                                class="sticky top-0 py-2 px-4 bg-[#fff] z-10 border-b-[1px] border-gray-300">
                                                Akcja
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="user in users" :key="user.id">
                                            <td class="py-2 px-4 border-b-[1px] border-gray-300">
                                                {{ user.id }}
                                            </td>
                                            <td class="py-2 px-4 border-b-[1px] border-gray-300">
                                                <div
                                                    class="w-[50px] h-[50px] rounded-lg flex items-center justify-center overflow-hidden">
                                                    <img v-if="user?.image?.url
                                                        " :src="`${user?.image?.url}`" :alt="user.name"
                                                        class="rounded-md" />
                                                    <img v-else src="../../common/assets/no-image.jpg"
                                                        alt="no image placeholder" class="rounded-md mix-blend-darken" />
                                                </div>
                                            </td>
                                            <td class="py-2 px-4 border-b-[1px] border-gray-300">
                                                {{ user.name }}
                                            </td>
                                            <td class="py-2 px-4 border-b-[1px] border-gray-300">
                                                {{ user.email }}
                                            </td>
                                            <td class="py-2 px-4 border-b-[1px] border-gray-300 w-[150px]">
                                                {{ userRoleLabel(user.role) }}
                                            </td>
                                            <td class="py-2 px-4 border-b-[1px] border-gray-300">
                                                {{ user.kcalLimit ? user.kcalLimit : 'Brak limitu' }}
                                            </td>
                                            <td class="py-2 px-4 border-b-[1px] border-gray-300 w-[230px]">
                                                {{ user.createdAt }}
                                            </td>
                                            <td v-if="loggedUser.role === UserRoleEnum.ADMIN"
                                                class="py-2 px-4 border-b-[1px] border-gray-300">
                                                <div class="flex gap-2 items-center">
                                                    <TheSelect :options="options" :selected="user.role" :user-id="user.id"
                                                        @handleSelect="handleChangeRole($event)" />
                                                    <button
                                                        class="bg-[#FFEAEA] text-[#B03E3E] font-semibold rounded-lg py-1 px-5 hover:bg-[#FFDADA] transition-colors w-[100px] h-[40px] disabled:cursor-not-allowed disabled:opacity-60"
                                                        @click="handleRemoveUser(user.id)">
                                                        <span class="flex justify-center items-center">
                                                            <svg v-show="isLoadingBtn
                                                                " class="w-4 h-4 text-white animate-spin" fill="none"
                                                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <circle class="opacity-25" cx="12" cy="12" r="10"
                                                                    stroke="currentColor" stroke-width="4"></circle>
                                                                <path class="opacity-75"
                                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                                    fill="currentColor"></path>
                                                            </svg>
                                                        </span>
                                                        <span v-show="!isLoadingBtn
                                                            ">Usuń</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </template>
                    <div class="h-full flex" v-else>
                        <Loader class="m-auto" />
                    </div>
                    <div v-if="!users.length && !isLoading">
                        <p class="text-left text-gray-500">Brak użytkowników</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";

import User from "../../System/models/User.js";
import Loader from "../../common/components/Loader.vue";
import { useInfiniteScroll } from "@vueuse/core";
import { UserRoleEnum } from "../../System/models/User.js";
import TheSelect from "../../common/components/TheSelect.vue";
import UserFilters from "../../common/components/UserFilters.vue";
import { useStore } from "vuex";

const store = useStore();

const users = ref([]);
const searchValue = ref("");
const isLoading = ref(true);
const isLoadingBtn = ref(false);
const page = ref(1);
const scrollComponent = ref(null);
const filterValue = ref(UserRoleEnum.ALL);

const loggedUser = computed(() => store.getters["User/getUser"]);

const getUsers = async () => {
    users.value = [];
    isLoading.value = true;
    page.value = 1;

    const response = await User.getUsers({
        search: searchValue.value,
        page: page.value,
        limit: 20,
        role:
            filterValue.value !== UserRoleEnum.ALL
                ? filterValue.value
                : null,
    });

    users.value = response.users;
    console.log(response);
    page.value++;
    isLoading.value = false;
};

onMounted(() => {
    getUsers();
});

const getUsersOnScroll = async () => {
    const response = await User.getUsers({
        search: searchValue.value,
        page: page.value,
        limit: 20,
        role:
            filterValue.value !== UserRoleEnum.ALL
                ? filterValue.value
                : null,
    });

    if (page.value > response.meta.pagination.total_pages) return;

    users.value.push(...response.users);
    page.value++;
};

useInfiniteScroll(
    scrollComponent,
    () => {
        getUsersOnScroll();
    },
    { distance: 500 }
);

const handleActiveFilter = (filter) => {
    filterValue.value = filter;
};

watch(filterValue, () => {
    getUsers();
});

const userRoleLabel = (role) => {
    switch (role) {
        case UserRoleEnum.USER:
            return "Użytkownik";
        case UserRoleEnum.EMPLOYEE:
            return "Pracownik";
        case UserRoleEnum.ADMIN:
            return "Administrator";
        default:
            return "Nieznany";
    }
};

const options = ref([
    { text: userRoleLabel(UserRoleEnum.USER), value: UserRoleEnum.USER },
    { text: userRoleLabel(UserRoleEnum.EMPLOYEE), value: UserRoleEnum.EMPLOYEE },
    { text: userRoleLabel(UserRoleEnum.ADMIN), value: UserRoleEnum.ADMIN },
]);

const handleRemoveUser = async (userId) => {
    const userIndex = users.value.findIndex(
        (user) => user.id === userId
    );
    const response = await User.removeUser(userId);

    if (response.data.status_code === 200) {
        users.value.splice(userIndex, 1);
    }
};

const handleChangeRole = async (payload) => {
    const { userId, selectedValue } = payload;
    const userIndex = users.value.findIndex(
        (user) => user.id === userId
    );
    const response = await User.updateUserRole(userId, selectedValue);
    users.value[userIndex].role = response.role;
};

</script>

<style lang="scss" scoped>
.main {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "wrapper";
    gap: 1.5rem;
    overflow: hidden;
}

.wrapper {
    grid-area: wrapper;
    background-color: $alpha;
    box-shadow: 0px 6px 24px $alpha-dark;
    border-radius: 16px;
    backdrop-filter: blur(25px);
    overflow: hidden;

    @media screen and (min-width: 1024px) {
        padding: 2rem;
    }
}
</style>
