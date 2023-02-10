<template>
    <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>
</template>
<script></script>
<style>
.page-enter-active,
.page-leave-active {
    transition: 600ms ease all;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
}
</style>
