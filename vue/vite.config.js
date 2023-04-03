import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/",
    // root: '@/src',
    plugins: [vue()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./src/plugins/styles/_variables.scss";`,
            },
        },
    },
    server: {
        host: true,
    },
});
