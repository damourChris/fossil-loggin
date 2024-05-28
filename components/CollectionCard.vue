<script lang="ts" setup>
import { columns } from './occurence/columns'
import type { Collection, Fossil } from '~/types'

const { collection } = defineProps<{
  collection: Collection
}>()

const { name, description, location, fossils } = collection

const fossilsNames = fossils.map(fossil => fossil.name)

// Fetch Fossil fossils from nuxt content based on the fossils list
// const { data: fossilsList } = await useAsyncData<Fossil[]>(
//   `fossils-${name}`,
//   () => queryContent<Fossil>('/fossils')
//     .where({
//       name: { $in: fossilsNames },
//     })
//     .find())
</script>

<template>
  <SCCard>
    <SCCardHeader>
      <SCCardTitle>{{ name }}</SCCardTitle>
      <SCCardDescription>
        {{ location }}
      </SCCardDescription>
    </SCCardHeader>

    <SCCardContent>
      <div class="flex py-8">
        {{ description }}
      </div>

      <SCCard
        v-if="fossils"
      >
        <SCCardHeader>
          <SCCardTitle>
            Fossils
          </SCCardTitle>
        </SCCardHeader>
        <SCCardContent>
          <SCDataTable
            :columns="columns"
            :data="fossils"
            search-field="name"
            :selectable="false"
            :sortable="false"
          />
        </SCCardContent>
      </SCCard>
    </SCCardContent>
  </SCCard>
</template>
