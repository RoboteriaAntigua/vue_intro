import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


import './assets/camera.css'
import './assets/ie.css'

import './assets/style.css'



import { createApp } from 'vue'
import App from './App.vue'

import home from './components/home.vue'
import header from './components/header.vue'
import navbar from './components/navbar.vue'


import carrusel from './components/carrusel.vue'
import sliderCards from './components/sliderCards.vue'
import mision from './components/mision.vue'
import vision from './components/vision.vue'
import ley from './components/ley.vue'
import importancia from './components/importancia.vue'
import servicios from './components/servicios.vue'
import productos from './components/productos.vue'
import footer from './components/footer.vue'
import comunidad from './components/comunidad.vue'
import educacion from './components/educacion.vue'


/*
import { initializeApp } from "firebase/app";
const firebaseConfig = {

    apiKey: "AIzaSyDG6SsWuc7Lk9jkb91WVJo-hBlBYBrImO8",
  
    authDomain: "pachacutecagroforestal.firebaseapp.com",
  
    projectId: "pachacutecagroforestal",
  
    storageBucket: "pachacutecagroforestal.appspot.com",
  
    messagingSenderId: "398733257939",
  
    appId: "1:398733257939:web:170c2490b7567d26c53826"
  
  };
const app2 = initializeApp(firebaseConfig);  
*/


const app = createApp(App)


app.component('homeComponent',home)
app.component('headerComponent',header)
app.component('navbarComponent', navbar)

app.component('carruselComponent',carrusel)
app.component('sliderCardsComponent',sliderCards)
app.component('misionComponent',mision)
app.component('visionComponent', vision)
app.component('leyComponent',ley)
app.component('importanciaComponent',importancia)
app.component('serviciosComponent',servicios)
app.component('productosComponent',productos)
app.component('footerComponent',footer)
app.component('comunidadComponent',comunidad)
app.component('educacionComponent',educacion)


app.mount('#app')
