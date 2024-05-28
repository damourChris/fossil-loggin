<script setup lang="ts" generic="TData, TValue">
import type { ColumnDef, ColumnFiltersState, SortingState, VisibilityState } from '@tanstack/vue-table'
import {
  FlexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useVueTable,
} from '@tanstack/vue-table'

import { ChevronDown } from 'lucide-vue-next'

import {
  Button,
} from '@/components/ui/button'
import { valueUpdater } from '~/lib/utils'
import { Input } from '@/components/ui/input'

const props = withDefaults(defineProps<{
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  searchField?: string
  searchable?: boolean
  filterable?: boolean
  paginated?: boolean
  selectable?: boolean
}>(), {
  searchField: 'id',
  searchable: true,
  filterable: true,
  paginated: true,
  selectable: false,
})

// If not selectable, filter out the selection object in the row model
const columns = props.columns.filter(column => column.id !== 'selection')

const sorting = ref<SortingState>([])
const columnFilters = ref<ColumnFiltersState>([])
const columnVisibility = ref<VisibilityState>({})
const rowSelection = ref({})

const table = useVueTable({
  get data() { return props.data },
  get columns() { return columns },
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  onSortingChange: updaterOrValue => valueUpdater(updaterOrValue, sorting), onColumnVisibilityChange: updaterOrValue => valueUpdater(updaterOrValue, columnVisibility),
  onColumnFiltersChange: updaterOrValue => valueUpdater(updaterOrValue, columnFilters),
  onRowSelectionChange: updaterOrValue => valueUpdater(updaterOrValue, rowSelection),
  getFilteredRowModel: getFilteredRowModel(),
  state: {
    get sorting() { return sorting.value },
    get columnFilters() { return columnFilters.value },
    get columnVisibility() { return columnVisibility.value },
    get rowSelection() { return rowSelection.value },
  },

})
</script>

<template>
  <div>
    <div class="flex items-center gap-2 py-2">
      <div>
        <SCDropdownMenu>
          <SCDropdownMenuTrigger as-child>
            <Button
              variant="outline"
              class="ml-auto"
            >
              Columns
              <ChevronDown class="ml-2 w-4 h-4" />
            </Button>
          </SCDropdownMenuTrigger>
          <SCDropdownMenuContent align="end">
            <SCDropdownMenuCheckboxItem
              v-for="column in table.getAllColumns().filter((column) => column.getCanHide())"
              :key="column.id"
              class="capitalize"
              :checked="column.getIsVisible()"
              @update:checked="(value) => {
                column.toggleVisibility(!!value)
              }"
            >
              {{ column.id }}
            </SCDropdownMenuCheckboxItem>
          </SCDropdownMenuContent>
        </SCDropdownMenu>
      </div>
      <div
        v-if="props.searchable"
        class="flex items-center gap-2"
      >
        <Input
          class="max-w-sm"
          placeholder="Search..."
          :model-value="table.getColumn(props.searchField)?.getFilterValue() as string"
          @update:model-value=" table.getColumn(props.searchField)?.setFilterValue($event)"
        />
      </div>
    </div>
    <div>
      <div class="border rounded-md">
        <SCTable>
          <SCTableHeader>
            <SCTableRow
              v-for="headerGroup in table.getHeaderGroups()"
              :key="headerGroup.id"
            >
              <SCTableHead
                v-for="header in headerGroup.headers"
                :key="header.id"
              >
                <FlexRender
                  v-if="!header.isPlaceholder"
                  :render="header.column.columnDef.header"
                  :props="header.getContext()"
                />
              </SCTableHead>
            </SCTableRow>
          </SCTableHeader>
          <SCTableBody>
            <template v-if="table.getRowModel().rows?.length">
              <SCTableRow
                v-for="row in table.getRowModel().rows"
                :key="row.id"
                :data-state="row.getIsSelected() ? 'selected' : undefined"
              >
                <SCTableCell
                  v-for="cell in row.getVisibleCells()"
                  :key="cell.id"
                >
                  <FlexRender
                    :render="cell.column.columnDef.cell"
                    :props="cell.getContext()"
                  />
                </SCTableCell>
              </SCTableRow>
            </template>
            <template v-else>
              <SCTableRow>
                <SCTableCell
                  :col-span="columns.length"
                  class="h-24 text-center"
                >
                  No results.
                </SCTableCell>
              </SCTableRow>
            </template>
          </SCTableBody>
        </SCTable>
      </div>
      <div class="flex justify-end items-center space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          :disabled="!table.getCanPreviousPage()"
          @click="table.previousPage()"
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          :disabled="!table.getCanNextPage()"
          @click="table.nextPage()"
        >
          Next
        </Button>
      </div>
    </div>
  </div>
</template>
