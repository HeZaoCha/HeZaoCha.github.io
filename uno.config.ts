import { defineConfig, presetUno, presetIcons } from 'unocss';

export default defineConfig({
  presets: [presetUno(), presetIcons()],
  shortcuts: {
    'btn-primary': 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors',
    'btn-secondary': 'px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors',
    'card': 'bg-white dark:bg-gray-800 rounded-lg shadow-md p-6',
    'section-title': 'text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100',
  },
  theme: {
    colors: {
      primary: '#3b82f6',
    },
  },
});

