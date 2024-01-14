import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'

import homeComponent from './components/homeComponent.vue';
import contactoComponent from './components/contactoComponent.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home', component: homeComponent },
        { path: '/contacto', component: contactoComponent },
    ]
});


const app= createApp(App);
app.use(router);
app.mount('#app')
