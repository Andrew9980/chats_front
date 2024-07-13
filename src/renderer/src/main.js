import { createApp, ref } from 'vue'
import naive from 'naive-ui'
import App from './App.vue'

export const eventBus = ref({})

// 全局事件总线

const app = createApp(App)
app.use(naive).mount('#app');

