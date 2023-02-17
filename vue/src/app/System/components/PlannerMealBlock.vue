<template>
    <div class="meal-block">
        <div class="meal-block__settings">
            <span class="setting__span-btn material-symbols-outlined handle">
                drag_indicator
            </span>
            <Dropdown
                icon="more_vert"
                :links="links"
                class="setting__span-btn"
            />
        </div>
        <div class="meal-block__img">
            <img src="https://unsplash.it/200/200" alt="" />
        </div>
        <div class="meal-block__info">
            <div class="info__title">{{ meal.name }}</div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
import Dropdown from "../../common/components/Dropdown.vue";

const props = defineProps({
    meal: Object,
});

const emit = defineEmits(["remove"]);

const remove = () => {
    emit("remove");
};

const links = ref([
    {
        name: "zobacz danie",
        pathName: "",
        icon: "search",
        action: "",
    },
    {
        name: "usuń",
        pathName: "",
        icon: "delete",
        action: () => remove(),
    },
]);
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
        overflow: hidden;
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
