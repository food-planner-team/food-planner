<template>
    <TransitionGroup
        tag="div"
        enter-from-class="translate-x-full opacity-0"
        enter-active-class="duration-500"
        leave-active-class="duration-500"
        leave-to-class="translate-x-full opacity-0"
        class="fixed top-4 right-4 z-50 w-full max-w-xs space-y-4"
    >
        <ToastListItem
            v-for="toast in toasts"
            :key="toast.key"
            :message="toast.message"
            :type="toast.type"
            @close="close(toast)"
        />
    </TransitionGroup>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import ToastListItem from "./ToastListItem.vue";

const store = useStore();
const toasts = computed(() => store.getters["Toast/getToasts"]);

const close = (toast) => {
    store.commit("Toast/removeToast", toast);
};
</script>

<style lang="scss" scoped></style>
