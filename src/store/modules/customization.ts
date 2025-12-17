import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { getStorage, setStorage } from '@/utils/storage';

const CUSTOMIZATION_KEY = 'customization_data';

interface CustomizationData {
  fontFamily: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  backgroundImage: string;
  layout: 'default' | 'compact' | 'wide';
}

const defaultData: CustomizationData = {
  fontFamily: 'system-ui, -apple-system, sans-serif',
  primaryColor: '#667eea',
  secondaryColor: '#764ba2',
  backgroundColor: '',
  backgroundImage: '',
  layout: 'default',
};

export const useCustomizationStore = defineStore('customization', () => {
  const customization = ref<CustomizationData>(
    (getStorage(CUSTOMIZATION_KEY) as CustomizationData) || defaultData
  );

  // 监听变化，应用自定义样式
  watch(
    customization,
    (newData) => {
      setStorage(CUSTOMIZATION_KEY, newData);
      applyCustomization(newData);
    },
    { deep: true }
  );

  // 应用自定义样式
  const applyCustomization = (data: CustomizationData) => {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', data.primaryColor);
    root.style.setProperty('--secondary-color', data.secondaryColor);
    root.style.setProperty('--font-family', data.fontFamily);

    if (data.backgroundImage) {
      root.style.setProperty('--background-image', `url(${data.backgroundImage})`);
    } else {
      root.style.removeProperty('--background-image');
    }

    if (data.backgroundColor) {
      root.style.setProperty('--bg-color', data.backgroundColor);
    }
  };

  // 初始化应用自定义样式
  const initCustomization = () => {
    applyCustomization(customization.value);
  };

  // 更新字体
  const setFontFamily = (font: string) => {
    customization.value.fontFamily = font;
  };

  // 更新主色
  const setPrimaryColor = (color: string) => {
    customization.value.primaryColor = color;
  };

  // 更新次色
  const setSecondaryColor = (color: string) => {
    customization.value.secondaryColor = color;
  };

  // 更新背景色
  const setBackgroundColor = (color: string) => {
    customization.value.backgroundColor = color;
  };

  // 更新背景图片
  const setBackgroundImage = (image: string) => {
    customization.value.backgroundImage = image;
  };

  // 更新布局
  const setLayout = (layout: 'default' | 'compact' | 'wide') => {
    customization.value.layout = layout;
  };

  // 重置为默认
  const resetToDefault = () => {
    customization.value = defaultData;
    setStorage(CUSTOMIZATION_KEY, defaultData);
    applyCustomization(defaultData);
  };

  return {
    customization,
    initCustomization,
    setFontFamily,
    setPrimaryColor,
    setSecondaryColor,
    setBackgroundColor,
    setBackgroundImage,
    setLayout,
    resetToDefault,
  };
});

