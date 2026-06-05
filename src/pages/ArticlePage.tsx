import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Phone, CaretLeft } from 'phosphor-react';
import SEO from '@/components/SEO';
import { heroTextStagger, heroTextItem } from '@/lib/animations';

interface ArticleContent {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  tags: string[];
  heroImage: string;
  heroAlt: string;
  readTime: string;
  sections: {
    type: 'paragraph' | 'heading' | 'image' | 'subheading';
    content?: string;
    src?: string;
    alt?: string;
  }[];
  shopInfo: {
    name: string;
    address: string;
    phone: string;
    googleMap?: string;
  };
}

const articles: Record<string, ArticleContent> = {
  'kaochangjian': {
    slug: 'kaochangjian',
    title: '新竹串燒店推薦｜下班後想喝一杯，竹北串燒店我選這家！',
    subtitle: '想找新竹串燒店或竹北串燒店？本文整理新竹串燒推薦、竹北串燒推薦重點，從串燒料理、烤物菜色到新竹喝酒、竹北喝酒聚會情境，帶你找到適合下班小酌、朋友聚餐的串燒店。',
    description: '想找新竹串燒店或竹北串燒店？烤場見位於竹北光明一路，提供美味串燒、烤魚、櫛瓜、炒麵，適合下班小酌、朋友聚餐。',
    date: '2025/05/18',
    tags: ['美食', '新竹', '竹北', '串燒', '合作邀約'],
    heroImage: '/images/kcj-hero.jpg',
    heroAlt: '新竹串燒店推薦｜烤場見串燒全餐合照，包含炒麵、烤玉米、香腸、烤魚、雞翅、櫛瓜',
    readTime: '8 分鐘',
    sections: [
      {
        type: 'paragraph',
        content: '有時候下班後真的不想吃太正式的大餐，也不想只買便當回家草草解決。這種時候，一間氣氛舒服、餐點選擇多、可以慢慢吃也可以小酌一杯的串燒店，就會變成很剛好的選擇。\n\n尤其在新竹、竹北生活的人，平日工作節奏通常不慢，工程師、上班族、業務、設計師、自由工作者，每個人白天都像被工作追著跑。到了晚上，最需要的不是多華麗的餐廳，而是一個可以坐下來、點幾串熱騰騰烤物、和朋友聊聊天的地方。',
      },
      {
        type: 'paragraph',
        content: '「新竹串燒店」、「竹北串燒店」我推薦光明一路的**烤場見**。',
      },
      {
        type: 'heading',
        content: '新竹串燒推薦-烤場見：不只肉串，蔬菜烤物也很有記憶點',
      },
      {
        type: 'paragraph',
        content: '很多人想到串燒，第一反應可能是雞肉串、牛肉串、豬肉串，或是帶一點焦香的雞翅、香腸、烤玉米。但真正讓人記住一間串燒店的，往往不只是肉烤得好不好，而是每一道小菜色有沒有用心。\n\n有烤得油亮、表面微焦的魚，旁邊放上一角檸檬，擠下去之後酸香會把烤魚的油脂感拉得更清爽。也有整支烤玉米，外層帶一點焦香，咬下去是甜味和炭烤味混在一起，很適合邊聊天邊分著吃。還有炒麵，份量看起來很適合當作墊胃主食，不會讓整桌只吃串燒吃到最後還覺得空空的。\n\n但我自己最喜歡的是櫛瓜。\n\n櫛瓜這種東西很妙，它不像肉串一樣一上桌就很有存在感，也不像玉米那麼直覺討喜，可是只要烤得好，真的會默默變成整桌最耐吃的菜色。外層帶一點烤過的焦香，中間還保留水分，吃起來有蔬菜的清甜，又不會太膩。尤其在吃了幾串肉、喝了一點酒之後，櫛瓜剛好可以把味覺拉回來，讓人覺得舒服。',
      },
      {
        type: 'heading',
        content: '工程師的竹北串燒推薦：朋友聚餐、小酌聊天都很適合',
      },
      {
        type: 'paragraph',
        content: '竹北這幾年餐飲選擇越來越多，從火鍋、燒肉、居酒屋、餐酒館到串燒店，每一種都有自己的客群。但如果要找一個不會太正式、又不會太隨便的聚餐選擇，竹北串燒店烤場見其實很剛好。\n\n為什麼說剛好？因為串燒店的氣氛通常比較放鬆。你不用像吃套餐一樣被固定流程綁住，也不用像吃吃到飽一樣一直想著要不要回本。大家可以先點一輪烤物，邊吃邊聊，想加點再慢慢加。\n\n對朋友聚會來說，這種節奏很重要。因為真正好聊的聚餐，不是菜一直上、大家一直低頭吃，而是餐點能夠自然穿插在對話裡。有人夾一塊烤魚，有人拿一串玉米，有人說櫛瓜好吃，有人再點一杯酒，整桌氣氛就會慢慢熱起來。\n\n如果你跟我一樣是賣肝的工程師，下班後很適合來烤場見「定輸贏」。',
      },
      {
        type: 'heading',
        content: '新竹喝酒不一定要去酒吧，來烤場見',
      },
      {
        type: 'paragraph',
        content: '很多人想到新竹喝酒，可能會先想到酒吧、餐酒館或夜店。但其實不是每個人下班後都想去很吵、很暗、很有距離感的地方。有時候只是想喝一杯，不是想把自己丟進派對裡。\n\n這時候串燒店就很適合。\n\n因為串燒和酒本來就是很搭的組合。烤物有鹹香、有油脂、有焦香，搭配啤酒、清酒、沙瓦或其他調酒，都能讓味道變得更完整。尤其是烤玉米、烤魚、雞翅、香腸這類菜色，和酒搭起來很自然，不需要太多解釋。\n\n如果你是下班後想找新竹喝酒的地方，但又不想只喝酒、不吃東西，那新竹串燒店會比單純酒吧更適合。你可以先點一些串燒墊胃，再慢慢喝，不會空腹喝到不舒服，也比較適合和朋友聊天。',
      },
      {
        type: 'heading',
        content: '烤場見必點菜色建議',
      },
      {
        type: 'paragraph',
        content: '如果是第一次來吃烤場見，我會建議不要只點肉。可以用「肉類＋蔬菜＋海鮮＋主食」的方式搭配，吃起來比較完整。',
      },
      {
        type: 'subheading',
        content: '櫛瓜｜私心最愛，清爽但不無聊',
      },
      {
        type: 'image',
        src: '/images/kcj-zucchini.jpg',
        alt: '櫛瓜｜私心最愛，清爽但不無聊',
      },
      {
        type: 'paragraph',
        content: '櫛瓜真的很適合放進新竹串燒推薦清單裡。它看起來低調，但烤過之後外層帶一點焦香，中間還保留蔬菜的水分和甜味，吃起來清爽又不膩。尤其前面吃了幾串肉、喝了一點酒之後，來一串櫛瓜剛剛好，像幫味蕾按了一下重新整理鍵。',
      },
      {
        type: 'subheading',
        content: '烤魚｜擠上檸檬，香氣直接醒過來',
      },
      {
        type: 'image',
        src: '/images/kcj-fish.jpg',
        alt: '烤魚｜擠上檸檬，香氣直接醒過來',
      },
      {
        type: 'paragraph',
        content: '烤魚是很適合多人分食的菜色，魚皮烤到微焦，魚肉帶著油脂香，再擠上一點檸檬，整個味道會變得更清爽。這種菜很適合放在竹北串燒店的聚餐桌上，不管是朋友聊天、下班小酌，還是想吃點比較有飽足感的烤物，都很剛好。',
      },
      {
        type: 'subheading',
        content: '烤玉米｜甜甜香香，越啃越涮嘴',
      },
      {
        type: 'image',
        src: '/images/kcj-corn.jpg',
        alt: '烤玉米｜甜甜香香，越啃越涮嘴',
      },
      {
        type: 'paragraph',
        content: '烤玉米就是那種一上桌大家會默默伸手的菜。玉米本身有甜味，烤過之後多了一點焦香，吃起來很有存在感。它不一定是最華麗的菜色，但很適合配酒、配聊天，也很適合當作竹北喝酒時的小點心，邊啃邊聊超有氣氛。',
      },
      {
        type: 'subheading',
        content: '炒麵｜串燒桌上的快樂主食',
      },
      {
        type: 'image',
        src: '/images/kcj-noodles.jpg',
        alt: '炒麵｜串燒桌上的快樂主食',
      },
      {
        type: 'paragraph',
        content: '吃串燒最怕什麼？就是吃了很多串，結果還是覺得肚子有點空。這時候炒麵就很重要了！熱熱的炒麵加上蔬菜和香氣，吃起來很有飽足感，也很適合大家一起分著吃。如果是來新竹喝酒或竹北喝酒，建議一定要點一份主食墊胃，整晚會舒服很多。',
      },
      {
        type: 'heading',
        content: '新竹串燒推薦烤場見：給想好好放鬆的人',
      },
      {
        type: 'paragraph',
        content: '一間好的新竹串燒店，不一定要把自己包裝得很浮誇。對我來說，它最重要的是讓人覺得舒服：餐點熱熱上桌、烤物有香氣、蔬菜不被隨便對待、可以喝一杯，也可以只是好好吃飯。\n\n如果今天你想找新竹喝酒的地方，但又希望能吃到真正有溫度的料理，那串燒會是很適合的選擇。它沒有太多壓力，也不需要特別準備什麼心情，只要找幾個人，點幾道菜，就可以開始一個很剛好的晚上。\n\n尤其在工作壓力大的城市裡，這種「剛剛好」其實很珍貴。不一定每餐都要驚天動地，有時候一串烤得剛好的櫛瓜、一口帶檸檬香的烤魚、一杯冰涼的酒，就足夠讓人覺得今天有被安慰到。\n\n找新竹串燒店、竹北串燒店，不只是找晚餐，而是找一個放鬆的晚上。',
      },
    ],
    shopInfo: {
      name: '烤場見',
      address: '新竹縣竹北市光明一路175號',
      phone: '03-657-5035',
    },
  },
};

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles[slug || ''];

  if (!article) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <p className="text-warmgray text-lg">文章不存在</p>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={article.title}
        description={article.description}
        image={article.heroImage}
      />

      {/* Hero */}
      <section className="relative h-[400px] md:h-[500px] flex items-end justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${article.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee/80 via-coffee/30 to-transparent" />

        <motion.div
          className="relative z-10 container-narrow pb-10 md:pb-14"
          variants={heroTextStagger}
          initial="hidden"
          animate="visible"
        >
          {/* Tags */}
          <motion.div className="flex flex-wrap gap-2 mb-4" variants={heroTextItem}>
            {article.tags.map((tag) => (
              <span
                key={tag}
                className={`text-xs px-3 py-1 rounded-full ${
                  tag === '合作邀約'
                    ? 'bg-sunset/90 text-white'
                    : 'bg-white/20 text-white backdrop-blur-sm'
                }`}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
            variants={heroTextItem}
          >
            {article.title}
          </motion.h1>

          <motion.div
            className="flex flex-wrap items-center gap-4 text-white/80 text-sm"
            variants={heroTextItem}
          >
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {article.date}
            </span>
            <span>{article.readTime}</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Article Content */}
      <article className="bg-cream py-12 md:py-16">
        <div className="container-narrow max-w-3xl">
          {/* Subtitle */}
          <p className="text-lg text-warmgray leading-relaxed mb-10 border-l-4 border-coral pl-4">
            {article.subtitle}
          </p>

          {/* Sections */}
          <div className="space-y-8">
            {article.sections.map((section, index) => {
              if (section.type === 'heading') {
                return (
                  <motion.h2
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="text-2xl md:text-3xl font-medium text-coffee mt-12"
                  >
                    {section.content}
                  </motion.h2>
                );
              }

              if (section.type === 'subheading') {
                return (
                  <motion.h3
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="text-xl md:text-2xl font-medium text-coffee mt-10"
                  >
                    {section.content}
                  </motion.h3>
                );
              }

              if (section.type === 'image' && section.src) {
                return (
                  <motion.figure
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="my-8"
                  >
                    <div className="art-frame bg-white">
                      <img
                        src={section.src}
                        alt={section.alt || ''}
                        className="w-full h-auto rounded-sm"
                        loading="lazy"
                      />
                    </div>
                    {section.alt && (
                      <figcaption className="text-center text-sm text-warmgray mt-3">
                        {section.alt}
                      </figcaption>
                    )}
                  </motion.figure>
                );
              }

              if (section.type === 'paragraph' && section.content) {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="text-coffee leading-[1.9] text-base md:text-lg"
                    dangerouslySetInnerHTML={{
                      __html: section.content
                        .split('\n\n')
                        .map((p) => `<p class="mb-5">${p.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}</p>`)
                        .join(''),
                    }}
                  />
                );
              }

              return null;
            })}
          </div>

          {/* Shop Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 bg-ivory rounded-2xl p-6 md:p-8 shadow-sm"
          >
            <h3 className="text-xl font-medium text-coffee mb-5 flex items-center gap-2">
              <MapPin size={22} className="text-coral" />
              店家資訊
            </h3>
            <div className="space-y-3 text-coffee">
              <p className="flex items-start gap-3">
                <span className="text-warmgray flex-shrink-0 w-16">店名</span>
                <span className="font-medium">{article.shopInfo.name}</span>
              </p>
              <p className="flex items-start gap-3">
                <MapPin size={18} className="text-coral flex-shrink-0 mt-0.5" />
                <span>{article.shopInfo.address}</span>
              </p>
              <p className="flex items-start gap-3">
                <Phone size={18} className="text-coral flex-shrink-0 mt-0.5" />
                <a href={`tel:${article.shopInfo.phone}`} className="hover:text-coral transition-colors">
                  {article.shopInfo.phone}
                </a>
              </p>
            </div>
          </motion.div>

          {/* Back to Food */}
          <div className="mt-10 text-center">
            <a
              href="/food"
              className="inline-flex items-center gap-2 text-coral hover:text-sunset transition-colors"
            >
              <CaretLeft size={18} />
              回到美食餐廳
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
