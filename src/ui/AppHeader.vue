<script lang="ts" setup>
import UserAvatar from '@/ui/UserAvatar.vue'
import HeaderMenu from '@/ui/HeaderMenu.vue'
</script>

<template>
  <header class="header">
    <UserAvatar />

    <HeaderMenu />
  </header>
</template>

<style scoped>
.header {
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
}
</style>