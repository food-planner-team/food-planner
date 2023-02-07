<template>
    <div class="wrapper">
        <div class="planner-container">
            <!-- <PlannerBlock
                :class="{ 'planner-block--highlighted': true }"
                day="monday"
            />
            <PlannerBlock day="tuseday" /> -->
            <PlannerBlock v-for="item in recipes" />
        </div>
    </div>
</template>
<script setup>
import PlannerBlock from "./PlannerBlock.vue";
import Recipe from "../../Recipe/models/Recipe";
import { ref, onMounted } from "vue";

let recipes = ref([]);

onMounted(() => {
    Recipe.fetchUserRecipes({
        dateStart: "2023-02-04",
        dateEnd: "2023-02-06",
    }).then((res) => {
        res.forEach((e) => {
            recipes.value.push(e);
            // console.log(e);
        });
    });

    console.log("recipe", recipes);

    console.log("recipe value", recipes.value);
    recipes.value.forEach((e) => {
        console.log(e);
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
