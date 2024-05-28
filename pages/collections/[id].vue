<script lang="ts" setup>
import type { Collection } from '~/types'

const { id } = useRoute().params

// Fetch Fossil collection from nuxt content
const { data: collection } = await useAsyncData<Collection>(
  `collection-${id}`,
  () => queryContent<Collection>('/collections')
    .where({
      id: id as string,
    })
    .findOne())
</script>

<template>
  <CollectionCard
    v-if="collection"
    :collection="collection"
  />
</template>
