<template>
    <div class="meal-block">
        <div class="meal-block__settings">
            <span class="setting__span-btn material-symbols-outlined handle">
                drag_indicator
            </span>
            <Menu as="div" class="relative inline-block text-left">
                <div>
                    <MenuButton>
                        <span
                            class="setting__span-btn material-symbols-outlined"
                        >
                            more_vert
                        </span>
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
                        class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                        <div class="py-1">
                            <MenuItem
                                v-slot="{ active }"
                                class="flex items-center gap-2 cursor-pointer"
                            >
                                <a
                                    href="#"
                                    :class="[
                                        active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700',
                                        'block px-4 py-2 text-sm',
                                    ]"
                                >
                                    <span className="material-symbols-outlined">
                                        search
                                    </span>
                                    Zobacz danie
                                </a>
                            </MenuItem>
                            <MenuItem
                                v-slot="{ active }"
                                class="flex items-center gap-2 cursor-pointer"
                            >
                                <a
                                    href="#"
                                    :class="[
                                        active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700',
                                        'block px-4 py-2 text-sm',
                                    ]"
                                    @click="remove"
                                >
                                    <span className="material-symbols-outlined">
                                        delete
                                    </span>
                                    Usuń
                                </a>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </transition>
            </Menu>
        </div>
        <div class="meal-block__img"></div>
        <div class="meal-block__info">
            <div class="info__title">{{ meal.name }}</div>
        </div>
    </div>
</template>
<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

const props = defineProps({
    meal: Object,
});

const emit = defineEmits(["remove"]);

const remove = () => {
    emit("remove");
};
</script>
<style lang="scss" scoped>
.handle {
    cursor: grab;
}

.meal-block {
    display: grid;
    grid-template-columns: 25% 70%;
    grid-template-rows: auto 1fr;
    gap: 0.85rem 1rem;
    grid-template-areas:
        "meal-settings meal-settings"
        "meal-image meal-information";
    border-radius: 8px;
    padding: 1rem;
    padding-top: 0.8rem;
    box-shadow: 2px 3px 12px $alpha-dark;

    &__settings {
        grid-area: meal-settings;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;

        .setting__span-btn {
            padding: 3px 0;
            border-radius: 6px;
            transition: background-color 0.2s ease-out;

            &:hover {
                background-color: $white-accent;
            }
        }
    }

    &__img {
        grid-area: meal-image;
        width: 100%;
        aspect-ratio: 1/1;
        background-color: $typography;
        border-radius: 6px;
    }

    &__info {
        grid-area: meal-information;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.5rem;

        .info__title {
            font-size: 15px;
            font-weight: 700;
        }
    }
}
</style>
