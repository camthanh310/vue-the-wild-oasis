import { type PluginOptions, POSITION, TYPE } from 'vue-toastification'
import XCircleIcon from './XCircleIcon.vue'
import CheckCircleIcon from './CheckCircleIcon.vue'

export const toastOptions: PluginOptions = {
  position: POSITION.TOP_CENTER,
  hideProgressBar: true,
  transition: 'Vue-Toastification__fade',
  toastClassName: 'my-custom-toast-class',
  closeButton: false,
  toastDefaults: {
    [TYPE.ERROR]: {
      timeout: 5000,
      icon: XCircleIcon
    },
    [TYPE.SUCCESS]: {
      timeout: 3000,
      icon: CheckCircleIcon
    }
  }
}
