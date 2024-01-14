import { createApp } from 'vue'
import App from './App.vue'

import compOne from './components/compOne.vue';
import compTwo from './components/compTwo.vue';
import toggleComponent from './components/toggleComponent.vue';
import teleportComponent from './components/teleportComponent.vue';

const app = createApp(App);
app.component('comp-one',compOne);
app.component('comp-two',compTwo);
app.component('toggle-component',toggleComponent);
app.component('teleport-component',teleportComponent);
app.mount('#app')
