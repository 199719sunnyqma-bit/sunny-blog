import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PawPrint, Envelope, Handshake } from 'phosphor-react';
import SocialIcons from './SocialIcons';
import { fadeIn } from '@/lib/animations';

const quickLinks = [
  { label: '旅遊景點', href: '/travel' },
  { label: '美食餐廳', href: '/food' },
  { label: '寵物日記', href: '/pets' },
  { label: '關於我', href: '/#about' },
];

export default function Footer() {
  return (
    <motion.footer
      className="bg-coffee text-cream"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="container-main py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PawPrint size={22} weight="fill" className="text-coral" />
              <span className="text-lg font-medium">Sunny 美食/旅遊日記</span>
            </div>
            <p className="text-sm md:text-[15px] text-sand leading-relaxed max-w-[300px]">
              記錄美食、旅行與毛小孩的美好生活點滴，分享最真實的體驗與感動。
            </p>
            <div className="mt-4">
              <SocialIcons size={20} iconClassName="text-sand hover:text-coral" />
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium mb-3">快速連結</h3>
            <div className="w-10 h-0.5 bg-coral mb-4" />
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm md:text-[15px] text-sand hover:text-cream hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-medium mb-3">聯絡我</h3>
            <div className="w-10 h-0.5 bg-coral mb-4" />
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm md:text-[15px] text-sand">
                <Envelope size={16} weight="regular" className="text-coral flex-shrink-0" />
                <span>199719sunnyqma@gmail.com</span>
              </div>
              <div className="flex items-start gap-2 text-sm md:text-[15px] text-sand">
                <Handshake size={16} weight="regular" className="text-coral flex-shrink-0 mt-0.5" />
                <span>歡迎各大品牌與部落客合作洽談</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-main py-5 text-center">
          <p className="text-sm text-sand">
            &copy; {new Date().getFullYear()} Sunny 美食/旅遊日記. All Rights Reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
