import type { Column, ColumnDef } from '@tanstack/vue-table'
import { h } from 'vue'
import { ArrowUpDown } from 'lucide-vue-next'
import type { FossilEntry, Tag } from '~/types'
import Button from '@/components/ui/button/Button.vue'
import Checkbox from '@/components/ui/checkbox/Checkbox.vue'
import Badge from '@/components/ui/badge/Badge.vue'

function getTableHeader<T>(column: Column<T, unknown>, columnName: string) {
  return h(Button, {
    variant: 'ghost',
    onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
  }, () => [columnName, h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
}

export const columns: ColumnDef<FossilEntry>[] = [
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
    accessorKey: 'occurrence',
    header: ({ column }) => getTableHeader(column, 'Occurrence'),
    cell: ({ row }) => {
      const name = row.getValue<number>('occurrence')

      const formatted = name

      return h('div', { class: 'text-right font-medium' }, formatted)
    },
  },
  {
    accessorKey: 'tags',
    header: ({ column }) => getTableHeader(column, 'Tags'),
    cell: ({ row }) => {
      const tags = row.getValue<Tag[]>('tags')
      const formatted = h(
        'div',
        { class: 'flex flex-wrap' },
        tags?.map(tag => h(Badge, { class: 'mr-2' }, tag.label)),
      )
      console.log(tags)
      return h('div', { class: 'text-right font-medium' }, formatted)
    },
  },

]
