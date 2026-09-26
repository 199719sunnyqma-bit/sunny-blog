import ArtsHero from '@/sections/arts/ArtsHero';
import ArtsList from '@/sections/arts/ArtsList';
import ArtDivider from '@/components/ArtDivider';

export default function ArtsPage() {
  return (
    <>
      <ArtsHero />
      <ArtDivider variant="wave" />
      <ArtsList />
    </>
  );
}
