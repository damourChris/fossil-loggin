<script lang="ts" setup>
import type { Collection } from '~/types'

const { collections } = defineProps<{
  collections: Collection[]
}>()
</script>

<template>
  <SCTable>
    <SCTableCaption>A list of all the collections.</SCTableCaption>
    <SCTableHeader>
      <SCTableRow>
        <SCTableHead>
          Name
        </SCTableHead>
        <SCTableHead>
          Location
        </SCTableHead>
        <SCTableHead class="text-right">
          Description
        </SCTableHead>
      </SCTableRow>
    </SCTableHeader>
    <SCTableBody>
      <SCTableRow
        v-for="collection in collections"
        :key="collection.id"
      >
        <SCTableCell>
          <NuxtLink :to="`/collections/${collection.title}`">
            {{ collection.name }}
          </NuxtLink>
        </SCTableCell>
        <SCTableCell>
          {{ collection.location }}
        </SCTableCell>
        <SCTableCell class="text-right">
          {{ collection.description }}
        </SCTableCell>
      </SCTableRow>
    </SCTableBody>
  </SCTable>
</template>
