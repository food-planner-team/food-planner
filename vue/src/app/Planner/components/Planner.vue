<template>
    <div class="wrapper">
        <div class="planner-container">
            <PlannerBlock
                v-for="item in days"
                v-model:recipes="recipes[item]"
                :date="item"
                :class="{
                    'planner-block--highlighted': item === getCurrentDay(),
                }"
                :loader="loader"
                ref="plannerBlocks"
            />
        </div>
    </div>
</template>
<script setup>
import PlannerBlock from "./PlannerBlock.vue";
import Recipe from "../../Recipe/models/Recipe.js";
import { onMounted, ref, computed, watch } from "vue";
import {
    getFirstDayOfWeek,
    getLastDayOfWeek,
    getCurrentDay,
    getDatesBetweenDays,
} from "../../common/utils/datesHelpers.js";

const props = defineProps({
    dateStart: {
        type: String,
        default: "",
    },
    dateEnd: {
        type: String,
        default: "",
    },
});

const dateStart = computed(() => props.dateStart || getFirstDayOfWeek());
const dateEnd = computed(() => props.dateEnd || getLastDayOfWeek());
const days = ref(getDatesBetweenDays(dateStart.value, dateEnd.value));
const loader = ref(true);
const recipes = ref({});
const plannerBlocks = ref([]);

onMounted(() => {
    const elementHighlighted = document.querySelector(
        ".planner-block--highlighted"
    );

    const elementPlannerContainer =
        document.querySelector(".planner-container");

    const { x: xCord } = elementHighlighted.getBoundingClientRect();

    elementPlannerContainer.scrollTo(xCord - 100, 0);
});

watch(
    [dateStart, dateEnd],
    () => {
        days.value = getDatesBetweenDays(dateStart.value, dateEnd.value);

        days.value.forEach((e) => {
            recipes.value[e] = [];
        });

        loader.value = true;
        Recipe.fetchUserRecipes({
            include: "image",
            dateStart: `${dateStart.value}`,
            dateEnd: `${dateEnd.value}`,
        })
            .then((res) => {
                res.forEach((e) => {
                    recipes.value[e.date].push(e);
                });
            })
            .finally(() => {
                loader.value = false;
            });
    },
    { immediate: true }
);
</script>
<style lang="scss" scoped>
.wrapper {
    grid-area: planner;
    background-color: $alpha;
    box-shadow: 0px 6px 24px $alpha-dark;
    border-radius: 16px;
    backdrop-filter: blur(25px);
    padding: 2rem;
    overflow: hidden;

    @media (max-width: 600px) {
        padding: 0;
    }
}

.planner-container {
    height: 100%;
    width: 100%;
    display: flex;
    gap: 1rem;
    overflow-x: scroll;
    padding-left: 1rem;
    padding-bottom: 2rem;

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 0;
        padding-bottom: 10px;
        padding-top: 10px;
    }
}
</style>
