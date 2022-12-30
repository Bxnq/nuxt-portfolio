<template>
  <div>
    <div class="rounded-full absolute w-80 h-80 top-0 left-0 bg-lightBlue blur-3xl opacity-20 -z-10"></div>
    <div class="rounded-full absolute w-80 h-80 bottom-0 right-0 bg-lightRed blur-3xl opacity-20 -z-10"></div>

    <div class="h-screen mx-8 flex items-center justify-center sm:mx-32 sm:justify-start text-light-100">
      <div class="flex flex-col">
        <h1 class="text-6xl sm:text-7xl font-title font-bold">I'm Beenqt</h1>
        <h1 class="text-6xl sm:text-7xl font-title font-bold">and like
          <span class="bg-gradient-to-r text-transparent bg-clip-text from-blue-600 to-red-400">VueJS</span>.
        </h1>

        <div class="flex gap-2 mt-2">
          <NuxtLink class="button bg-primary" href="/contact">Contact</NuxtLink>
          <a class="button bg-secondary" href="#projects">Projects</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const writing = ['VueJS', 'NuxtJS', 'JavaScript', 'Mountainbiking', 'Java']

</script>