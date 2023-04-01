<template>
    <div class="wrapper">
        <HeaderNav />
        <Teleport to="body">
            <ToastList />
        </Teleport>
        <router-view v-slot="{ Component }">
            <transition name="default" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<script setup>
import HeaderNav from "../components/HeaderNav.vue";
import ToastList from "../components/ToastList.vue";
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
    padding: 2rem;
    display: grid;
    grid-template-rows: 80px 1fr;
    gap: 1.3rem;
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

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        padding: 10px;
    }
}
</style>
