<template>
  <div class="bg-dark-400 h-16 flex items-center fixed w-full bg-opacity-90">
    <img src="../../assets/img/logo.svg" class="h-16" alt="">

    <ul class="flex ml-4 gap-8 font-bold text-2xl">
        <li class="text-white" v-for="item in items" :key="item">
          <NuxtLink :to="item.to">{{ item.name }}</NuxtLink>
        </li>
    </ul>
  </div>
</template>

<script setup>
const items = [
    {
        name: 'Home',
        to: '/'
    },
    {
        name: 'Contact',
        to: '/contact'
    }
]
</script>