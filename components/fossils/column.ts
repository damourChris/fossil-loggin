import type { Column, ColumnDef } from '@tanstack/vue-table'
import { h } from 'vue'
import { ArrowUpDown } from 'lucide-vue-next'
import type { Classification, Fossil } from '~/types'
import Button from '@/components/ui/button/Button.vue'
import Checkbox from '@/components/ui/checkbox/Checkbox.vue'
import { NuxtLink } from '#components'
import Breadcrumb from '../ui/breadcrumb/Breadcrumb.vue'

function getTableHeader<T>(column: Column<T, unknown>, columnName: string) {
  return h(Button, {
    variant: 'ghost',
    onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
  }, () => [columnName, h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
}

export const columns: ColumnDef<Fossil>[] = [
  {
    id: 'view-button',
    cell: ({ row }) => h(Button, {
      variant: 'default',
    }, h(NuxtLink, {
      to: `/fossils/${row.original.name}`,
    }, 'View')),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: 'selection',
    header: ({ table }) => h(Checkbox, {
      'checked': table.getIsAllPageRowsSelected(),
      'onUpdate:checked': (value: boolean) => table.toggleAllPageRowsSelected(!!value),
      'ariaLabel': 'Select all',
    }),
    cell: ({ row }) => h(Checkbox, {
      'checked': row.getIsSelected(),
      'onUpdate:checked': (value: boolean) => row.toggleSelected(!!value),
      'ariaLabel': 'Select row',
    }),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => getTableHeader(column, 'Name'),
    cell: ({ row }) => {
      const name = row.getValue<string>('name')

      const formatted = name

      return h('div', { class: 'text-right font-medium' }, formatted)
    },
  },
  {
    accessorKey: 'classification',
    header: ({ column }) => getTableHeader(column, 'Classification'),
    cell: ({ row }) => {
      const { domain, kingdom, phylum, class: class_, family, genus, order, species } = row.getValue<Classification>('classification')

      // const formatted = `${domain} > ${kingdom} > ${phylum} > ${class_} > ${order} > ${family} > ${genus} > ${species}`

      const formatted = h(Breadcrumb, {}, {
        
      })

      return h('div', { class: 'text-right font-medium' }, formatted)
    },
  },
  {
    accessorKey: 'location',
    header: ({ column }) => getTableHeader(column, 'Location'),
    cell: ({ row }) => {
      const location = row.getValue<string>('location')

      const formatted = location

      return h('div', { class: 'text-right font-medium' }, formatted)
    },
  },
  {
    accessorKey: 'collection',
    header: ({ column }) => getTableHeader(column, 'Collection'),
    cell: ({ row }) => {
      const collection = row.getValue('collection')
      const formatted = collection as number

      return h('div', { class: 'text-right font-medium' }, formatted)
    },
  },
  {
    accessorKey: 'description',
    header: ({ column }) => getTableHeader(column, 'Description'),
    cell: ({ row }) => {
      const description = row.getValue('description')

      const formatted = description as string

      return h('div', { class: 'text-right font-medium' }, formatted)
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
