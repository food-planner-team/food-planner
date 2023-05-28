<template>
    <div
        class="flex items-center justify-center w-full min-h-screen relative overflow-hidden"
    >
        <div
            class="absolute bg-gradient-to-t from-primary to-transparent h-[550px] w-[550px] left-[-14rem] bottom-[-14rem] rounded-tl-[154px] rounded-tr-[123px] rounded-br-[234px] rounded-bl-[520px] rotate-[100deg] z-[-1] animate-spin-layout shadow-[0_0_45px_rgba(112,144,176,0.125)]"
        />
        <div
            class="absolute bg-gradient-to-t from-primary to-transparent h-[450px] w-[450px] right-[-14rem] top-[-14rem] rounded-tl-[54px] rounded-tr-[123px] rounded-br-[434px] rounded-bl-[20px] rotate-[108deg] z-[-1] animate-spin-layout shadow-[0_0_45px_rgba(112,144,176,0.125)]"
        />
        <Teleport to="body">
            <ToastList />
        </Teleport>

        <router-view v-slot="{ Component }">
            <transition name="unauth" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<script setup>
import ToastList from "../components/ToastList.vue";
</script>
<style>
.unauth-enter-active,
.unauth-leave-active {
    transition: 600ms ease all;
}

.unauth-enter-from,
.unauth-leave-to {
    opacity: 0;
}
</style>
