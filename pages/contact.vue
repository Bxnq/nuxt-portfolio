<template>
  <div style="height: calc(100vh - 4rem);" class="py-20">
    <h1 class="text-4xl text-center font-bold text-light-100">Contact Me</h1>

    <div class="flex flex-col mt-5 mx-auto gap-2 w-4/5 sm:w-4/6 md:3/6 xl:w-5/12 text-light-100">
      <div
        class="bg-error rounded-md border border-error border-opacity-20 bg-opacity-10 mt-5 text-xl text-center w-4/5 m-auto text-light-100 p-5"
        v-if="error">
        {{ error }}
      </div>

      <div
        class="bg-success rounded-md border border-success border-opacity-20 bg-opacity-10 mt-5 text-xl text-center w-4/5 m-auto text-light-100 p-5"
        v-if="success">
        {{ success }}
      </div>

      <input v-model="data.name" class="p-2 pl-3 bg-dark-100 rounded-md focus:outline-none focus:outline-dark-200"
        type="text" placeholder="Name" required>
      <input v-model="data.title" class="p-2 pl-3 bg-dark-100 rounded-md focus:outline-none focus:outline-dark-200"
        type="text" placeholder="Title">
      <textarea v-model="data.description"
        class="p-2 pl-3 bg-dark-100 rounded-md focus:outline-none focus:outline-dark-200" placeholder="Description"
        required></textarea>
      <button @click="send" type="submit" class="button bg-primary">Submit</button>
    </div>

  </div>
</template>

<script setup>
let error = "";
let success;
let data = reactive({
  name: '',
  title: '',
  description: ''
});

async function send() {
  error = "";
  success = "";

  if (data.name === "" && data.title === "" && data.description === "") {
    error = "Everything is unset!"

    data.name = "unset";

    reset();
    return;
  }

  if (data.name === "") {
    error = "Name is unset! ";
    reset();
    return;
  }

  if (data.title === "") {
    reset();
    error = "Title is unset! ";
    return;
  }

  if (data.description === "") {
    reset();
    error = "Description is unset!";
    return;
  }

  error = "";
  success = "Success! You successfuly send a message to me.";

  const response = await useLazyFetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify({
      name: data.name,
      title: data.title,
      description: data.description
    })
  });

  console.log(response);
  

  reset();
}

function reset() {
  data.name = "";
  data.title = "";
  data.description = "";
}
</script>