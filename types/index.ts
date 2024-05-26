import type { ParsedContent } from '@nuxt/content/types'

export type PhyloNode = {
  name: string
  children: PhyloNode[]
}

export type PhyloTree = {
  root: PhyloNode
  separation: number
}

export type Tag = {
  label: string
}

export type FossilEntry = {
  id: string
  name: string
  occurrence: string
  tags: Tag[]
}

export interface Collection extends ParsedContent {
  title: string
  location?: string
  description?: string
  fossils: FossilEntry[]
}

export type Classification = {
  [key: string ]: string | undefined
  domain: string
  kingdom: string
  phylum: string
  class?: string
  order?: string
  family?: string
  genus?: string
  species?: string
}

export interface Fossil extends ParsedContent {
  name: string
  location: string
  collection: number
  classification: Classification
  description?: string
}
