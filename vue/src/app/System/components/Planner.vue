<template>
    <div class="wrapper">
        <div class="planner-container">
            <PlannerBlock
                :class="{ 'planner-block--highlighted': true }"
                day="monday"
            />
            <PlannerBlock day="tuseday" />
            <!-- <PlannerBlock />
            <PlannerBlock /> -->
        </div>
    </div>
</template>
<script setup>
import PlannerBlock from "./PlannerBlock.vue";
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
