import { Envelope, Handshake } from 'phosphor-react';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import { slideUpStagger, slideUpItem } from '@/lib/animations';

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-ivory">
      <div className="container-narrow">
        <SectionTitle label="聯絡我" title="一起合作吧！" />

        <motion.p
          className="text-center text-warmgray text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          歡迎各大品牌、餐廳、旅遊相關單位與我聯繫合作。無論是美食體驗、旅遊邀約、產品試用，或是單純想分享生活中的美好，都歡迎來信！
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto mb-10"
          variants={slideUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white rounded-2xl p-6 text-center"
            variants={slideUpItem}
          >
            <Envelope size={32} weight="regular" className="text-coral mx-auto mb-3" />
            <h3 className="text-lg font-medium text-coffee mb-1">電子信箱</h3>
            <p className="text-warmgray">199719sunnyqma@gmail.com</p>
          </motion.div>
          <motion.div
            className="bg-white rounded-2xl p-6 text-center"
            variants={slideUpItem}
          >
            <Handshake size={32} weight="regular" className="text-coral mx-auto mb-3" />
            <h3 className="text-lg font-medium text-coffee mb-1">合作邀約</h3>
            <p className="text-warmgray">歡迎品牌合作與活動邀請</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-warmgray mb-4">也可以追蹤我的社群媒體，獲取最新動態</p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="w-14 h-14 rounded-full bg-coral text-white flex items-center justify-center hover:bg-sunset hover:scale-105 transition-all duration-300"
              aria-label="Instagram"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-14 h-14 rounded-full bg-coral text-white flex items-center justify-center hover:bg-sunset hover:scale-105 transition-all duration-300"
              aria-label="Facebook"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.738-.9 10.126-5.864 10.126-11.854z"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
