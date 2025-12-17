export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
  locale?: string;
}

const BASE_URL = import.meta.env.VITE_BASE_URL || 'https://hezaocha.github.io';
const DEFAULT_IMAGE = `${BASE_URL}/images/流云.png`;
const DEFAULT_SITE_NAME = 'ZaoSpace';

export const setSEO = (data: SEOData) => {
  const fullTitle = data.title ? `${data.title} - ZaoSpace` : 'ZaoSpace - 大数据开发工程师';
  const fullUrl = data.url || window.location.href;
  const imageUrl = data.image ? (data.image.startsWith('http') ? data.image : `${BASE_URL}${data.image}`) : DEFAULT_IMAGE;

  // 设置标题
  if (data.title) {
    document.title = fullTitle;
    updateMetaTag('property', 'og:title', fullTitle);
    updateMetaTag('name', 'twitter:title', fullTitle);
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
  updateMetaTag('property', 'og:image', imageUrl);
  updateMetaTag('property', 'og:image:width', '1200');
  updateMetaTag('property', 'og:image:height', '630');
  updateMetaTag('property', 'og:image:alt', data.title || 'ZaoSpace');
  updateMetaTag('name', 'twitter:image', imageUrl);
  updateMetaTag('name', 'twitter:image:alt', data.title || 'ZaoSpace');

  // 设置URL
  updateMetaTag('property', 'og:url', fullUrl);
  updateMetaTag('name', 'twitter:url', fullUrl);

  // 设置类型
  updateMetaTag('property', 'og:type', data.type || 'website');

  // 设置站点名称
  updateMetaTag('property', 'og:site_name', data.siteName || DEFAULT_SITE_NAME);

  // 设置语言
  updateMetaTag('property', 'og:locale', data.locale || 'zh_CN');

  // Twitter Card
  updateMetaTag('name', 'twitter:card', 'summary_large_image');
  updateMetaTag('name', 'twitter:site', '@hezaocha');
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

export interface StructuredDataOptions {
  name: string;
  title: string;
  description: string;
  email: string;
  url: string;
  image?: string;
  location?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  education?: Array<{
    school: string;
    degree: string;
    major: string;
    startDate: string;
    endDate: string;
  }>;
  workExperience?: Array<{
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    location: string;
  }>;
}

export const generateStructuredData = (data: StructuredDataOptions) => {
  const sameAs: string[] = [];
  if (data.github) sameAs.push(data.github);
  if (data.linkedin) sameAs.push(data.linkedin);
  if (data.twitter) sameAs.push(data.twitter);

  const structuredData: any = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: data.name,
    jobTitle: data.title,
    description: data.description,
    email: data.email,
    url: data.url,
    image: data.image || `${BASE_URL}/images/流云.png`,
    sameAs,
  };

  if (data.location) {
    structuredData.address = {
      '@type': 'PostalAddress',
      addressLocality: data.location,
      addressCountry: 'CN',
    };
  }

  if (data.education && data.education.length > 0) {
    structuredData.alumniOf = data.education.map((edu) => ({
      '@type': 'EducationalOrganization',
      name: edu.school,
      description: `${edu.degree} - ${edu.major}`,
    }));
  }

  if (data.workExperience && data.workExperience.length > 0) {
    structuredData.worksFor = data.workExperience.map((work) => ({
      '@type': 'Organization',
      name: work.company,
      address: {
        '@type': 'PostalAddress',
        addressLocality: work.location,
      },
    }));
  }

  return structuredData;
};

export const injectStructuredData = (data: StructuredDataOptions) => {
  // 移除旧的 structured data
  const oldScript = document.querySelector('script[type="application/ld+json"]');
  if (oldScript) {
    oldScript.remove();
  }

  // 创建新的 structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(generateStructuredData(data), null, 2);
  document.head.appendChild(script);
};

