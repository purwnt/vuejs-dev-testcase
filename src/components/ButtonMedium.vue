<template>
  <button
    :class="
      primary
        ? 'bg-gradient-to-l from-[#a45deb] to-[#712bda] '
        : 'bg-white bg-opacity-20'
    "
    class="text-white text-sm tracking-wider w-full rounded-full h-11"
  >
    {{ title }}
  </button>
</template>

<script setup>
defineProps({
  title: String,
  primary: Boolean,
});
</script>
