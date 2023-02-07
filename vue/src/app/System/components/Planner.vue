<template>
    <div class="wrapper">
        <div class="planner-container" v-if="!loader">
            <!-- <PlannerBlock
                :class="{ 'planner-block--highlighted': true }"
                day="monday"
            />
            <PlannerBlock day="tuseday" /> -->
            <PlannerBlock  v-for="item in days" v-model:recipes="recipes[item]" />
        </div>
    </div>
</template>
<script setup>
import PlannerBlock from "./PlannerBlock.vue";
import Recipe from "../../Recipe/models/Recipe";
import {reactive, onMounted, ref} from "vue";

const recipes = ref({
    "2023-02-06": [],
    "2023-02-07": [],
    "2023-02-08": []
});
const loader = ref(true)
const days = ["2023-02-06", "2023-02-07","2023-02-08"];
onMounted(() => {
    Recipe.fetchUserRecipes({
        dateStart: "2023-02-06",
        dateEnd: "2023-02-08",
    }).then((res) => {
        res.forEach((e) => {
            recipes.value[e.date].push(e)
        });
        loader.value = false
    });
});
// DODAĆ watchera który bd śledził recipes (opcja deep) i na każdą zmianę wysyłał request do api zapisujący.
// Prze wysłaniem należy zmapować w każdym dniu posiłki i ustawić order od nowa

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
