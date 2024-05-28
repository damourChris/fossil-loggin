import type { Column, ColumnDef } from '@tanstack/vue-table'
import { h } from 'vue'
import { ArrowUpDown } from 'lucide-vue-next'
import type { Collection, FossilEntry } from '~/types'
import Button from '@/components/ui/button/Button.vue'
// import Checkbox from '@/components/ui/checkbox/Checkbox.vue'
import Badge from '@/components/ui/badge/Badge.vue'
import { NuxtLink } from '#components'

function getTableHeader<T>(column: Column<T, unknown>, columnName: string) {
  return h(Button, {
    variant: 'ghost',
    onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
  }, () => [columnName, h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
}

// cols in collection:
// title: string
// location?: string
// description?: string
// fossils: FossilEntry[]

export const columns: ColumnDef<Collection>[] = [
  {
    id: 'view-button',
    cell: ({ row }) => h(Button, {
      variant: 'default',
      onClick: () => {
        console.log('Navigate to collection page')
      },
    }, h(NuxtLink, {
      to: `/collections/${row.original.id}`,
    }, 'View')),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: 'title',
    accessorKey: 'title',
    header: ({ column }) => getTableHeader(column, 'Title'),
    cell: ({ row }) => {
      const title = row.getValue<string>('title')

      const formatted = title

      return h('div', { class: 'text-right font-medium' }, formatted)
    },
  },
  {
    id: 'location',
    accessorKey: 'location',
    header: ({ column }) => getTableHeader(column, 'Location'),
    cell: ({ row }) => {
      const location = row.getValue<string>('location')

      const formatted = location

      return h('div', { class: 'text-right font-medium' }, formatted)
    },
  },
  {
    id: 'description',
    accessorKey: 'description',
    header: ({ column }) => getTableHeader(column, 'Description'),
    cell: ({ row }) => {
      const description = row.getValue<string>('description')

      const formatted = description

      return h('div', { class: 'text-right font-medium' }, formatted)
    },
  },
  {
    id: 'fossils',
    accessorKey: 'fossils',
    header: ({ column }) => getTableHeader(column, 'Fossils'),
    cell: ({ row }) => {
      const fossils = row.getValue<FossilEntry[]>('fossils')
      const formatted = fossils

      const root = h('div', { class: 'flex gap-2 flex-col text-right font-medium' }, formatted.map((fossil) => {
        return h(Badge, { class: '' }, [
          h('div', { class: 'mr-2' }, fossil.occurrence),
          h('div', { class: '' }, fossil.name),
        ])
      },

      ))

      return root
    },

  },
]

// {
//   id: 'actions',
//   enableHiding: false,
//   cell: ({ row }) => {
//     const name = row.original

//     return h('div', { class: 'relative' }, h(DropdownAction, {
//       name,
//     }))
//   },
// },
