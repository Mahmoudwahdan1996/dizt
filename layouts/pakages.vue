<template>
  <v-app>
    <LazyLayoutHeader />
    <main>
      <nuxt :nuxt-child-key="$route.fullPath" />
    </main>
  </v-app>
</template>

<script></script>
