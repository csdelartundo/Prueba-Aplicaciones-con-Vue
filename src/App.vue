<script setup>
import PrimerEjercicio from "./components/PrimerEjercicio.vue";
import ChildView from "./components/ChildView.vue";
import ParentView from "./components/ParentView.vue";
</script>

<template>
  <div>
    <PrimerEjercicio />
    <ParentView />
  </div>
</template>