<template>
  <div
    class="m-h-48 rounded-lg border-2 border-gray-200 bg-white overflow-hidden ..."
  >
    <!-- <div class="h-5 w-full" :class="post.category.color"></div> -->
    <div class="py-2 pt-4 px-4">
      <!-- <img class="rounded-lg" src="../assets/2.png" width="1000" height="200" /> -->
      <img class="post-card--image rounded-lg" :src="randomImage()" />
      <p class="line-clamp-1 text-left mb-2 font-bold">
        {{ post.title }}
      </p>
      <p class="line-clamp-3 text-left font-grey">
        {{ clearText(post.content) }}
      </p>
      <button
        class="float-right bg-gray-200 p-1 my-2 hover:bg-grey-400 rounded-full inline-flex items-center"
      >
        <ArrowRightIcon
          @click="$router.push({ name: 'Post', params: { id: post.id } })"
          class="block h-6 w-6"
        ></ArrowRightIcon>
      </button>
    </div>
  </div>
</template>
<script setup>
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
const props = defineProps({
  post: Object,
});
const clearText = (text) => {
  const div = document.createElement("div");
  div.innerHTML = text;
  return div.innerText;
};
const randomImage = () => {
  const all = ["2.png", "4.jpg", "example.jpg"];
  console.log[Math.floor(Math.random() * all.length)];
  return "src/assets/" + all[Math.floor(Math.random() * all.length)];
};
</script>
<style>
.post-card--image {
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
}
</style>
