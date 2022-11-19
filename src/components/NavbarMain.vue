<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import ButtonMedium from "./ButtonMedium.vue";
import { useSongStore } from "@/stores/song";

const showDialog = ref(false);
const { filter, fetchResults } = useSongStore();

function search() {
  showDialog.value = false;
  fetchResults();
}
</script>

<template>
  <nav class="flex navbar justify-between text-white px-3 z-50">
    <button class="h-12 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
    <router-link to="/">
      <img
        class="w-20 px-1 h-14"
        src="/images/logo-text.svg"
        alt="logo-ngmusic-text"
      />
    </router-link>
    <button @click="showDialog = true" class="h-12 cursor-pointer">
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
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </button>
  </nav>

  <!-- Dialog Modal -->
  <div
    v-if="showDialog"
    class="overflow-y-auto h-screen bg-[#1c1c2d] bg-opacity-80 overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full"
    aria-modal="true"
  >
    <div class="relative p-4 w-full">
      <button
        @click="showDialog = false"
        class="cursor-pointer text-white right-3 top-3 absolute"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div class="pt-[35vh] px-2">
        <h4 class="text-white text-xl font-medium text-center mb-8">Search</h4>
        <form @submit.prevent="search">
          <input
            v-model="filter.searchQuery"
            type="text"
            autofocus
            placeholder="Artist / Album / Title"
            class="h-11 px-3 w-full rounded-full mb-4 placeholder:text-sm text-center placeholder:text-black placeholder:text-opacity-80"
          />
          <ButtonMedium @click="search" :primary="true" title="Search" />
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  position: relative;
  overflow: hidden;
  height: 60px;
}

.navbar::before {
  border-radius: 100%;
  position: absolute;
  background-image: linear-gradient(to left, #a45deb, #712bda);
  right: -200px;
  left: -200px;
  top: -200px;
  content: "";
  z-index: -1;
  bottom: 0;
}
</style>
