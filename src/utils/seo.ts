export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const setSEO = (data: SEOData) => {
  // 设置标题
  if (data.title) {
    document.title = `${data.title} - ZaoSpace`;
    updateMetaTag('property', 'og:title', data.title);
    updateMetaTag('name', 'twitter:title', data.title);
  }

  // 设置描述
  if (data.description) {
    updateMetaTag('name', 'description', data.description);
    updateMetaTag('property', 'og:description', data.description);
    updateMetaTag('name', 'twitter:description', data.description);
  }

  // 设置关键词
  if (data.keywords) {
    updateMetaTag('name', 'keywords', data.keywords);
  }

  // 设置图片
  if (data.image) {
    updateMetaTag('property', 'og:image', data.image);
    updateMetaTag('name', 'twitter:image', data.image);
  }

  // 设置URL
  if (data.url) {
    updateMetaTag('property', 'og:url', data.url);
  }

  // 设置类型
  if (data.type) {
    updateMetaTag('property', 'og:type', data.type);
  }
};

const updateMetaTag = (attr: string, name: string, content: string) => {
  let element = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

export const generateStructuredData = (data: {
  name: string;
  title: string;
  description: string;
  email: string;
  url: string;
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: data.name,
    jobTitle: data.title,
    description: data.description,
    email: data.email,
    url: data.url,
    sameAs: [],
  };

  return structuredData;
};

