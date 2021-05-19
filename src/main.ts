import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 初始化css
import 'normalize.css/normalize.css'
// element-plus
import installElementPlus from './plugins/element'
// 全局 css
import '@/styles/index.scss'
// svg icons
import initSvgIcon from '@/icons/index'

const app = createApp(App)

app
  .use(store)
  .use(router)
  .use(installElementPlus)
  .use(initSvgIcon)
  .mount('#app')
