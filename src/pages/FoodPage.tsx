import SEO from '@/components/SEO';
import FoodHero from '@/sections/food/FoodHero';
import FoodPosts from '@/sections/food/FoodPosts';

export default function FoodPage() {
  return (
    <>
      <SEO
        title="美食餐廳 — Sunny 美食/旅遊日記"
        description="跟著 Sunny 發掘台灣各地的美味餐廳與街頭小吃，從米其林牛肉麵到夜市美食，用味蕾探索每一個角落。"
        image="/images/food-hero-bg.jpg"
      />
      <FoodHero />
      <FoodPosts />
    </>
  );
}
