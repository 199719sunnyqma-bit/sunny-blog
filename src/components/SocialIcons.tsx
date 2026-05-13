import { InstagramLogo, FacebookLogo } from 'phosphor-react';

interface SocialIconsProps {
  size?: number;
  className?: string;
  iconClassName?: string;
}

export default function SocialIcons({ size = 20, className = '', iconClassName = '' }: SocialIconsProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href="#"
        className={`hover:text-coral transition-colors ${iconClassName}`}
        aria-label="Instagram"
      >
        <InstagramLogo size={size} weight="regular" />
      </a>
      <a
        href="#"
        className={`hover:text-coral transition-colors ${iconClassName}`}
        aria-label="Facebook"
      >
        <FacebookLogo size={size} weight="regular" />
      </a>
    </div>
  );
}
