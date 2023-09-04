<script lang="ts" setup generic="T">
defineProps<{
  items: Array<T>
}>()
</script>

<template>
  <p class="empty" v-if="!items.length">
    No data to show at the moment
  </p>
  <section class="body" v-else>
    <slot v-for="(item, index) in items" :key="index" :item="item" />
  </section>
</template>

<style scoped>
.body {
  margin: 0.4rem 0;
}

.empty {
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
}
</style>