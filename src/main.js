import { createApp } from 'vue'
import { initTheme } from '@/composables/useTheme'
import '@/plugins/echarts'
import '@/assets/styles/variables.css'
import '@/assets/styles/dashboard.css'
import '@/assets/styles/modal.css'
import App from '@/App.vue'

initTheme()
createApp(App).mount('#app')
