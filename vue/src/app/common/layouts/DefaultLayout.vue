<template>
    <div class="wrapper">
        <HeaderNav />
        <router-view v-slot="{ Component }">
            <transition name="default" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
        <Footer />
    </div>
</template>

<script setup>
import HeaderNav from "../components/HeaderNav.vue";
import Footer from "../components/Footer.vue";
</script>

<style lang="scss" scoped>
.default-enter-active,
.default-leave-active {
    transition: 600ms ease all;
}

.default-enter-from,
.default-leave-to {
    opacity: 0;
}

.wrapper {
    width: 100%;
    min-height: 100vh;
    padding: 3rem;
    display: grid;
    grid-template-rows: 80px 1fr 40px;
    gap: 1.5rem;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        width: 960px;
        height: 840px;
        background: $linear-gradient;
        transform: rotate(10deg);
        left: -15%;
        bottom: -20%;
        border-radius: 434px 123px 213px 132px;
        z-index: -1;
    }

    &::after {
        content: "";
        position: absolute;
        width: 590px;
        height: 518px;
        background: $linear-gradient;
        transform: rotate(180deg);
        right: -10%;
        top: -10%;
        border-radius: 434px 123px 213px 132px;
        z-index: -1;
    }
}
</style>
