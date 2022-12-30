<template>
    <div class="flex flex-wrap gap-5 justify-center mx-8">
        <div v-for="item in items" :key="item">
            <Stat :amount="item.amount" :title="item.title" />
        </div>
    </div>
</template>

<script setup>
/*
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
*/

import Stat from './Stat.vue';

const items = [
    {
        amount: '10+',
        title: 'Happy Customers'
    },
    {
        amount: '2+',
        title: 'Years of Experience'
    },
    {
        amount: '250k+',
        title: 'Lines of Code'
    },
]
</script>

<style>

</style>