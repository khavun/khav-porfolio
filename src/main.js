import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import './css/animate.css';
import './css/icomoon.css';
import './css/bootstrap.css';
import './css/flexslider.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import './css/style.css';
import { createPinia } from 'pinia'

const app = createApp(App);

// Create and use Pinia
const pinia = createPinia();
app.use(pinia);

// Mount the app
app.mount('#app');
