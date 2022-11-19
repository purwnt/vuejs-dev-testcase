<template>
  <div class="min-h-screen font-roboto bg-slate-100 overflow-x-hidden">
    <NavbarMain />
    <slot></slot>
  </div>
</template>

<script setup>
import NavbarMain from "../components/NavbarMain.vue";
</script>
