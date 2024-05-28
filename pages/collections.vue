<script lang="ts" setup>
import type { Collection } from '~/types'

import { columns } from '~/components/collections/column'

const { data: collections } = await useAsyncData<Collection[]>(
  'collections',
  () => queryContent<Collection>('/collections')
    .find(),
)
</script>

<template>
  <div class="flex flex-col items-center gap-16 px-4 py-16">
    <div class="flex justify-center bg-background p-8 rounded-md text-4xl ring-1 ring-slate-500">
      Collections
    </div>

    <div
      class="flex xl:flex-row flex-col gap-6 w-full"
    >
      <NuxtPage />
    </div>

    <div class="bg-background p-4 rounded-md w-full ring-1 ring-slate-500">
      <SCDataTable
        v-if="collections"
        :columns="columns"
        :data="collections"
        search-field="title"
      />
    </div>
  </div>
</template>
