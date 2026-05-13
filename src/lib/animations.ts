import type { Variants } from 'framer-motion';

export const EASE_PRIMARY: [number, number, number, number] = [0.4, 0, 0.2, 1];
export const DURATION_STANDARD = 0.3;
export const DURATION_LONG = 0.5;
export const STAGGER_DELAY = 0.08;

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION_LONG, ease: EASE_PRIMARY },
  },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION_LONG, ease: EASE_PRIMARY },
  },
};

export const slideUpStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER_DELAY,
    },
  },
};

export const slideUpItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION_LONG, ease: EASE_PRIMARY },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: EASE_PRIMARY },
  },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE_PRIMARY },
  },
};

export const heroTextStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const heroTextItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_PRIMARY },
  },
};

export const gentleSway = {
  rotate: [-3, 3, -3],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
};

export const gentleSwayReverse = {
  rotate: [3, -3, 3],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
};
