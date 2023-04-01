<template>
    <div class="bg-white rounded-2xl flex flex-1 flex-col items-center py-4">
        <div v-for="(link, index) in props.links" :key="index" class="w-full">
            <div v-if="!link.children.length">
                <router-link
                    :to="{ name: link.pathName }"
                    class="flex justify-center items-center gap-2 p-4"
                    @click="link.action"
                >
                    <span
                        class="material-symbols-outlined"
                        v-if="!link.children.length"
                    >
                        {{ link.icon }}
                    </span>
                    <p class="link-name" v-if="!link.children.length">
                        {{ link.name }}
                    </p>
                </router-link>
            </div>
            <div v-else>
                <router-link
                    v-for="(childLink, index) in link.children"
                    :key="index"
                    :to="{ name: childLink.pathName }"
                    class="flex justify-center items-center gap-2 p-4"
                    @click="childLink.action"
                >
                    <span class="material-symbols-outlined">
                        {{ childLink.icon }}
                    </span>
                    <p class="link-name">
                        {{ childLink.name }}
                    </p>
                </router-link>
            </div>
        </div>
        <router-link
            v-for="(link, index) in props.userLinks"
            :key="index"
            :to="{ name: link.pathName }"
            class="flex justify-center items-center gap-2 p-4"
            @click="link.action"
        >
            <span class="material-symbols-outlined">
                {{ link.icon }}
            </span>
            <p class="link-name">
                {{ link.name }}
            </p>
        </router-link>
    </div>
</template>

<script setup>
const props = defineProps({
    links: {
        type: Array,
        required: false,
        default: [],
    },
    userLinks: {
        type: Array,
        required: false,
        default: [],
    },
});
</script>

<style lang="scss" scoped></style>
