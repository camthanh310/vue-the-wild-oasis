<script lang="ts" setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue'
import { useImageNotFound } from '@/composables/useImageNotFound';
import type { CabinResponse } from '@/types/Cabin';
import AppTableRow from '@/ui/AppTableRow.vue';
import AppModal from '@/ui/AppModal.vue';
import AppMenu from '@/ui/AppMenu.vue';
import AppMenuToggle from '@/ui/AppMenuToggle.vue';
import AppMenuList from '@/ui/AppMenuList.vue';
import AppMenuButton from '@/ui/AppMenuButton.vue';
import ConfirmDelete from '@/ui/ConfirmDelete.vue';

const props = defineProps<{
  cabin: CabinResponse
}>()

const deleteModal = ref<InstanceType<typeof AppModal> | null>(null)

const { noImage, imageNotFound } = useImageNotFound()

function handleDuplicate() {
  alert('handleDuplicate')
}

function handleOpenDeleteModal(closeMenu: Function) {
  deleteModal.value?.openModal()
  closeMenu()
}

function handleDeleteCabin(closeModal: Function) {
  alert(`deleted ${props.cabin.id}`)
  closeModal()
}
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
      <AppMenu v-slot="{ open: openMenu, openId, position, close: closeMenu }">
        <AppMenuToggle :id="cabin.id" @on-toggle="openMenu" />

        <AppMenuList :id="cabin.id" :open-id="openId" :position="position" @on-close="closeMenu">
          <AppMenuButton @click="handleDuplicate">
            <template #icon>
              <Icon icon="heroicons:document-duplicate-solid" />
            </template>
            Duplicate
          </AppMenuButton>

          <AppMenuButton>
            <template #icon>
              <Icon icon="heroicons:pencil-solid" />
            </template>
            Edit
          </AppMenuButton>



          <AppMenuButton @click="handleOpenDeleteModal(closeMenu)">
            <template #icon>
              <Icon icon="heroicons:trash-solid" />
            </template>
            Delete
          </AppMenuButton>
        </AppMenuList>
      </AppMenu>

      <!-- <AppModal>

      </AppModal> -->

      <AppModal ref="deleteModal" v-slot="{ close: closeModal }">
        <ConfirmDelete resource-name="cabins" @on-close="closeModal" @on-confirm="handleDeleteCabin(closeModal)" />
      </AppModal>
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
