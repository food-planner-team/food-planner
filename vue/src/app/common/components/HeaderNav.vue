<template>
    <header class="header">
        <router-link :to="{ name: 'Planner' }">
            <div class="logo-name">
                <img :src="logo" alt="logo" />
                <p>Food Planner</p>
            </div>
        </router-link>
        <div class="header-nav">
            <div class="nav-element" v-for="link in links" :key="link.name">
                <template v-if="link.children.length">
                    <Dropdown
                        :name="link.name"
                        :icon="link.icon"
                        :links="link.children"
                        :style="style"
                    />
                </template>
                <template v-else>
                    <router-link
                        :to="{ name: link.pathName }"
                        class="flex items-center gap-2"
                    >
                        <span className="material-symbols-outlined">{{
                            link.icon
                        }}</span>
                        <p class="capitalize">{{ link.name }}</p>
                    </router-link>
                </template>
            </div>
        </div>
        <div class="header-profile">
            <div class="profile-block">
                <div class="profile-avatar">
                    <img src="../assets/user.png" alt="user's avatar" />
                </div>
                <div class="profile-info">
                    <div class="profile-name">Witaj, {{ user.name }}!</div>
                </div>
                <Dropdown icon="expand_more" :links="userLinks" />
            </div>
        </div>
    </header>
</template>
<script setup>
import { ref, computed } from "vue";
import logo from "../assets/logo.svg";
import Dropdown from "./Dropdown.vue";
import { useRouter } from "vue-router";
import User from "../../System/models/User";
import { useStore } from "vuex";

const store = useStore();
const user = computed(() => store.getters["User/getUser"]);

const router = useRouter();

const style = "left: 0";

const links = ref([
    {
        name: "Planner",
        pathName: "Planner",
        icon: "event_note",
        action: "",
        children: [],
    },
    {
        name: "przepisy",
        pathName: "",
        icon: "menu_book",
        action: "",
        children: [
            {
                name: "wszystkie przepisy",
                pathName: "",
                icon: "list_alt",
                action: "",
            },
            {
                name: "moje przepisy",
                pathName: "",
                icon: "favorite",
                action: "",
            },
            {
                name: "dodaj przepis",
                pathName: "AddRecipe",
                icon: "add_circle",
                action: "",
            },
        ],
    },
    {
        name: "produkty",
        pathName: "",
        icon: "fastfood",
        action: "",
        children: [
            {
                name: "wszystkie produkty",
                pathName: "MainProductList",
                icon: "list_alt",
                action: "",
            },
            {
                name: "moje produkty",
                pathName: "",
                icon: "favorite",
                action: "",
            },
            {
                name: "dodaj produkt",
                pathName: "AddProduct",
                icon: "add_circle",
                action: "",
            },
        ],
    },
]);

const logout = () => {
    User.logout().then(() => {
        router.push({ name: "Login" });
    });
};

const userLinks = ref([
    {
        name: "ustawienia",
        pathName: "",
        icon: "settings",
        action: "",
    },
    {
        name: "wyloguj",
        pathName: "",
        icon: "logout",
        action: () => logout(),
    },
]);
</script>
<style lang="scss" scoped>
.header {
    background-color: $alpha;
    box-shadow: 0px 6px 24px $alpha-dark;
    border-radius: 16px;
    display: flex;
    padding: 0 2rem;
    backdrop-filter: blur(25px);
    z-index: 2;
}

.logo-name {
    height: 100%;
    flex: 1;
    font-weight: 800;
    font-size: 18px;
    display: flex;
    align-items: center;
    color: $primary-dark;
    gap: 10px;
    margin-right: 40px;
}

.header-nav {
    height: 100%;
    flex: 6;
    display: flex;
    align-items: center;
    gap: 4rem;
}

.nav-element {
    font-size: 13px;
    font-weight: 700;
    color: $primary-dark;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    position: relative;
}

.nav-element-dropdown {
    position: absolute;
    padding: 1rem;
    background-color: $white;
    box-shadow: 0px 6px 24px $alpha-dark;
    border-radius: 12px;
    top: calc(100% + 1.5rem);
    width: max-content;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 12px;
    border: 1px solid $white-accent;
    cursor: default;
}

.dropdown-element {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
}

.header-profile {
    height: 100%;
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.profile-block {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.profile-avatar {
    background-color: $primary-dark;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
}

.profile-info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.profile-name {
    font-size: 15px;
    font-weight: 700;
    color: $black;
}
</style>
