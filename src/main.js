import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css"

// Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGauge, faBoxArchive, faSuperscript } from '@fortawesome/free-solid-svg-icons'

library.add(faGauge, faBoxArchive, faSuperscript);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')

import "bootstrap/dist/js/bootstrap.js";