import SEO from '@/components/SEO';
import ArtDivider from '@/components/ArtDivider';
import CollaborateHero from '@/sections/collaborate/CollaborateHero';
import CollaborateFeatures from '@/sections/collaborate/CollaborateFeatures';
import CollaborateSuitable from '@/sections/collaborate/CollaborateSuitable';
import CollaboratePricing from '@/sections/collaborate/CollaboratePricing';
import CollaborateNotes from '@/sections/collaborate/CollaborateNotes';
import CollaborateCTA from '@/sections/collaborate/CollaborateCTA';

export default function CollaboratePage() {
  return (
    <>
      <SEO
        title="餐廳合作文章｜SEO 友善的餐廳介紹｜Sunny 美食/旅遊日記"
        description="提供餐廳、美食店家的 SEO 介紹文章合作。關鍵字規劃、永久留存在官網、合法透明揭露。首波合作價 NT$500／篇。"
        image="/images/collab-hero.jpg"
      />
      <CollaborateHero />
      <CollaborateFeatures />
      <ArtDivider variant="geometric" />
      <CollaborateSuitable />
      <ArtDivider variant="paint" />
      <CollaboratePricing />
      <ArtDivider variant="wave" />
      <CollaborateNotes />
      <CollaborateCTA />
    </>
  );
}
