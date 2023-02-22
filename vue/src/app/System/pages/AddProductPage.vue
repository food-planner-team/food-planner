<template>
    <main class="main">
        <AddProduct />
    </main>
</template>
<script setup>
import AddProduct from "../components/AddProduct.vue";
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
</style>
