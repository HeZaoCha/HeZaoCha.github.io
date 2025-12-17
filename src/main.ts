import { createApp } from 'vue';
import { pinia } from './store';
import router from './router';
import i18n from './locales';
import App from './App.vue';
import 'virtual:uno.css';
import './styles/main.scss';
import { useThemeStore } from './store/modules/theme';
import { useLocaleStore } from './store/modules/locale';

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(i18n);

// 初始化主题
const themeStore = useThemeStore();
themeStore.initTheme();

// 初始化语言
const localeStore = useLocaleStore();
localeStore.initLocale();

// 初始化自定义设置
import { useCustomizationStore } from './store/modules/customization';
const customizationStore = useCustomizationStore();
customizationStore.initCustomization();

app.mount('#app');
