<template>
  <div
    v-if="data.show"
    role="alert"
    :class="
      data.type === 'success'
        ? 'bg-green-100 border border-green-400 text-green-700'
        : 'bg-red-100 border border-red-400 text-red-700'
    "
  >
    <span class="block sm:inline">{{ data.message }}</span>
  </div>
</template>
<script setup>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";

const store = useStore();
const data = computed(() => store.state.Notification.notification);
</script>
<style>
.alert-box {
  position: relative;
  /* right: 10px; */
  /* top: 10px; */
}
</style>
