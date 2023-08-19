import { useRouter } from 'vue-router'

export function useMoveBack() {
  const router = useRouter()
  return () => router.back()
}
