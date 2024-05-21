import { createApp } from 'vue'
import App from './App.vue'
import NewStyle from 'new-style-ui'
import 'new-style-ui/dist/index.css'

const app = createApp(App)
app.use(NewStyle)

app.mount('#app')
