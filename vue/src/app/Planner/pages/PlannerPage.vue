<template>
    <main class="main">
        <PlannerMenu v-model:dateStart="dateStart" v-model:dateEnd="dateEnd" />
        <Planner :dateStart="dateStart" :dateEnd="dateEnd" />
    </main>
</template>
<script setup>
import Planner from "../components/Planner.vue";
import PlannerMenu from "../components/PlannerMenu.vue";
import { ref } from "vue";

const dateStart = ref("");
const dateEnd = ref("");
</script>
<style lang="scss" scoped>
.main {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60px 1fr;
    grid-template-areas:
        "creator"
        "planner";
    gap: 1.5rem;
    overflow: hidden;
}
</style>
