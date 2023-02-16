<template>
    <Menu as="div" class="relative inline-block text-left">
        <div>
            <MenuButton class="flex items-center gap-2 capitalize">
                <span className="material-symbols-outlined">{{
                    props.icon
                }}</span>
                {{ props.name }}
            </MenuButton>
        </div>

        <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
        >
            <MenuItems
                class="absolute right-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                :style="props.style"
            >
                <div class="py-1">
                    <MenuItem
                        v-slot="{ active }"
                        class="flex items-center gap-2 cursor-pointer"
                        v-for="link in props.links"
                        :key="link.name"
                    >
                        <router-link :to="{ name: link.pathName }">
                            <a
                                @click="link.name === 'wyloguj' && logout()"
                                href="#"
                                class="flex flex-1 items-center gap-3"
                                :class="[
                                    active
                                        ? 'bg-gray-100 text-gray-900'
                                        : 'text-gray-700',
                                    'block px-4 py-2 text-sm',
                                ]"
                            >
                                <span className="material-symbols-outlined">
                                    {{ link.icon }}
                                </span>
                                <p class="link-name">
                                    {{ link.name }}
                                </p>
                            </a>
                        </router-link>
                    </MenuItem>
                </div>
            </MenuItems>
        </transition>
    </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { useRouter } from "vue-router";
import User from "../../System/models/User";
const router = useRouter();

const props = defineProps({
    name: {
        type: String,
        required: false,
        default: "",
    },
    icon: {
        type: String,
        required: false,
        default: "",
    },
    links: {
        type: Array,
        required: false,
        default: [],
    },
    style: String,
});

const logout = () => {
    User.logout()
        .then(() => {
            router.push({name: 'Login'})
        })
ł};
</script>

<style lang="scss">
.link-name::first-letter {
    text-transform: uppercase;
}
</style>
