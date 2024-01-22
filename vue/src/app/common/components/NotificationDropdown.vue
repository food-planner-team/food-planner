<template>
    <Menu as="div" class="relative inline-block text-left">
        <div>
            <MenuButton @click="readNotifications()"
                class="relative inline-flex items-center p-3 text-sm font-medium text-center rounded-lg">
                <span className="material-symbols-outlined">notifications</span>
                <div v-if="notifications.filter(e => e.read_at === null).length > 0" class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white
                    bg-red-500 rounded-full top-0 right-1 ">
                    {{ notifications.filter(e => e.read_at === null).length }}
                </div>
            </MenuButton>
        </div>
        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <MenuItems
                class="absolute right-0 z-10 mt-2 w-96 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-h-[40rem] overflow-auto">
                <div class="py-1">
                    <template v-if="notifications.length">
                        <router-link v-for="notification in notifications" :key="notification.id" :to="notification.type === 'App\\Notifications\\RecipeStatusChangedNotification' ?
                            `/moje-przepisy` : `/moje-produkty`">
                            <MenuItem v-slot="{ active }" class="flex items-center gap-2 cursor-pointer">
                            <a href="#" class="flex flex-1 items-center gap-3" :class="[
                                active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700 ',
                                'block px-4 py-2 text-sm',
                            ]">
                                <span className="material-symbols-outlined">
                                    {{ notification.type === 'App\\Notifications\\RecipeStatusChangedNotification' ?
                                        'menu_book' : 'fastfood' }}
                                </span>
                                <template
                                    v-if="notification.type === 'App\\Notifications\\RecipeStatusChangedNotification'">
                                    <p class="link-name flex flex-col">
                                        {{ notification.data.recipe.status === RecipeStatusEnum.REJECTED ?
                                            'Odrzucono przepis: ' : 'Zaakceptowano przepis: ' }}
                                        {{ notification.data.recipe.name }}
                                        <span class="text-sm"
                                            v-if="notification.type === 'App\\Notifications\\RecipeStatusChangedNotification' && notification.data.recipe.status === RecipeStatusEnum.REJECTED">
                                            Powód:
                                            {{ notification.data.message ? notification.data.message : '' }}
                                        </span>
                                    </p>
                                </template>
                                <template
                                    v-if="notification.type === 'App\\Notifications\\ProductStatusChangedNotification'">
                                    <p class="link-name flex flex-col">
                                        {{ notification.data.product.status === RecipeStatusEnum.REJECTED ?
                                            'Odrzucono produkt: ' : 'Zaakceptowano produkt: ' }}
                                        {{ notification.data.product.name }}
                                        <span class="text-sm"
                                            v-if="notification.type === 'App\\Notifications\\ProductStatusChangedNotification' && notification.data.product.status === ProductStatusEnum.REJECTED">
                                            Powód:
                                            {{ notification.data.message ? notification.data.message : '' }}
                                        </span>
                                    </p>
                                </template>
                            </a>
                            </MenuItem>
                        </router-link>
                    </template>
                    <template v-else>
                        <MenuItem v-slot="{ active }" class="flex items-center gap-2 cursor-pointer">
                        <a href="#" class="flex flex-1 items-center gap-3" :class="[
                            active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700 ',
                            'block px-4 py-2 text-sm',
                        ]">
                            <span className="material-symbols-outlined">
                                notifications
                            </span>
                            <p class="link-name">
                                Brak powiadomień
                            </p>
                        </a>
                        </MenuItem>
                    </template>
                </div>
            </MenuItems>
        </transition>
    </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import Message from "../../System/models/Message.js";
import { onBeforeMount, ref } from "vue";
import _get from "lodash/get.js";
import { useStore } from "vuex";
import { ProductStatusEnum } from "../../Product/models/Product";
import { RecipeStatusEnum } from "../../Recipe/models/Recipe";

const store = useStore();
let notifications = ref([]);
const getNotificationsData = async () => {
    const response = await Message.getNotifications()
    notifications.value = response.notifications.reverse();
};
const readNotifications = async () => {
    await Message.readNotifications(notifications.value);
};
onBeforeMount(() => {
    getNotificationsData();
    window.Echo.private(`App.Models.User.` + _get(store, "state.User.user.data.id")).notification((notification) => {
        notifications.value.unshift(new Message(notification));
    });
});
</script>

<style lang="scss">
.link-name::first-letter {
    text-transform: uppercase;
}
</style>
