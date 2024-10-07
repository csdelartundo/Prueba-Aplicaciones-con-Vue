<script setup>
import PrimerEjercicio from "./components/PrimerEjercicio.vue";
import ParentView from "./components/ParentView.vue";
</script>

<template>
  <div>
    <nav>
      <router-link to="/">Home |</router-link>
      <router-link to="/about">About</router-link>
    </nav>

    <PrimerEjercicio />
    <ParentView />

    <router-view />
  </div>
</template>