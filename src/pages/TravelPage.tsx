import SEO from '@/components/SEO';
import TravelHero from '@/sections/travel/TravelHero';
import TravelPosts from '@/sections/travel/TravelPosts';

export default function TravelPage() {
  return (
    <>
      <SEO
        title="旅遊景點 — Sunny 美食/旅遊日記"
        description="跟著 Sunny 一起探索台灣與世界各地的迷人風景，從九份老街到阿里山日出，發現每個角落的美麗。"
        image="/images/travel-hero-bg.jpg"
      />
      <TravelHero />
      <TravelPosts />
    </>
  );
}
