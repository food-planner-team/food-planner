<template>
    <Alert/>
    <router-view/>
</template>

<script setup>
import Alert from "./app/System/components/Alert.vue";
import User from "./app/System/models/User.js";
import {onBeforeMount, onMounted} from "vue";
import {onBeforeRouteUpdate} from "vue-router";

// onBeforeMount(async () => {
//     await User.fetchCurrent()
// })
// onMounted(async ()=>{
//     await User.fetchCurrent()
// })
// onBeforeRouteUpdate(()=>{
//     User.fetchCurrent()
// })
</script>
