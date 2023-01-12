import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuestic } from 'vuestic-ui'

import App from './App.vue'
import router from './router'

import 'vuestic-ui/css'
import './assets/main.css'

const app = createApp(App)

app.mount('#app')
