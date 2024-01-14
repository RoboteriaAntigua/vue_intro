import { createApp } from 'vue'
import App from './App.vue'
import refsComponent from './components/refsComponent.vue';
import mountedComponent from './components/mountedComponent.vue';

const app = createApp(App);
app.component('refs-component',refsComponent);
app.component('mounted-component',mountedComponent);

app.mount('#app')
