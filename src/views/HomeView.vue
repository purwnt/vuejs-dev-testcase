<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import ButtonMedium from "../components/ButtonMedium.vue";

const router = useRouter();
const searchQuery = ref(null);

function search() {
  if (searchQuery.value) {
    router.push(`/search?q=${searchQuery.value}`);
  }
}
</script>

<template>
  <main>
    <div>
      <img
        class="w-30 mx-auto pt-[37vh]"
        src="/images/logo.svg"
        alt="ngmusic-logo"
      />
    </div>
    <div class="px-6 bottom-6 absolute w-full">
      <form @submit.prevent="search">
        <input
          v-model="searchQuery"
          type="text"
          tabindex="1"
          placeholder="Artist / Album / Title"
          class="h-11 px-3 w-full rounded-full mb-4 placeholder:text-sm text-center placeholder:text-black placeholder:text-opacity-80"
        />
        <ButtonMedium @click="search" :primary="false" title="Search" />
      </form>
    </div>
  </main>
</template>
