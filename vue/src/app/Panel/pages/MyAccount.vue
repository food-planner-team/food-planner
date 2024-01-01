<template>
    <main class="main bg-[#fff] rounded-lg">
        <div class="wrapper">
            <div class="m-5 mt-0 flex justify-between w-full">
                <div class="w-full">
                    <h1 class="font-bold text-2xl my-5 xs:mt-0">
                        Ustawienia profilu
                    </h1>
                    <div class="flex w-full gap-20">
                        <div class="flex flex-1">
                            <div class="max-w-[600px] flex flex-col gap-4 w-full">
                                <div class="flex flex-col w-full">
                                    <label class="mb-2" for="name">Imię i nazwisko</label>
                                    <input v-model="name" class="border border-gray-300 rounded-md p-2" type="text"
                                        id="name" placeholder="Imię i nazwisko" :class="errors.name ? 'bg-red-100 ' : ''"
                                        @keypress="errors.name = false" />
                                </div>
                                <div class="flex flex-col">
                                    <label class="mb-2" for="image">Zdjęcie</label>
                                    <input class="hidden" type="file" id="image" v-on:change="onFileChange"
                                        ref="imageInput" />
                                    <div class="w-[120px] h-[120px] rounded-md items-center cursor-pointer overflow-hidden border border-gray-300"
                                        @click="handleChangeImage">
                                        <img v-if="newImage" :src="newImage" class="rounded-md" />
                                        <img v-else src="../../common/assets/imageAdd.jpg" class="rounded-md" />
                                    </div>
                                </div>
                                <div class="flex flex-col">
                                    <label class="mb-2" for="name">Adres e-mail</label>
                                    <input v-model="email" class="border border-gray-300 rounded-md p-2" type="email"
                                        id="name" placeholder="Adres e-mail" :class="errors.email ? 'bg-red-100 ' : ''"
                                        @keypress="errors.email = false" />
                                </div>
                                <div class="flex flex-col">
                                    <label class="mb-2" for="name">Rola</label>
                                    <input v-model="role" class="border border-gray-300 rounded-md p-2" type="text" disabled
                                        id="name" placeholder="Rola" />
                                </div>
                                <div class="flex flex-col">
                                    <label class="mb-2" for="name">Limit kcal</label>
                                    <input v-model="kcalLimit" class="border border-gray-300 rounded-md p-2" type="number"
                                        id="name" placeholder="Limit kcal" :class="errors.kcalLimit ? 'bg-red-100 ' : ''"
                                        @keypress="errors.kcalLimit = false" />
                                </div>
                                <div class="flex gap-2 justify-end">

                                    <button
                                        class="inline-flex justify-center rounded-md border border-transparent bg-primary-dark px-12 py-2 text-base font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        @click="handleUpdateData">
                                        Aktualizuj dane
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 w-full">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import User from "../../System/models/User";
import { isFileImage } from "../../common/utils/validateImage";
import { useStore } from "vuex";
import { UserRoleEnum } from "../../System/models/User";

const store = useStore();
const userId = store.getters["User/getUserId"];
const name = ref("");
const imageInput = ref(null);
const image = ref("");
const newImage = ref("");
const email = ref("");
const role = ref("");
const kcalLimit = ref("");
const errors = reactive({
    name: false,
    image: false,
    email: false,
    role: false,
    kcalLimit: false,
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

const getUser = async () => {
    const response = await User.getLoggedUser();

    name.value = response.name;
    image.value = response.image;
    email.value = response.email;
    role.value = userRoleLabel(response.role);
    kcalLimit.value = response.kcalLimit;
};

onMounted(() => {
    getUser();
});

const handleChangeImage = () => {
    imageInput.value.click();
};

const onFileChange = (e) => {
    if (!isFileImage(e.target.files[0])) {
        store.commit("Toast/addToast", {
            message: "Nieprawidłowy format pliku",
            type: "warning",
        });

        imageInput.value.value = "";
        return;
    }

    image.value = e.target.files || e.dataTransfer.files;
    newImage.value = e.target.files || e.dataTransfer.files;
    const reader = new FileReader();
    reader.onload = function (e) {
        newImage.value = e.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
};

const handleUpdateData = async () => {
    if (
        !name.value ||
        !email.value ||
        !role.value ||
        !kcalLimit.value
    ) {
        store.commit("Toast/addToast", {
            message: "Popraw błędy",
            type: "warning",
        });

        errors.name = name.value ? false : true;
        errors.email = email.value ? false : true;
        errors.role = role.value ? false : true;
        errors.kcalLimit = kcalLimit.value > 0 ? false : true;

        return;
    }

    const data = {
        name: name.value,
        email: email.value,
        role: role.value,
        kcalLimit: kcalLimit.value,
    };

    if (image.value) {
        data.image = image.value[0];
    }

    const response = await User.updateUser(userId, data);

    if (response) {
        store.commit("Toast/addToast", {
            message: "Dane zostały zaktualizowane",
            type: "success",
        });
    }
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
