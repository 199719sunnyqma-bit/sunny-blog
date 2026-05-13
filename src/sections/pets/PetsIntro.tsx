import { motion } from 'framer-motion';
import { dogProfile, catProfile } from '@/data/petsPosts';
import { slideUp } from '@/lib/animations';

interface PetCardProps {
  profile: typeof dogProfile;
  delay?: number;
}

function PetCard({ profile, delay = 0 }: PetCardProps) {
  return (
    <motion.div
      className="bg-ivory rounded-[20px] p-8 md:p-10 text-center"
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <div
        className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] mx-auto rounded-full overflow-hidden border-4 mb-5"
        style={{ borderColor: profile.borderColor }}
      >
        <img
          src={profile.illustration}
          alt={`${profile.name}的水彩插畫`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <h3 className="text-2xl md:text-[28px] font-medium text-coffee mb-1">
        {profile.name}
      </h3>
      <p className="text-sm text-warmgray mb-4">
        {profile.species} · {profile.age} · {profile.gender}
      </p>
      <div className="flex flex-wrap justify-center gap-2 mb-5">
        {profile.traits.map((trait) => (
          <span
            key={trait}
            className="text-xs text-coral bg-sunny/20 rounded-full px-3 py-1"
          >
            {trait}
          </span>
        ))}
      </div>
      <p className="text-base text-warmgray leading-relaxed">
        {profile.bio}
      </p>
    </motion.div>
  );
}

export default function PetsIntro() {
  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <PetCard profile={dogProfile} />
          <PetCard profile={catProfile} delay={0.15} />
        </div>
      </div>
    </section>
  );
}
