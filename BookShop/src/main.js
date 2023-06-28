import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
// Import the necessary Bootstrap CSS and JavaScript files
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
// Import the Bootstrap Icons icon font library
import 'bootstrap-icons/font/bootstrap-icons.css'
// import '@fortawesome/fontawesome-free/css/all.css'
const app = createApp(App)
app.use(router)
app.mount('#app')
