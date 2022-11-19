<script setup>
import SmallChip from "./SmallChip.vue";

defineProps({
  coverImage: String,
  artist: String,
  title: String,
  genres: Array,
  price: Number,
});
</script>

<template>
  <div class="flex gap-3 rounded-md mb-5 p-3 shadow-md bg-white h-26">
    <div class="">
      <img class="rounded-md w-22 h-22" :src="coverImage" alt="image-cover" />
    </div>
    <div class="w-2/3">
      <div class="h-16">
        <h5 class="text-xs font-medium mb-0.5">{{ artist }}</h5>
        <p class="text-sm font-bold leading-tight">
          {{ title }}
        </p>
      </div>
      <div class="mt-3">
        <div class="flex justify-between w-full relative">
          <SmallChip v-for="item in genres" :key="item" :text="item" />
          <div class="flex text-[#f5b014] items-center text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span class="text-xs font-medium ml-1">{{ price }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
