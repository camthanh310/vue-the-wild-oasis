<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import type { CabinResponse } from '@/types/Cabin';
import AppTableRow from '@/ui/AppTableRow.vue';
import { useImageNotFound } from '@/composables/useImageNotFound';

defineProps<{
  cabin: CabinResponse
}>()

const { noImage, imageNotFound } = useImageNotFound()
</script>

<template>
  <AppTableRow>
    <Icon icon="carbon:no-image" v-if="noImage" class="img" width="32" height="32" />
    <img v-else class="img" :src="$helpers.getCabinImage(cabin.id)" @error="imageNotFound" :alt="cabin.name" />

    <div class="cabin">{{ cabin.name }}</div>
    <div>Fits up to {{ cabin.max_capacity }} guests</div>
    <div>{{ $helpers.formatCurrency(cabin.price) }}</div>

    <div class="discount" v-if="cabin.discount">
      {{ $helpers.formatCurrency(cabin.discount) }}
    </div>
    <span v-else>&mdash;</span>

    <div>
      <Icon icon="heroicons:document-duplicate-solid" /> Duplicate
      <Icon icon="heroicons:pencil-solid" />Edit
      <Icon icon="heroicons:trash-solid" /> Delete
    </div>
  </AppTableRow>
</template>

<style scoped>
.img {
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
}

.cabin {
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
}

.price {
  font-family: 'Sono';
  font-weight: 600;
}

.discount {
  font-family: 'Sono';
  font-weight: 500;
  color: var(--color-grey-700);
}
</style>
