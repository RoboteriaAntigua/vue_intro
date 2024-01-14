
import { createApp } from 'vue'
import App from './App.vue'

import primer from './components/primer.vue'


const app = createApp(App)

app.component('primer',primer)

app.mount('#app')



