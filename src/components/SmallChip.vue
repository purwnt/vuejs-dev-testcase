<script setup>
defineProps({
  text: String,
});
</script>

<template>
  <button class="bg-[#10b981] text-white text-xs h-6 px-4 rounded-full">
    {{ text }}
  </button>
</template>
