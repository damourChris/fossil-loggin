<script lang="ts" setup>
import type { Fossil } from '~/types'

const { name } = defineProps<{
  name: string
}>()

const { data: fossil } = await useAsyncData<Fossil>(
  `fossils-${name}`,
  () => queryContent<Fossil>('/fossils')
    .where({
      name: name,
    })
    .findOne())
if (!fossil.value) {
  throw createError({
    statusCode: 404,
    message: 'Fossil not found',
  })
}
const { description, classification } = fossil.value

const { domain, phylum, class: class_, order, family, genus, species } = classification
</script>

<template>
  <SCCard>
    <SCCardHeader>
      <SCCardTitle>{{ name }}</SCCardTitle>
      <ClassificationBreadcrumb :classification="classification" />
    </SCCardHeader>
    <SCCardContent>
      <SCCardDescription>{{ description }}</SCCardDescription>
    </SCCardContent>
    <SCCardFooter />
  </SCCard>
</template>
