<script lang="ts" setup>
import AppSpinner from '@/ui/AppSpinner.vue';
import { useCabins } from './useCabins';
import AppEmpty from '@/ui/AppEmpty.vue';
import AppTable from '@/ui/AppTable.vue';
import AppTableHeader from '@/ui/AppTableHeader.vue';
import AppTableBody from '@/ui/AppTableBody.vue';
import CabinRow from '@/components/cabins/CabinRow.vue';

const { isLoading, cabins } = useCabins()
</script>

<template>
  <AppSpinner v-if="isLoading" />
  <template v-else>
    <AppEmpty v-if="!cabins?.length" />
    <AppTable v-else columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <AppTableHeader>
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </AppTableHeader>
      <AppTableBody :items="cabins" v-slot="{ item }">
        <CabinRow :cabin="item" :key="item.id" />
      </AppTableBody>
    </AppTable>
  </template>
  <!-- </div>
  <div v-else>
    Cabin Table
    <ul>
      <li v-for="cabin in cabins" :key="cabin.id">
        {{ cabin.name }} - {{ cabin.description }} - {{ cabin.price }}
        {{ cabin.image_url }}
      </li>
    </ul>
  </div> -->
</template>
