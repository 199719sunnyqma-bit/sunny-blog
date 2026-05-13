import SEO from '@/components/SEO';
import PetsHero from '@/sections/pets/PetsHero';
import PetsIntro from '@/sections/pets/PetsIntro';
import PetsPosts from '@/sections/pets/PetsPosts';

export default function PetsPage() {
  return (
    <>
      <SEO
        title="寵物日記 — Sunny 美食/旅遊日記"
        description="跟著娜冏和烏娜的生活點滴，記錄每一個調皮、可愛又讓人哭笑不得的毛孩日常。"
        image="/images/pets-hero-bg.jpg"
      />
      <PetsHero />
      <PetsIntro />
      <PetsPosts />
    </>
  );
}
