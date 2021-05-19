import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'

const app = createApp(App)

app
  .use(store)
  .use(router)
  .use(installElementPlus)
  .mount('#app')
