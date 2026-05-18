import SEO from '@/components/SEO';
import ArtDivider from '@/components/ArtDivider';
import SeoHero from '@/sections/seo/HeroSection';
import SeoTopics from '@/sections/seo/SeoTopics';

export default function SeoPage() {
  return (
    <>
      <SEO
        title="SEO 知識庫｜部落格 SEO 基礎教學｜Sunny 美食/旅遊日記"
        description="部落格經營者必備的 SEO 基礎知識。從關鍵字研究、標題設定、文章架構到圖片 SEO、Search Console，8 大主題完整教學。"
        image="/images/art-deco-1.jpg"
      />
      <SeoHero />
      <ArtDivider variant="wave" />
      <SeoTopics />
    </>
  );
}
