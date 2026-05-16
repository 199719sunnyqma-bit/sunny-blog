import { useEffect } from 'react';
import SEO from '@/components/SEO';
import ArtDivider from '@/components/ArtDivider';
import HeroSection from '@/sections/home/HeroSection';
import AboutSection from '@/sections/home/AboutSection';
import FeaturesSection from '@/sections/home/FeaturesSection';
import LatestPostsSection from '@/sections/home/LatestPostsSection';
import IllustrationBanner from '@/sections/home/IllustrationBanner';
import ContactSection from '@/sections/home/ContactSection';

export default function HomePage() {
  useEffect(() => {
    document.title = 'Sunny 美食/旅遊日記 — 記錄美好生活';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', '熱愛美食、旅行與毛小孩的生活探險家 Sunny 的個人部落格，分享台灣美食、旅遊景點與寵物日常。');

    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, []);

  return (
    <>
      <SEO
        title="Sunny 美食/旅遊日記 — 記錄美好生活"
        description="熱愛美食、旅行與毛小孩的生活探險家 Sunny 的個人部落格，分享台灣美食、旅遊景點與寵物日常。"
      />
      <HeroSection />
      <ArtDivider variant="wave" />
      <AboutSection />
      <ArtDivider variant="geometric" />
      <FeaturesSection />
      <ArtDivider variant="paint" />
      <LatestPostsSection />
      <IllustrationBanner />
      <ContactSection />
    </>
  );
}
