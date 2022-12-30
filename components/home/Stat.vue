<template>
    <div>
        <div class="bg-dark-300 rounded-2xl p-4 w-80 sm:w-72 text-light-100 shadow-sm shadow-dark-200">
            <h1 class="text-6xl font-extrabold">{{ amount }}</h1>
            <h2 class="text-xl">{{ title }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    props: ['amount', 'title'],
}
</script>