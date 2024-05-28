<script lang="ts" setup>
import type { Fossil } from '~/types'

const { id } = useRoute().params

// Fetch Fossil fossil from nuxt content
const { data: fossil } = await useAsyncData<Fossil>(
  `fossil-${id}`,
  () => queryContent<Fossil>('/fossils')
    .where({
      name: id,
    })
    .findOne())
</script>

<template>
  <div>
    <FossilCard
      v-if="fossil"
      :name="fossil.name"
      class="rounded-xl w-full"
    />
  </div>
</template>
