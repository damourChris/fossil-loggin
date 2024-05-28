<script lang="ts" setup>
import type { Classification } from '~/types'

const { classification } = defineProps<{
  classification: Classification
}>()

const { domain, kingdom, phylum, class: class_, order, family, genus, species } = classification
</script>

<template>
  <SCBreadcrumb>
    <SCBreadcrumbList>
      <SCBreadcrumbItem>
        <NuxtLink>
          {{ domain }}
        </NuxtLink>
      </SCBreadcrumbItem>
      <SCBreadcrumbSeparator />
      <SCBreadcrumbItem>
        <NuxtLink>
          {{ kingdom }}
        </NuxtLink>
      </SCBreadcrumbItem>
      <SCBreadcrumbSeparator />
      <SCBreadcrumbItem>
        <NuxtLink>
          {{ phylum }}
        </NuxtLink>
      </SCBreadcrumbItem>
      <SCBreadcrumbItem>
        <NuxtLink>
          {{ class_ }}
        </NuxtLink>
      </SCBreadcrumbItem>
      <SCBreadcrumbSeparator />
      <SCBreadcrumbItem>
        <NuxtLink>
          {{ order }}
        </NuxtLink>
      </SCBreadcrumbItem>
      <SCBreadcrumbSeparator />
      <SCBreadcrumbItem>
        <NuxtLink>
          {{ family }}
        </NuxtLink>
      </SCBreadcrumbItem>
      <SCBreadcrumbSeparator />
      <SCBreadcrumbItem>
        <NuxtLink>
          {{ genus }}
        </NuxtLink>
      </SCBreadcrumbItem>
      <SCBreadcrumbSeparator />
      <SCBreadcrumbItem>
        <NuxtLink>
          {{ species }}
        </NuxtLink>
      </SCBreadcrumbItem>
    </SCBreadcrumbList>
  </SCBreadcrumb>
</template>
