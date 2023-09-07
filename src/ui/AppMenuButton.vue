<script lang="ts" setup>
defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <li>
    <button v-bind="$attrs" class="button">
      <slot name="icon" />
      <span>
        <slot />
      </span>
    </button>
  </li>
</template>

<style scoped>
.button {
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;
}

.button:hover {
  background-color: var(--color-grey-50);
}

.button :deep(svg) {
  width: 1.6rem;
  height: 1.6rem;
  color: var(--color-grey-400);
  transition: all 0.3s;
}
</style>
