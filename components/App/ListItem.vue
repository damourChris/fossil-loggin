<script lang="ts" setup>
defineProps<{
  title: string
  to: string
}>()
</script>

<template>
  <li>
    <NuxtLink :to="to">
      {{ title }}
    </NuxtLink>
  </li>
</template>
