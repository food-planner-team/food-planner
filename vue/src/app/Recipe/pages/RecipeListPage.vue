<template>
    <main class="main">
        <div class="wrapper">
            <h1 class="font-bold text-2xl m-5 pl-3">Przepisy</h1>
            <div class="m-5 pl-3">
                <p class="pb-2 text-sm text-gray-500">
                    <label for="search">NAZWA PRZEPISU</label>
                </p>
                <div class="flex flex-wrap gap-6">
                    <input
                        type="search"
                        id="search"
                        class="rounded-lg w-full md:w-[29rem]"
                        placeholder="Wyszukaj"
                        v-model="searchValue"
                        @keyup.enter="searchValue.length && getProducts()"
                    />
                    <div
                        class="flex gap-6 flex-wrap justify-center w-full md:w-auto"
                    >
                        <button
                            class="hidden lg:inline-flex justify-center rounded-md border border-transparent bg-primary-dark px-12 w-[200px] py-2 text-base font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 items-center"
                            @click="searchValue.length && getProducts()"
                        >
                            Szukaj
                        </button>
                    </div>
                </div>
            </div>
            <div class="h-full bg-slate-400"></div>
        </div>
    </main>
</template>

<script setup></script>

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
