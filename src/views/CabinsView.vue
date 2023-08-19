<script lang="ts" setup>
import AppHeading from '@/ui/AppHeading.vue'
import AppRow from '@/ui/AppRow.vue'
import CabinTable from '@/components/cabins/CabinTable.vue'
import AddCabin from '@/components/cabins/AddCabin.vue'
</script>

<template>
  <AppRow axis="horizontal">
    <AppHeading as="h1">All cabins</AppHeading>

  </AppRow>

  <AppRow>
    <CabinTable />

    <AddCabin />
  </AppRow>
</template>
