<script lang="ts" setup>
import { RouterLink, type RouterLinkProps } from 'vue-router'

defineProps<RouterLinkProps>()

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <RouterLink v-bind="$props" class="nav-link" exact-active-class="active">
    <slot />
  </RouterLink>
</template>

<style scoped>
.nav-link:link,
.nav-link:visited {
  display: flex;
  align-items: center;
  gap: 1.2rem;

  color: var(--color-grey-600);
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.2rem 2.4rem;
  transition: all 0.3s;
}

.nav-link:hover,
.nav-link:active,
.nav-link.active:link,
.nav-link.active:visited {
  color: var(--color-grey-800);
  background-color: var(--color-grey-50);
  border-radius: var(--border-radius-sm);
}

.nav-link:deep(svg) {
  width: 2.4rem;
  height: 2.4rem;
  color: var(--color-grey-400);
  transition: all 0.3s;
}

.nav-link:hover:deep(svg),
.nav-link:active:deep(svg),
.nav-link.active:link:deep(svg),
.nav-link.active:visited:deep(svg) {
  color: var(--color-brand-600);
}
</style>
