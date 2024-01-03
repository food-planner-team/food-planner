<template>
    <main class="main bg-[#fff] rounded-lg">
        <div class="wrapper">
            <div v-for="(item, key) in statistics">
                {{ nameByKey[key] }}: {{ item }}
            </div>
        </div>
    </main>
</template>

<script setup>
import {onMounted, ref} from "vue";
import Api from "../../common/services/Api.js";

const statistics = ref([]);
const page = ref(1);
const nameByKey = {
    countAcceptedProducts: 'Liczba zakceptowanych produktów',
    countAcceptedRecipes: 'Liczba zakceptowanych przepisów',
    countUser: 'Liczba użytkowników na portalu',
    countUseRecipesCurrentMonth: 'Liczba wykorzystanych przepisów w tym miesiącu',
}
const getStatistics = async () => {
    const data = await Api.get("/statistics");
    statistics.value = data.data;
};

onMounted(() => {
    getStatistics();
});

</script>

<style lang="scss" scoped>
.main {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "wrapper";
    gap: 1.5rem;
    overflow: hidden;
}

.wrapper {
    grid-area: wrapper;
    background-color: $alpha;
    box-shadow: 0px 6px 24px $alpha-dark;
    border-radius: 16px;
    backdrop-filter: blur(25px);
    overflow: hidden;

    @media screen and (min-width: 1024px) {
        padding: 2rem;
    }
}
</style>
