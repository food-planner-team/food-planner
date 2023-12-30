<template>
    <div class="meal-block justify-center items-center relative">
        <div class="meal-block__img">
            <img :src="meal?.image?.url" :alt="meal.name" width="60" height="60" />
        </div>
        <div class="meal-block__info">
            <div class="flex flex-col gap-2 justify-between">
                <div class="info__title">{{ meal.name }}</div>
                <div class="flex gap-1 text-[0.65rem]">
                    <RecipeCardInfo>
                        <template #icon>
                            equalizer
                        </template>
                        {{ meal.kcal }} kcal
                    </RecipeCardInfo>
                    <RecipeCardInfo>
                        <template #icon>
                            schedule
                        </template>
                        {{ meal.preparationTime }} min
                    </RecipeCardInfo>
                </div>
            </div>
            <div class="absolute top-2 right-2">
                <Dropdown icon="more_vert" :links="links" class="setting__span-btn" />
                <span class="material-symbols-outlined lg:hidden" :class="[windowWidth < 1024 && 'handle']">
                    drag_indicator
                </span>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import Dropdown from "../../common/components/Dropdown.vue";
import RecipeCardInfo from "../../Recipe/components/RecipeCardInfo.vue";

const props = defineProps({
    meal: Object,
});

const windowWidth = ref(window.innerWidth);

const handleResize = () => {
    windowWidth.value = window.innerWidth;
};

onMounted(() => {
    window.addEventListener("resize", handleResize);
});

const emit = defineEmits(["remove"]);

const remove = () => {
    emit("remove");
};

const links = ref([
    {
        name: "zobacz danie",
        pathName: "RecipeDetails",
        params: { id: props.meal.id },
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
img {
    aspect-ratio: 1 / 1;
    width: 100%;
    object-fit: cover;
}

.handle {
    cursor: grab;
}

.meal-block {
    display: grid;
    grid-template-columns: 25% 70%;
    grid-template-rows: 1fr;
    gap: 0.85rem 1rem;
    grid-template-areas:
        "meal-settings meal-settings"
        "meal-image meal-information";
    border-radius: 8px;
    padding: 1rem;
    padding-top: 0rem;
    box-shadow: 2px 3px 12px $alpha-dark;
    cursor: grab;
    margin-bottom: 1rem;

    &__settings {
        grid-area: meal-settings;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
    }

    .setting__span-btn {
        padding: 3px 0;
        border-radius: 6px;
        transition: background-color 0.2s ease-out;

        &:hover {
            background-color: $white-accent;
        }
    }

    &__img {
        grid-area: meal-image;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        overflow: hidden;
    }

    &__info {
        grid-area: meal-information;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;

        .info__title {
            font-size: 15px;
            font-weight: 700;
        }
    }
}
</style>
