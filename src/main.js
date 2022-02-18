import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';

import './css/style.scss'

Amplify.configure(awsconfig);

const app = createApp(App)
app.use(router)
app.mount('#app')
