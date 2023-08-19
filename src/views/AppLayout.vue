<script lang="ts" setup>
import { RouterView } from 'vue-router'
import AppHeader from '@/ui/AppHeader.vue'
import SidebarMenu from '@/ui/SidebarMenu.vue'
</script>

<template>
  <div class="layout">
    <AppHeader />

    <SidebarMenu />

    <main class="main">
      <div class="container">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
}

.main {
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
}

.container {
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
}
</style>
