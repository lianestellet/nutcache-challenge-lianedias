import { Notification } from 'element-ui'
import Vue from 'vue'

const getMessageFromException = (ex) => {
  if (ex && ex.response
        && ex.response.data
        && ex.response.data.errors
        && Object.keys(ex.response.data.errors).length > 0) {
    let firstProp = Object.keys(ex.response.data.errors)[0]
    return ex.response.data.errors[firstProp][0]
  }

  if(ex && ex.response && ex.response.data && ex.response.data.title)
    return ex.response.data.title;
  
  return ex.message;      
}

Vue.mixin({
  methods: {
    showError: (msg) => {
      Notification.error({
        message: msg,
        duration: 5000,
        position: 'bottom-left'
      })
    },
    showException: (ex) => {

      const message = getMessageFromException(ex);

      Notification.error({
        message: message,
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