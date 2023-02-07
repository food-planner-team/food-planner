<template>
    <div class="wrapper">
        <div class="planner-container" v-if="!loader">
            <!-- <PlannerBlock
                :class="{ 'planner-block--highlighted': true }"
                day="monday"
            />
            <PlannerBlock day="tuseday" /> -->
            <PlannerBlock
                v-for="item in days"
                v-model:recipes="recipes[item]"
                :date="item"
                :class="{ 'planner-block--highlighted': item === days[0] }"
            />
        </div>
    </div>
</template>
<script setup>
import PlannerBlock from "./PlannerBlock.vue";
import Recipe from "../../Recipe/models/Recipe";
import { onMounted, ref } from "vue";
import {
    getThisWeekDates,
    getFirstDayOfWeek,
    getLastDayOfWeek,
} from "../../common/utils/datesHelpers";

const days = getThisWeekDates();
const daysWithRecipes = {};
const loader = ref(true);

days.forEach((e) => {
    daysWithRecipes[e] = [];
});

const recipes = ref(daysWithRecipes);

onMounted(() => {
    Recipe.fetchUserRecipes({
        dateStart: `${getFirstDayOfWeek()}`,
        dateEnd: `${getLastDayOfWeek()}`,
    }).then((res) => {
        res.forEach((e) => {
            recipes.value[e.date].push(e);
        });
        loader.value = false;
    });
});
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
}

.planner-container {
    height: 100%;
    width: 100%;
    display: flex;
    gap: 1rem;
    overflow-x: scroll;
    padding-left: 2rem;
    padding-bottom: 2rem;
}
</style>
