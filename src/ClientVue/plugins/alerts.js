import { Notification } from 'element-ui'
import Vue from 'vue'

Vue.mixin({
  methods: {
    showError: (msg) => {
      Notification.error({
        message: msg,
        duration: 5000,
        position: 'bottom-left'
      })
    },
    showSuccess: (msg) => {
      Notification.success({
        message: msg,
        duration: 5000,
        position: 'bottom-left'
      })
    },
  }
})