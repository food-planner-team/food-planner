<template>
    <main class="main">
        <Planner />
        <StatsPanel />
        <RecommendedPanel />
    </main>
</template>
<script setup>
import Planner from "../components/Planner.vue";
import StatsPanel from "../components/StatsPanel.vue";
import RecommendedPanel from "../components/RecommendedPanel.vue";
</script>
<style lang="scss" scoped>
.main {
    display: grid;
    grid-template-columns: 1fr 380px;
    grid-template-rows: 1fr 380px;
    grid-template-areas:
        "planner stats"
        "planner recommended";
    gap: 1.5rem;
}
</style>
