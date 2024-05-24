import type { ParsedContent } from '@nuxt/content/types'

export interface Collection extends ParsedContent {
  id: number
  title: string
  description?: string
  fossils: string[]
}

export interface Fossil extends ParsedContent {
  id: number
  name: string
  collection: number
  classification?: string
  description?: string
}
