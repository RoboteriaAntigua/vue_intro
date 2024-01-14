import { createApp } from 'vue'
import App from './App.vue'
import slotComponent from './components/slotComponent.vue'
import agregar_clases from './components/agregar_clases.vue'

const app = createApp(App);
app.component('slot-component',slotComponent);
app.component('agregar_clasesComponent',agregar_clases)
app.mount('#app');
