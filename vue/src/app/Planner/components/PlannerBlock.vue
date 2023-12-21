<template>
    <div class="planner-block" highlighted="{highlighted}">
        <div class="block-header">
            <div class="block-header__title">
                {{ getLocaleDate(date) }}
            </div>
        </div>
        <div class="block-stats">
            <div class="block-stats__element">
                {{ "Kalorie " }}
                <span class="element__highlighted"> {{ sumKcal }} </span>
            </div>
            <div class="block-stats__element">
                {{ "Dania " }}
                <span class="element__highlighted"> {{ recipes.length }} </span>
            </div>
        </div>
        <div class="relative h-full w-full">
            <div class="block-items-container">
                <draggable
                    item-key="order"
                    :list="props.recipes"
                    v-bind="dragOptions"
                    @start="drag = true"
                    @end="drag = false"
                    @change="saveUserRecipes"
                    handle=".handle"
                >
                    <template #item="{ element, index }">
                        <div :key="element.name">
                            <PlannerMealBlock
                                :meal="element"
                                @remove="removeAt(index)"
                                :class="[windowWidth > 1024 && 'handle']"
                            />
                        </div>
                    </template>
                </draggable>
                <Loader
                    v-if="loader"
                    class="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                <AddMeal :date="date" v-if="!loader" @update="addMeal" />
            </div>
        </div>
    </div>
</template>
<script setup>
import PlannerMealBlock from "./PlannerMealBlock.vue";
import AddMeal from "./AddMeal.vue";
import Recipe from "../../Recipe/models/Recipe.js";
import draggable from "vuedraggable";
import { ref, onMounted, computed } from "vue";
import {
    getCurrentDayName,
    getLocaleDate,
} from "../../common/utils/datesHelpers.js";
import Loader from "../../common/components/Loader.vue";

const windowWidth = ref(window.innerWidth);

const handleResize = () => {
    windowWidth.value = window.innerWidth;
};

onMounted(() => {
    window.addEventListener("resize", handleResize);
});

const props = defineProps({
    date: String,
    recipes: {
        type: Array,
        default: [],
        required: true,
    },
    loader: Boolean,
});
const saveUserRecipes = () => {
    const recipesData = props.recipes.map((e, index) => {
        return { recipe_id: e.id, order: index };
    });

    Recipe.saveUserPlannerRecipes(props.date, recipesData);
};

const dragOptions = ref({
    animation: 200,
    group: "meals",
    disabled: false,
    ghostClass: "ghost",
});

const drag = ref(false);

const removeAt = (id) => {
    props.recipes.splice(id, 1);
    saveUserRecipes();
};

const addMeal = (item) => {
    props.recipes.push(item);
    saveUserRecipes();
};

const sumKcal = computed(() => {
    return props.recipes.reduce((acc, curr) => {
        return acc + curr.kcal;
    }, 0);
});
</script>
<style lang="scss" scoped>
.ghost {
    opacity: 0.5;
    background: $grey-light;
    border-radius: 8px;
}

.planner-block {
    height: 100%;
    min-width: 355px;
    width: 355px;
    margin-right: 1rem;
    border-radius: 8px;
    box-shadow: 0px 6px 24px $alpha-dark;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: relative;
    overflow: hidden;
    padding-right: 1rem;

    &--highlighted {
        &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 400px;
            background: $linear-gradient-card;
            left: 0;
            top: 0;
            z-index: -1;
        }
    }

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding-inline: 1rem;
    }
}

.block-header {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding-right: 1rem;

    &__title {
        font-size: 18px;
        font-weight: 800;
    }

    &__title::first-letter {
        text-transform: uppercase;
    }

    &__text {
        font-size: 12px;
        color: $grey;
        font-weight: 500;
    }
}

.block-stats {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding-right: 1rem;
    @media (max-width: 600px) {
        width: 100%;
        padding-inline: 1rem;
    }

    &__element {
        font-size: 10px;
        font-weight: 600;
        border-radius: 24px;
        letter-spacing: 0.3px;
        background-color: $primary-dark;
        color: $white;
        padding: 0.7rem 0;
        flex: 1;
        text-align: center;
        text-transform: uppercase;

        .element__highlighted {
            color: $typography;
            margin-left: 5px;
        }
    }
}

.block-items-container {
    width: 100%;
    padding-right: 1rem;
    padding-bottom: 2rem;
    padding-left: 5px;
    max-height: 100%;
    overflow-y: auto;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;

    @media (max-width: 600px) {
        position: initial;
        min-height: 300px;
    }
}
</style>
