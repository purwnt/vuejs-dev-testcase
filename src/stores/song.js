import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import { api } from "@/api/axios";

export const useSongStore = defineStore("songStore", () => {
  const filter = reactive({
    searchQuery: "",
    limit: 5,
  });
  const results = reactive([]);
  const count = ref(null);
  const totalCount = ref(null);
  const isLoading = ref(false);
  const errors = ref(null);

  function resetFilter() {
    filter.searchQuery = "";
    filter.limit = 5;
  }

  async function fetchResults() {
    try {
      isLoading.value = true;
      errors.value = null;
      count.value = null;

      const query = [];
      let queryString = "";

      if (filter.searchQuery) {
        query.push(`term=${filter.searchQuery}`);
      }
      if (filter.limit) {
        query.push(`limit=${filter.limit}`);
      }
      if (query.length) {
        queryString += `?${query.join("&")}`;
      }

      const { data } = await api.get(`/search${queryString}`);

      console.log(data);
      results.splice(0, results.length);
      results.push(...data.results);
      count.value = data.results?.length;
      totalCount.value = data.resultCount;
      return Promise.resolve();
    } catch (err) {
      errors.value = err;
    } finally {
      isLoading.value = false;
    }
  }

  return {
    results,
    isLoading,
    errors,
    count,
    filter,
    totalCount,
    fetchResults,
    resetFilter,
  };
});
