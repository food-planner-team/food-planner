<template>
    <main class="flex flex-col justify-center items-center">
        <img
            src="../../../assets/page-not-found.svg"
            alt="page not found image"
            class="w-96"
        />
        <h1 class="p-6">Page not found</h1>
        <router-link class="form__input-btn" to="/"> Powrót </router-link>
    </main>
</template>

<script setup></script>

<style scoped>
.form__input-btn {
    text-align: center;
    text-decoration: none;
    width: 100%;
    border-radius: 16px;
    border: none;
    padding: 0.8rem 0;
    cursor: pointer;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 0.3px;
    transition: 0.45s ease;
    background-color: rgb(70, 110, 102);
    border: 1px solid rgb(70, 110, 102);
    color: white;
}

.form__input-btn:hover {
    background-color: rgb(60, 82, 77);
    border: 1px solid rgb(60, 82, 77);
}
</style>
