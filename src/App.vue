<template>
  <ErrorBoundary>
    <div id="app">
      <Loading :loading="appStore.loading" />
      <DefaultLayout>
        <router-view v-slot="{ Component }">
          <transition
            name="fade"
            mode="out-in"
          >
            <component :is="Component" />
          </transition>
        </router-view>
      </DefaultLayout>
    </div>
  </ErrorBoundary>
</template>

<script setup lang="ts">
import { onMounted, onErrorCaptured, onBeforeMount, onUnmounted } from 'vue';
import ErrorBoundary from '@/components/common/ErrorBoundary.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Loading from '@/components/common/Loading.vue';
import { useAppStore } from '@/store/modules/app';
import { resumeData } from '@/constants/resume-data';

const appStore = useAppStore();

// 确保加载状态能被清除的引用
let loadingTimeoutId: ReturnType<typeof setTimeout> | null = null;

// 全局错误捕获
onErrorCaptured((err: Error, _instance: unknown, info: string) => {
   
  console.error('Global error captured:', err, info);
  return false;
});

// 全局未捕获错误处理
window.addEventListener('error', (event) => {
  console.error('Uncaught error:', event.error);
});

// 全局未处理的 Promise 拒绝
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

// 预加载关键图片
const preloadImages = (): Promise<void> => {
  return new Promise((resolve) => {
    const imagesToPreload = [
      resumeData.personalInfo.avatar,
    ].filter(Boolean); // 过滤掉空值

    const totalImages = imagesToPreload.length;

    if (totalImages === 0) {
      resolve();
      return;
    }

    let loadedCount = 0;
    let hasResolved = false;

    // 设置超时，最多等待 3 秒
    const timeout = setTimeout(() => {
      if (!hasResolved) {
        hasResolved = true;
        resolve();
      }
    }, 3000);

    const checkComplete = () => {
      if (!hasResolved && loadedCount === totalImages) {
        hasResolved = true;
        clearTimeout(timeout);
        resolve();
      }
    };

    imagesToPreload.forEach((src) => {
      if (!src) {
        loadedCount++;
        checkComplete();
        return;
      }

      const img = new Image();
      img.onload = () => {
        loadedCount++;
        checkComplete();
      };
      img.onerror = () => {
        // 即使图片加载失败，也继续
        loadedCount++;
        checkComplete();
      };
      img.src = src;
    });
  });
};

// 等待关键资源加载完成
const waitForResources = async (): Promise<void> => {
  try {
    // 等待 DOM 准备就绪（带超时）
    if (document.readyState === 'loading') {
      await Promise.race([
        new Promise<void>((resolve) => {
          if (document.readyState === 'complete') {
            resolve();
          } else {
            document.addEventListener('DOMContentLoaded', () => resolve(), { once: true });
          }
        }),
        new Promise<void>((resolve) => setTimeout(() => resolve(), 1000)), // 1秒超时
      ]);
    }

    // 预加载关键图片（带超时保护）
    await Promise.race([
      preloadImages(),
      new Promise<void>((resolve) => setTimeout(() => resolve(), 3000)), // 3秒超时
    ]);

    // 等待一个渲染周期，确保样式已应用
    await new Promise<void>((resolve) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          resolve();
        });
      });
    });

    // 最小加载时间，避免闪烁（至少显示 300ms）
    await new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 300);
    });
  } catch (error) {
    console.error('Error waiting for resources:', error);
    // 即使出错也继续，确保页面能显示
  }
};

// 应用初始化
onBeforeMount(() => {
  // 在挂载前设置加载状态
  appStore.setLoading(true);
});

// 初始化滚动动画
onMounted(async () => {
  // 设置一个最大等待时间，确保即使资源加载有问题也能显示内容
  const maxWaitTime = Promise.race([
    waitForResources(),
    new Promise<void>((resolve) => setTimeout(() => resolve(), 3000)), // 最多等待3秒
  ]);

  // 添加一个绝对超时，确保无论如何都会显示内容
  loadingTimeoutId = setTimeout(() => {
    try {
      appStore.setLoading(false);
    } catch (error) {
      console.error('Error clearing loading state:', error);
    }
  }, 4000); // 4秒绝对超时

  try {
    await maxWaitTime;
  } catch (error) {
    console.error('Error in resource loading:', error);
  } finally {
    if (loadingTimeoutId) {
      clearTimeout(loadingTimeoutId);
      loadingTimeoutId = null;
    }
    // 无论成功或失败，都要隐藏加载状态
    try {
      appStore.setLoading(false);
    } catch (error) {
      console.error('Error clearing loading state:', error);
    }
  }

  // 延迟执行，确保 DOM 已渲染
  setTimeout(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    elements.forEach((el) => {
      observer.observe(el);
    });
  }, 100);
});

// 组件卸载时清理
onUnmounted(() => {
  if (loadingTimeoutId) {
    clearTimeout(loadingTimeoutId);
    loadingTimeoutId = null;
  }
  // 确保加载状态被清除
  try {
    appStore.setLoading(false);
  } catch (error) {
    console.error('Error clearing loading state on unmount:', error);
  }
});
</script>

<style scoped>
#app {
  min-height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

