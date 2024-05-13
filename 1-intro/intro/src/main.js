import { createApp } from 'vue'

import App from './App.vue'

//importo mi primer componente
import PrimerComponente from './components/PrimerComponente.vue'

//Importo un componente tipico contador de clicks
import ContadorClicks from './components/ContadorClicks.vue'

//Importo el componente que recibe data con props
import recibeProp from './components/recibeProp.vue'

//El componente que recibe prop pero booleano
import propBoolean from './components/propBoolean.vue'

//El componente que vamos a repetir n veces con el for:
import FoodItem from './components/FoodItem.vue'

//Componente ejemplo para emit data de hijo a padre
import emit from './components/emit.vue'

//Otro componente que envia data al padre
import hijo from './components/hijo.vue'

const app = createApp(App);
app.component('PrimerComponente',PrimerComponente);
app.component('contador-clicks', ContadorClicks);
app.component('recibe-prop',recibeProp);
app.component('prop-boolean',propBoolean);
app.component('food-item',FoodItem);
app.component('emit',emit);
app.component('hijo',hijo);
app.mount('#app');
