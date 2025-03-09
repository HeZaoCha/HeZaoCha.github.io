import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { createPinia } from 'pinia'
import router from './router'

const app = createApp(App)

// 注册Element Plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus)
  .use(router)
  .use(createPinia())

// 初始化AOS动画
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true
})

app.mount('#app')
