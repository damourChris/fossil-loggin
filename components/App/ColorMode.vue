<template>
  <SCSelect v-model="$colorMode.preference">
    <SCSelectTrigger>
      <SCSelectValue placeholder="Color Mode preference" />
    </SCSelectTrigger>
    <SCSelectContent>
      <SCSelectGroup>
        <SCSelectItem value="system">
          System
        </SCSelectItem>
        <SCSelectItem value="light">
          Light
        </SCSelectItem>
        <SCSelectItem value="dark">
          Dark
        </SCSelectItem>
      </SCSelectGroup>
    </SCSelectContent>
  </SCSelect>
</template>

<script setup>
// const colorMode = useColorMode()
</script>

<style>
/* body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
} */
</style>
