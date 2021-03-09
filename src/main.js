import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import BaseContainer from './components/BaseContainer.vue';
import BaseOverview from './components/BaseOverview.vue';

const app = createApp(App);

app.component('base-container', BaseContainer);
app.component('base-overview', BaseOverview);

app.use(router);
app.mount('#app');