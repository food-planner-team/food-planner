<template>
    <main class="main bg-[#fff] rounded-lg">
        <div class="wrapper">
            <div class="h-full flex flex-col">
                <div class="m-5 mt-0 flex justify-between">
                    <div>
                        <h1 class="font-bold text-4xl my-5 xs:mt-0">
                            Statystyki
                        </h1>
                    </div>
                </div>
                <div class="h-full relative">
                    <div class="relative justify-items-center pb-5 pt-1 lg:absolute left-0 top-0 h-full w-full 3xl:px-2 ">
                        <div class="grid grid-cols-2 grid-rows-2 gap-4 h-full">
                            <div v-for="(item, key) in statistics"
                                class=" bg-gray-200/50 rounded-lg col-span-1 row-span-1 flex justify-center items-center text-lg font-bold">
                                {{ nameByKey[key] }}: {{ item }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Api from "../../common/services/Api.js";

const statistics = ref([]);
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
