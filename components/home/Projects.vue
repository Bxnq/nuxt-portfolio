<template>
  <div class="bg-dark-300 mt-80 p-10" id="projects">    
    <h1 class="text-center text-light-100 text-4xl font-bold">Best Projects</h1>

    <div class="mt-10 mb-24 flex flex-col gap-5">
      <div class="flex justify-center" v-for="project in projects" :key="project">
        <Project :data="project" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Project from './Project.vue';

const projects = [
  {
    name: 'Hangman',
    description: "A simple Hangman that is fun to play.",
    preview: 'https://hangman.devbxnq.de/',
    source: 'https://github.com/Bxnq/hangman',
    badges: [
      'NuxtJS',
      'JavaScript',
      'TailwindCSS'
    ],
  },
  {
    name: 'Todo App',
    description: "A simple todo app where you can add tasks you want to do in the day and when you're done, mark them as done. If you don't want to do a task, you can simply delete it.",
    preview: 'https://todo.devbxnq.de',
    source: 'https://github.com/Bxnq/todolist',
    badges: [
      'VueJS',
      'JavaScript'
    ],
  },
  {
    name: 'Portfolio',
    description: "A nice looking Portfolio Page where you can look at my work and see what i like to do.",
    preview: 'https://devbxnq.de',
    source: 'https://github.com/Bxnq/nuxt-portfolio',
    badges: [
      'NuxtJS',
      'JavaScript',
      'TailwindCSS'
    ],
  }
]
</script>

<style>

</style>
