import { onMounted, onUnmounted, type Ref } from 'vue';

export const useScrollAnimation = (elementRef?: Ref<HTMLElement | undefined>) => {
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

  onMounted(() => {
    const elements = elementRef?.value
      ? [elementRef.value]
      : document.querySelectorAll('.animate-on-scroll');

    elements.forEach((el) => {
      if (el instanceof Element) {
        observer.observe(el);
      }
    });
  });

  onUnmounted(() => {
    observer.disconnect();
  });
};

