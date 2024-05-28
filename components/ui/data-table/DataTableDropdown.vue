<script setup lang="ts">
import { MoreHorizontal } from 'lucide-vue-next'

defineProps<{
  payment: {
    id: string
  }
}>()

function copy(id: string) {
  navigator.clipboard.writeText(id)
}
</script>

<template>
  <SCDropdownMenu>
    <SCDropdownMenuTrigger as-child>
      <Button
        variant="ghost"
        class="p-0 w-8 h-8"
      >
        <span class="sr-only">Open menu</span>
        <MoreHorizontal class="w-4 h-4" />
      </Button>
    </SCDropdownMenuTrigger>
    <SCDropdownMenuContent align="end">
      <SCDropdownMenuLabel>Actions</SCDropdownMenuLabel>
      <SCDropdownMenuItem @click="copy(payment.id)">
        Copy payment ID
      </SCDropdownMenuItem>
      <SCDropdownMenuSeparator />
      <SCDropdownMenuItem>View customer</SCDropdownMenuItem>
      <SCDropdownMenuItem>View payment details</SCDropdownMenuItem>
    </SCDropdownMenuContent>
  </SCDropdownMenu>
</template>
