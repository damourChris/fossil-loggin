<script lang="ts" setup>
</script>

<template>
  <footer class="flex flex-col items-center gap-2 bg-background p-4">
    <div class="flex flex-col">
      <p>
        Fossil Tracker is a simple web application that allows you to log your fossil collection.
      </p>
    </div>
    <SCSelectSeparator />
    <div class="flex items-center gap-8 text-nowrap">
      &copy; {{ new Date().getFullYear() }} FossLog | Damour Chris
    </div>
  </footer>
</template>
