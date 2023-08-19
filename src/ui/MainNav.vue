<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import NavLink from '@/ui/NavLink.vue'

</script>

<template>
  <nav>
    <ul class="nav-list">
      <li>
        <NavLink :to="{ name: 'dashboard' }">
          <Icon icon="heroicons:home" />
          <span>Dashboard</span>
        </NavLink>
      </li>
      <li>
        <NavLink :to="{ name: 'bookings' }">
          <Icon icon="heroicons:calendar-days" />
          <span>Bookings</span>
        </NavLink>
      </li>
      <li>
        <NavLink :to="{ name: 'cabins' }">
          <Icon icon="heroicons:home-modern" />
          <span>Cabins</span>
        </NavLink>
      </li>
      <li>
        <NavLink :to="{ name: 'users' }">
          <Icon icon="heroicons:users" />
          <span>User</span>
        </NavLink>
      </li>
      <li>
        <NavLink :to="{ name: 'settings' }">
          <Icon icon="heroicons:cog" />
          <span>Settings</span>
        </NavLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
</style>
