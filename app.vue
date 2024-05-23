<template>
  <nav>
    <NuxtLink to="/">
      Home
    </NuxtLink>
    <NuxtLink to="/collections">
      Collections
    </NuxtLink>
    <NuxtLink to="/admin">
      Admin
    </NuxtLink>
  </nav>
  <main class="bg-slate-300 p-2 h-screen">
    <NuxtPage />
  </main>
</template>
