<script lang="ts" setup>
const actions = [
  {
    title: 'Collections',
    description: 'View all the collections.',
    color: 'slate',
    link: '/collections',
  },
  {
    title: 'Fossils',
    description: 'View all the fossils.',
    color: 'blue',
    link: '/fossils',
  },
  {
    title: 'About',
    description: 'Learn more about Fossil Tracker.',
    color: 'card',
    link: '/about',
  },

]
</script>

<template>
  <div class="">
    <div class="flex justify-center p-2 w-full">
      <div class="py-24 pt-48">
        <span class="text-3xl">FossLog</span>
      </div>
    </div>
    <div class="flex justify-center gap-4 p-2 w-full">
      <SCCard class="w-1/2">
        <SCCardHeader>
          <SCCardTitle>Home</SCCardTitle>
        </SCCardHeader>
        <SCCardContent>
          <div class="flex">
            Welcome to Fossil Logging! This is a simple web application that allows you to log your fossil collection.
          </div>
        </SCCardContent>
      </SCCard>

      <div class="flex flex-col">
        <SCCard
          v-for="action in actions"
          :key="action.title"
          class="shadow-neutral-300 shadow-sm hover:shadow-lg dark:hover:shadow-lg dark:shadow-neutral-700"
        >
          <NuxtLink :to="action.link">
            <SCCardHeader>
              <SCCardTitle>
                {{ action.title }}
              </SCCardTitle>
            </SCCardHeader>
            <SCCardContent>
              <div class="flex">
                {{ action.description }}
              </div>
            </SCCardContent>
          </NuxtLink>
        </SCCard>
      </div>
    </div>
  </div>
</template>
