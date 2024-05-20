import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import NewStyle from 'new-style-ui'

const app = createApp(App)
app.use(NewStyle)

app.mount('#app')
