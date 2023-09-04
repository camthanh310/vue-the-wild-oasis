<script lang="ts" setup>
defineProps({
  resourceName: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <p>No {{ resourceName }} could be found.</p>
</template>
