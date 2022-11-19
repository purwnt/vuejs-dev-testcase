<script setup>
import CardSong from "../components/CardSong.vue";
import { useSongStore } from "@/stores/song";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const { fetchResults, filter, results } = useSongStore();
const route = useRoute();

onMounted(() => {
  filter.searchQuery = route.query.q;
  fetchResults();
});

function loadMore() {
  filter.limit = filter.limit + 5;
  fetchResults();
}
</script>

<template>
  <main>
    <h4 class="text-sm text-center my-8">
      Search result for:
      <span class="text-purple-600 font-bold text-lg ml-1">{{
        filter.searchQuery
      }}</span>
    </h4>
    <div class="px-4">
      <CardSong
        v-for="item in results"
        :key="item.trackId"
        :coverImage="item.artworkUrl100"
        :artist="item.artistName"
        :title="item.trackName"
        :genres="[`${item.primaryGenreName}`]"
        :price="item.trackPrice"
      />
    </div>
    <div class="flex justify-center mb-8 pt-2">
      <button
        @click="loadMore"
        class="bg-[#e2e8f0] text-slate-600 font-medium px-10 h-10 rounded-full text-sm"
      >
        <span>Load More</span>
      </button>
    </div>
  </main>
</template>
