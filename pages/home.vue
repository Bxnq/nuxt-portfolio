<template>
  <div>
    <Welcome />
    <Stats />
    <Projects />
  </div>
</template>

<script setup>
import Projects from '~~/components/home/Projects.vue';
import Stats from '~~/components/home/Stats.vue';
import Welcome from '../components/home/Welcome.vue';
definePageMeta({
    alias: '/'
});
</script>