import './assets/main.css'

import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import Toast from 'vue-toastification'
import { toastOptions } from '@/toasts/toast-options'
import 'vue-toastification/dist/index.css'
import './toasts/toast.css'

import helpers from '@/utils/helpers'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$helpers = helpers

app.use(router)
app.use(Toast, toastOptions)
app.use(VueQueryPlugin)

app.mount('#app')
