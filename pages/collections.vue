<script lang="ts" setup>
type Collection = {
  id: number
  name: string
  description: string
  image: string
  products: Fossil[]
}

type Fossil = {
  id: number
  classification: string
  description: string
}

defineProps<{
  collection: Collection
}>()
</script>

<template>
  <div />
</template>
