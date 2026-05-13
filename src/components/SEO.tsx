import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: string;
}

export default function SEO({ title, description, image = '/images/feature-travel.jpg', type = 'website' }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, content: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        const attr = selector.includes('property=') ? 'property' : 'name';
        const value = selector.match(/"([^"]+)"/)?.[1] || '';
        el.setAttribute(attr, value);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:type"]', type);
    setMeta('meta[property="og:image"]', window.location.origin + image);
    setMeta('meta[property="og:locale"]', 'zh_TW');
    setMeta('meta[name="twitter:card"]', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', window.location.origin + image);
  }, [title, description, image, type]);

  return null;
}
