<script lang="ts" setup>

</script>

<template>
  <footer class="footer"></footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;
}

.footer:not(:has(*)) {
  display: none;
}
</style>