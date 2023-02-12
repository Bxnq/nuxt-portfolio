<template>
    <div class="bg-dark-200 p-8 sm:w-4/5 rounded-xl text-light-100">
        <h1 class="text-4xl font-bold">{{ data.name }}</h1>
        <p class="mt-1 text-xl font-semibold">{{ data.description }}</p>

        <div class="mt-5">
            <div class="flex flex-col sm:flex-row gap-y-2 items-center justify-between">
                <div class="flex gap-2 flex-wrap">
                    <div class="badge" v-for="badge in data.badges" :key="badge">{{ badge }}</div>
                </div>
                <div class="flex gap-4 bg-dark-100 p-2 rounded-full">
                    <a :href="data.source"><img src="../../assets/img/github.png" class="w-8 h-8"></a>
                    <a :href="data.preview"><img src="../../assets/img/preview.png" class="w-8 h-8"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data']
}
</script>
<style>

</style>