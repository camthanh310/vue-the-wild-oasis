import type helpers from '@/utils/helpers'

declare module 'vue' {
  interface ComponentCustomProperties {
    $helpers: typeof helpers
  }
}

export {}
