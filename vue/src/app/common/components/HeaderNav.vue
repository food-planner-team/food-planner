<template>
    <header class="header relative">
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
                <Dropdown
                    icon="expand_more"
                    :links="userLinks"
                    class="hidden sm:inline-block"
                />
            </div>
        </div>
        <button
            class="hamburger"
            aria-label="hamburger-menu"
            @click="() => (isOpen = !isOpen)"
        >
            <span
                class="hamburger-box"
                :class="[isOpen ? 'hamburger-active' : '']"
            >
                <span class="hamburger-inner"></span>
            </span>
        </button>
        <HamburgerMenu
            :links="links"
            class="absolute top-[115%] left-0 w-full duration-500 ease-in"
            :class="[isOpen ? 'left-0' : 'left-[-100%]']"
            :userLinks="userLinks"
        />
    </header>
</template>
<script setup>
import { ref, computed } from "vue";
import logo from "../assets/logo.svg";
import Dropdown from "./Dropdown.vue";
import { useRouter } from "vue-router";
import User from "../../System/models/User";
import { useStore } from "vuex";
import HamburgerMenu from "./HamburgerMenu.vue";

const store = useStore();
const user = computed(() => store.getters["User/getUser"]);

const router = useRouter();

const isOpen = ref(false);

const emit = defineEmits(["close-hamburger"]);

const style = "left: 0";

const links = ref([
    {
        name: "Planner",
        pathName: "Planner",
        icon: "event_note",
        action: () => (isOpen.value = !isOpen.value),
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
                action: () => (isOpen.value = !isOpen.value),
            },
            {
                name: "moje przepisy",
                pathName: "",
                icon: "favorite",
                action: () => (isOpen.value = !isOpen.value),
            },
            {
                name: "dodaj przepis",
                pathName: "AddRecipe",
                icon: "add_circle",
                action: () => (isOpen.value = !isOpen.value),
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
                action: () => (isOpen.value = !isOpen.value),
            },
            {
                name: "moje produkty",
                pathName: "",
                icon: "favorite",
                action: () => (isOpen.value = !isOpen.value),
            },
            {
                name: "dodaj produkt",
                pathName: "AddProduct",
                icon: "add_circle",
                action: () => (isOpen.value = !isOpen.value),
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
        action: () => (isOpen.value = !isOpen.value),
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
.hamburger {
    padding: 1em;
    display: none;
    cursor: pointer;
    background-color: transparent;
    border: none;
    margin: 0;
    font-size: 10px;

    @media (max-width: 1024px) {
        display: inline-block;
    }
}

.hamburger-box {
    width: 3.5em;
    height: 2.4em;
    display: inline-block;
    position: relative;
    display: flex;
}

.hamburger-inner {
    width: 100%;
    height: 0.3em;
    background-color: black;
    border-radius: 0.3em;
    position: absolute;
    left: 0;
    top: 50%;
    translate: 0 -50%;
    transition: background-color 0.15s ease-in-out;
}

.hamburger-inner::before,
.hamburger-inner::after {
    content: "";
    width: 100%;
    height: 0.3em;
    background-color: black;
    border-radius: 0.3em;
    position: absolute;
    left: 0;
    transition: translate 0.15s 0.15s ease-in-out,
        rotate 0.15s 0.15s ease-in-out;
}

.hamburger-inner::before {
    top: -1em;
}

.hamburger-inner::after {
    top: 1em;
}

.hamburger-active .hamburger-inner {
    background-color: transparent;
}

.hamburger-active .hamburger-inner::before {
    translate: 0 1em;
    rotate: 45deg;
}

.hamburger-active .hamburger-inner::after {
    translate: 0 -1em;
    rotate: -45deg;
}
.header {
    background-color: $alpha;
    box-shadow: 0px 6px 24px $alpha-dark;
    border-radius: 16px;
    display: flex;
    padding: 0 2rem;
    backdrop-filter: blur(25px);
    z-index: 2;

    @media (max-width: 1024px) {
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 2rem;
    }
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

    @media (max-width: 1024px) {
        display: none;
    }
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

.header-profile {
    height: 100%;
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 1024px) {
        display: none;
    }
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

    @media (max-width: 1024px) {
        display: none;
    }
}

.profile-name {
    font-size: 15px;
    font-weight: 700;
    color: $black;
}
</style>
