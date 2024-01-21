<template>
    <header class="header relative">
        <router-link :to="{ name: 'Planner' }">
            <div class="logo-name">
                <img :src="logo" alt="logo" width="36" height="30"/>
                <p>Food Planner</p>
            </div>
        </router-link>
        <div class="header-nav">
            <div class="nav-element" v-for="link in links" :key="link.name">
                <template v-if="link.children.length">
                    <Dropdown :name="link.name" :icon="link.icon" :links="link.children" :style="style"/>
                </template>
                <template v-else>
                    <router-link :to="{ name: link.pathName }" class="flex items-center gap-2">
                        <span className="material-symbols-outlined">{{
                                link.icon
                            }}</span>
                        <p class="capitalize">{{ link.name }}</p>
                    </router-link>
                </template>
            </div>
        </div>
        <div class="header-profile">



<!--            <button type="button"-->
<!--                    class="relative inline-flex items-center p-3 text-sm font-medium text-center rounded-lg">-->
<!--                <span className="material-symbols-outlined" size="xl">Notifications</span>-->
<!--                <div v-if="notifications.length > 0"-->
<!--                     class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full top-0 right-1 ">-->
<!--                    {{ notifications.length }}-->
<!--                </div>-->
<!--            </button>-->
<!--            <Dropdown icon="notifications" class="hidden sm:inline-block">-->
<!--&lt;!&ndash;                <div class="profile-avatar">&ndash;&gt;-->
<!--&lt;!&ndash;                    <img v-if="image?.url" :src="image?.url" alt="user's avatar" width="50" height="50"/>&ndash;&gt;-->
<!--&lt;!&ndash;                    <img v-else src="../assets/user.png" alt="user's avatar" width="50" height="50"/>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                <span class="font-bold ml-1">&ndash;&gt;-->
<!--&lt;!&ndash;                        Witaj, {{ user?.name }}!&ndash;&gt;-->
<!--&lt;!&ndash;                    </span>&ndash;&gt;-->
<!--            </Dropdown>-->
            <div class="profile-block">
                <NotificationDropdown />
                <Dropdown icon="expand_more" :links="myAccountLinks" class="hidden sm:inline-block">
                    <div class="profile-avatar">
                        <img v-if="image?.url" :src="image?.url" alt="user's avatar" width="50" height="50"/>
                        <img v-else src="../assets/user.png" alt="user's avatar" width="50" height="50"/>
                    </div>
                    <span class="font-bold ml-1">
                        Witaj, {{ user?.name }}!
                    </span>
                </Dropdown>
            </div>
        </div>
        <button class="hamburger" aria-label="hamburger-menu" @click="() => (isOpen = !isOpen)">
            <span class="hamburger-box" :class="[isOpen ? 'hamburger-active' : '']">
                <span class="hamburger-inner"></span>
            </span>
        </button>
        <HamburgerMenu :links="links" class="absolute top-[115%] right-0 w-full duration-500 ease-in lg:hidden"
                       :class="[isOpen ? 'right-0' : 'right-[-110%]']" :userLinks="myAccountLinks"/>
    </header>
</template>
<script setup>
import {ref, computed, onBeforeMount} from "vue";
import logo from "../assets/logo.svg";
import Dropdown from "./Dropdown.vue";
import {useRouter} from "vue-router";
import User from "../../System/models/User";
import {useStore} from "vuex";
import HamburgerMenu from "./HamburgerMenu.vue";
import {employeeLinks, adminLinks, userLinks} from "../utils/links";
import {UserRoleEnum} from "../../System/models/User";
import _get from "lodash/get.js";
import Message from "../../System/models/Message.js";
import NotificationDropdown from "./NotificationDropdown.vue";

const store = useStore();

const user = computed(() => store.getters["User/getUser"]);
const image = ref("");
let notifications = ref([]);

const getUserById = async (id) => {
    const response = await User.getUserById(id);

    image.value = response.image;
};
const getNotificationsData = async () => {
    const response = await Message.getNotifications()
    notifications.value = response.notifications;
};

onBeforeMount(async () => {
    await getUserById(user.value.id);
    window.Echo.private(`App.Models.User.`+ _get(store, "state.User.user.data.id")).notification((notification) => {
        console.log(notification);
    });
    await getNotificationsData();
});

const router = useRouter();

const isOpen = ref(false);

const emit = defineEmits(["close-hamburger"]);

const style = "left: 0";

const links = computed(() => {
    switch (user.value.role) {
        case UserRoleEnum.USER:
            return userLinks(isOpen);
        case UserRoleEnum.EMPLOYEE:
            return employeeLinks(isOpen);
        case UserRoleEnum.ADMIN:
            return adminLinks(isOpen);
    }
});

const logout = () => {
    User.logout().then(() => {
        router.push({name: "Login"});
    });
};

const myAccountLinks = ref([
    {
        name: "moje konto",
        pathName: "MyAccount",
        icon: "person",
        action: () => (isOpen.value = !isOpen.value),
    },
    {
        name: "wyloguj",
        pathName: "",
        icon: "logout",
        action: () => logout(),
        disabled: false,
    },
]);
</script>
<style lang="scss" scoped>
.hamburger {
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
