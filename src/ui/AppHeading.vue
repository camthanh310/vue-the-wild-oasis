<script lang="ts" setup>
import type { PropType } from 'vue';

type Heading = 'h1' | 'h2' | 'h3' | 'h4'

defineProps({
  as: {
    type: String as PropType<Heading>,
    required: true
  }
})
</script>

<template>
  <Component class="heading" :is="as">
    <slot />
  </Component>
</template>

<style scoped>
.heading {
  line-height: 1.4;
}

h1 {
  font-size: 3rem;
  font-weight: 600;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
}

h3 {
  font-size: 2rem;
  font-weight: 500;
}

h4 {
  font-size: 3rem;
  font-weight: 500;
  text-align: center;
}
</style>


