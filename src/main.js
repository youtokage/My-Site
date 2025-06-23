import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { Buffer } from 'buffer';
if (!globalThis.Buffer) {
  globalThis.Buffer = Buffer;   // ← ブラウザ実行時も Buffer が使える
}

const app = createApp(App)

app.use(router)

app.mount('#app')
