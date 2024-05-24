<script lang="ts" setup>
useHead({
  title: 'Admin',
  meta: [
    {
      name: 'description',
      content: 'Admin page for managing the site',
    },
  ],
  script: [
    {
      src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
      defer: true,

    },
    {
      src: 'https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js',
      defer: true,
    },

  ],
})
</script>

<template>
  <div id="nc-root" />
</template>
