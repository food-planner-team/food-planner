<template>
    <main class="main">
        <div class="wrapper">
            <h1 class="font-bold text-2xl m-5 pl-3">
                Dodawanie nowego produktu
            </h1>
            <div class="m-5 pl-3">
                <p class="pb-2 text-sm text-gray-500">
                    <label for="search">NAZWA PRODUKTU</label>
                </p>
                <input
                    type="search"
                    id="search"
                    class="rounded-lg w-[29rem]"
                    placeholder="Wyszukaj"
                />
                <button
                    class="inline-flex justify-center rounded-md border border-transparent ml-5 bg-primary-dark px-12 w-[200px] py-2 text-base font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                    Szukaj
                </button>
            </div>
            <div
                class="m-5 p-7 pl-3 pt-8 flex flex-wrap gap-16 justify-between h-[550px] 3xl:h-[57rem] overflow-y-scroll"
            >
                <ProductCard v-for="i in 15" />
            </div>
        </div>
    </main>
</template>
<script setup>
import ProductCard from "../components/ProductCard.vue";
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
    padding: 2rem;
    overflow: hidden;
}
</style>
