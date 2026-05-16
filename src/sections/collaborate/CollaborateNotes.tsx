import { motion } from 'framer-motion';
// Note icons
import SectionTitle from '@/components/SectionTitle';
import { slideUp } from '@/lib/animations';

const notes = [
  {
    num: '01',
    title: '商業合作揭露',
    desc: '合作文章會標示「合作邀約」標籤，符合公平會薦證廣告規範。內容會忠實反映真實體驗，不會誇大不實。',
  },
  {
    num: '02',
    title: '外部連結標記',
    desc: '文章中的店家連結會使用 rel="sponsored" 標記，符合 Google SEO 規範，不會對店家網站造成負面影響。',
  },
  {
    num: '03',
    title: '文章所有權',
    desc: '文章發佈後所有權歸 Sunny，但店家可自由分享連結到自己的社交媒體，不受限制。',
  },
  {
    num: '04',
    title: '修改與更新',
    desc: '發佈後如需修改店家資訊（如菜單、營業時間），可免費更新一次。後續小修改也可配合。',
  },
  {
    num: '05',
    title: '合作流程',
    desc: '接洽 → 需求確認 → 到店體驗 → 文章撰寫 → 店家預覽 → 發佈上線。整個流程約 5-7 個工作天。',
  },
];

export default function CollaborateNotes() {
  return (
    <section className="section-padding bg-ivory relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-coral/30 via-sunny/50 to-coral/30" />

      <div className="container-main">
        <SectionTitle label="合作須知" title="合作前需要知道的事" />

        <motion.div
          className="max-w-4xl mx-auto space-y-6"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {notes.map((note, index) => (
            <motion.div
              key={note.num}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="bg-white rounded-2xl p-6 md:p-8 flex items-start gap-5 shadow-sm"
            >
              <div className="w-14 h-14 rounded-xl bg-coral/10 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-coral">{note.num}</span>
              </div>
              <div>
                <h3 className="text-lg font-medium text-coffee mb-2">{note.title}</h3>
                <p className="text-warmgray leading-relaxed">{note.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
