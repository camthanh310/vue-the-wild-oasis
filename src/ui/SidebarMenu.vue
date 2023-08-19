<script lang="ts" setup>
import AppLogo from '@/ui/AppLogo.vue'
import MainNav from '@/ui/MainNav.vue'

</script>

<template>
  <aside class="aside">
    <AppLogo />
    <MainNav />
  </aside>
</template>

<style scoped>
.aside {
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
}
</style>