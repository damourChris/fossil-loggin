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
  <div
    id="nc-root"
    class="absolute dark:bg-white max-w-full h-full"
  />
</template>

<style>
/* .css-hn3jn7-EditorContainer {
    width: 100%;
    min-width: 800px;
    height: 100%;
    position: relative;
    top: 0px;
    left: 0px;
    overflow: hidden;
    padding-top: 66px;
    background-color: rgb(239, 240, 244);
}
.css-1ukgnkc-ToolbarContainer {
    box-shadow: rgba(68, 74, 87, 0.05) 0px 2px 6px 0px, rgba(68, 74, 87, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 2px 54px;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    min-width: 800px;
    z-index: 300;
    background-color: rgb(255, 255, 255);
    height: 66px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
} */
</style>
