<template>
  <div class="relative w-full">
    <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <img
              class="flex-shrink-0 h-10 w-10 cursor-pointer"
              @click="$router.push({ name: 'Home' })"
              src="/src/assets/logo.png"
              alt="My logo"
            />
            <input
              v-if="props.show"
              type="text"
              name="search"
              id="search"
              v-model="search"
              class="h-10 mx-5 block w-full min-w-0 rounded-md border-gray-300 pl-4 pr-8 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm md:lg:xl:mx-10 md:lg:xl:min-w-full"
              placeholder="Search"
            />
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <Menu as="div" class="relative ml-3">
                <div>
                  <MenuButton
                    v-if="user.data"
                    class="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="h-8 w-8 rounded-full"
                      src="/src/assets/user.png"
                      alt=""
                    />
                  </MenuButton>
                  <a
                    v-else
                    href="/login"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >Zaloguj</a
                  >
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
                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <MenuItem
                      v-for="item in userNavigation"
                      :key="item.name"
                      @click="item.action"
                      v-show="!item.needAdmin || user.data.is_admin"
                      v-slot="{ active }"
                    >
                      <a
                        :href="item.href"
                        :class="[
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700',
                        ]"
                        >{{ item.name }}</a
                      >
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <div
              class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              v-if="!open && !user.data"
              :static="true"
              static="true"
            >
              <UserCircleIcon
                @click="$router.push({ name: 'Login' })"
                class="block h-6 w-6 cursor-pointer"
                aria-hidden="true"
              />
            </div>
            <DisclosureButton
              v-else
              class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span class="sr-only">Open main menu</span>
              <Bars3Icon
                v-if="!open && user.data"
                class="block h-6 w-6"
                aria-hidden="true"
              />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          <DisclosureButton
            v-for="item in userNavigation"
            :key="item.name"
            as="a"
            v-show="item.needAdmin && user.isAdmin"
            :href="item.href"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            {{ item.name }}
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import {
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
} from "@heroicons/vue/24/outline";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";
import { useRouter } from "vue-router";
// import store from "../store";

const router = useRouter();
const store = useStore();
const user = computed(() => store.state.user);
const props = defineProps({
  show: { type: Boolean, default: false },
});
const search = computed({
  get: () => store.state.search,
  set: (v) => store.commit('setSearch', v)
});
const userNavigation = [
  {
    name: "Settings",
    needAdmin: true,
    action: () => {
      router.push({ name: "PostsAdmin" });
    },
  },
  { name: "Sign out", needAdmin: false, action: logout },
];

function logout(ev) {
  ev.preventDefault();
  store.dispatch("logout").then(() => {
    if (router.params.meta.requiresAuth) {
      router.push({
        name: "Home",
      });
    }
  });
}
</script>
