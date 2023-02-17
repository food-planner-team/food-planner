<template>
    <main class="main">
        <Planner :dateStart="dateStart" :dateEnd="dateEnd" />
        <CreatorSideMenu
            v-model:dateStart="dateStart"
            v-model:dateEnd="dateEnd"
        />
        <RecommendedPanel />
    </main>
</template>
<script setup>
import Planner from "../components/Planner.vue";
import CreatorSideMenu from "../components/CreatorSideMenu.vue";
import RecommendedPanel from "../components/RecommendedPanel.vue";
import { ref } from "vue";

const name = ref("");
const dateStart = ref("");
const dateEnd = ref("");
</script>
<style lang="scss" scoped>
.main {
    display: grid;
    grid-template-columns: 1fr 420px;
    grid-template-rows: 1fr 380px;
    grid-template-areas:
        "planner side"
        "planner recommended";
    gap: 1.5rem;
}
</style>
