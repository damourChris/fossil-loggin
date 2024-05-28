<script lang="ts" setup>
import type { Fossil } from '~/types'

import { columns } from '~/components/fossils/column'

const tree = await usePhyloTree()
const { data: fossils } = await useAsyncData<Fossil[]>(
  'fossilsList',
  () => queryContent<Fossil>('/fossils')
    .find(),
)
</script>

<template>
  <div class="flex flex-col items-center gap-16 px-4 py-16">
    <div class="flex justify-center bg-background p-8 rounded-md text-4xl ring-1 ring-slate-500">
      Fossil Viewer
    </div>

    <div
      class="flex justify-center items-center p-2 w-full lg:w-1/3 lg:h-full"
    >
      <NuxtPage />
    </div>

    <div class="bg-background p-4 rounded-md w-full ring-1 ring-slate-500">
      <SCDataTable
        v-if="fossils"
        class="max-w-full"
        :columns="columns"
        :data="fossils"
        search-field="name"
      />
    </div>

    <SCSeparator />

    <div class="flex flex-col justify-center p-4">
      <div class="flex py-4 text-xl">
        Phylogenetic Tree
      </div>
      <div class="flex justify-center items-center rounded-lg w-min ring-1 ring-slate-500">
        <PhyloTree
          v-if="tree != ''"
          :nwk="tree"
          :height="600"
          :width="600"
          class="rounded-lg"
        />
      </div>
    </div>
  </div>
</template>
