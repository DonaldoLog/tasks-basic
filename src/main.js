import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faFire, faHeart, faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import EventeBus from '@/plugins/event-bus'

library.add(faHome, faFire, faHeart, faCog)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(EventeBus)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
