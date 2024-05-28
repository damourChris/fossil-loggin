<script lang="ts" setup>
import type { Fossil } from '~/types'

const { fossils } = defineProps<{
  fossils: Fossil[]
}>()

const classifications = ['Domain', 'Kingdom', 'Phylum', 'Class', 'Order', 'Family', 'Genus', 'Species']
</script>

<template>
  <SCTable>
    <SCTableCaption>A list of all the fossils.</SCTableCaption>
    <SCTableHeader>
      <SCTableRow>
        <SCTableHead>
          Name
        </SCTableHead>
        <SCTableHead
          v-for="classification in classifications"
          :key="classification"
        >
          {{ classification }}
        </SCTableHead>
      </SCTableRow>
    </SCTableHeader>
    <SCTableBody>
      <SCTableRow
        v-for="fossil in fossils"
        :key="fossil.name"
      >
        <SCTableCell>
          <NuxtLink :to="`/fossils/${fossil.name}`">
            {{ fossil.name }}
          </NuxtLink>
        </SCTableCell>
        <SCTableCell
          v-for="classification in classifications"
          :key="classification"
        >
          {{ fossil.classification[classification.toLowerCase()] }}
        </SCTableCell>
      </SCTableRow>
    </SCTableBody>
  </SCTable>
</template>
