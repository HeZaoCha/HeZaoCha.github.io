import { createApp } from 'vue';
import { pinia } from './store';
import router from './router';
import App from './App.vue';
import 'virtual:uno.css';
import './styles/main.scss';
import { useThemeStore } from './store/modules/theme';

const app = createApp(App);

app.use(pinia);
app.use(router);

// 初始化主题
const themeStore = useThemeStore();
themeStore.initTheme();

app.mount('#app');
