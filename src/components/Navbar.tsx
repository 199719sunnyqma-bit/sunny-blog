import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PawPrint, List, X } from 'phosphor-react';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import SocialIcons from './SocialIcons';

const navLinks = [
  { label: '關於我', href: '/#about' },
  { label: '旅遊景點', href: '/travel' },
  { label: '美食餐廳', href: '/food' },
  { label: '寵物日記', href: '/pets' },
  { label: '聯絡我們', href: '/#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollDirection, scrollY } = useScrollDirection(100);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleAnchorClick = (href: string) => {
    setMenuOpen(false);
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      if (path === '' || path === '/') {
        if (location.pathname === '/') {
          setTimeout(() => {
            const el = document.getElementById(hash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    }
  };

  const isActive = (href: string) => {
    if (href.includes('#')) {
      return location.pathname === '/';
    }
    return location.pathname === href;
  };

  const hidden = scrollDirection === 'down' && scrollY > 100;

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[999] bg-cream/95 backdrop-blur-md border-b border-sand"
        initial={{ y: 0 }}
        animate={{ y: hidden ? '-100%' : '0%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="container-main flex items-center justify-between h-[60px] md:h-[72px]">
          <Link to="/" className="flex items-center gap-2 text-coffee">
            <PawPrint size={24} weight="fill" className="text-coral" />
            <span className="text-base md:text-xl font-medium">Sunny 美食/旅遊日記</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => handleAnchorClick(link.href)}
                className={`relative text-base text-coffee hover:text-coral transition-colors py-1 group ${
                  isActive(link.href) ? 'text-coral' : ''
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-coral transition-all duration-300 ${
                    isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <SocialIcons size={20} iconClassName="text-coffee" />
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-coffee p-1"
            aria-label="選單"
          >
            {menuOpen ? <X size={28} /> : <List size={28} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[998] bg-cream/98 flex flex-col items-center justify-center lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 text-coffee p-2"
              aria-label="關閉選單"
            >
              <X size={28} />
            </button>
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => handleAnchorClick(link.href)}
                  className={`text-2xl font-medium text-coffee hover:text-coral transition-colors ${
                    isActive(link.href) ? 'text-coral' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-10">
              <SocialIcons size={24} iconClassName="text-coffee" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
