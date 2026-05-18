import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MagnifyingGlass,
  TextT,
  Article,
  Image,
  Link,
  Gauge,
  Code,
  ChartLine,
  CaretDown,
  CheckCircle,
  XCircle,
  Lightbulb,
} from 'phosphor-react';

interface Topic {
  icon: React.ElementType;
  id: string;
  title: string;
  summary: string;
  content: {
    intro: string;
    points: { title: string; desc: string }[];
    dos: string[];
    donts: string[];
    tips: string[];
  };
}

const topics: Topic[] = [
  {
    icon: MagnifyingGlass,
    id: 'keyword',
    title: '關鍵字研究',
    summary: '找到讀者會搜尋的關鍵字，是 SEO 的第一步。',
    content: {
      intro: '關鍵字研究是 SEO 的基礎。你要找出目標讀者會用什麼詞來搜尋你的內容，然後圍繞這些詞來規劃文章。',
      points: [
        { title: '核心關鍵字 vs 長尾關鍵字', desc: '核心關鍵字（如「台北美食」）搜尋量大但競爭激烈；長尾關鍵字（如「台北東區寵物友善咖啡廳」）搜尋量較小但競爭低，更容易排名。' },
        { title: '搜尋意圖分析', desc: '搜尋「台北美食」的人可能是想快速瀏覽；搜尋「台北哪裡有好吃的牛肉麵」的人則是想找到特定餐廳。理解搜尋意圖才能寫出對的內容。' },
        { title: '關鍵字工具推薦', desc: 'Google 搜尋建議（自動完成）、Ubersuggest、Google Trends 都是免費好用的工具。先從免費工具開始就夠了。' },
      ],
      dos: [
        '每篇文章鎖定 1-2 個核心關鍵字',
        '把關鍵字放在標題前段',
        '使用長尾關鍵字來增加曝光機會',
        '自然地將關鍵字融入文章內容',
      ],
      donts: [
        '不要在文章中硬塞關鍵字（關鍵字填充）',
        '不要選太廣泛、競爭太大的詞',
        '不要忽略搜尋意圖，只顧關鍵字密度',
      ],
      tips: [
        '在 Google 搜尋你的關鍵字，看看前 5 名都寫什麼',
        '用 Google Trends 比較不同關鍵字的搜尋趨勢',
        '每篇文章可以額外規劃 3-5 個相關詞',
      ],
    },
  },
  {
    icon: TextT,
    id: 'meta',
    title: '標題與 Meta 設定',
    summary: '標題和 Description 是搜尋結果中最重要的第一印象。',
    content: {
      intro: '搜尋結果中顯示的藍色標題和灰色描述，決定了讀者會不會點進你的文章。這兩個欄位必須精心設計。',
      points: [
        { title: 'Title 標題', desc: '建議 30-40 字元，把核心關鍵字放前面，後面加品牌名。例如：「台北東區早午餐推薦｜Sunny 美食日記」' },
        { title: 'Meta Description', desc: '建議 60-80 字元，用一句話描述文章內容，包含關鍵字，吸引點擊。例如：「精選台北東區 5 家早午餐，從班尼迪克蛋到法式吐司，帶你吃遍東區美食。」' },
        { title: 'Open Graph 標籤', desc: '分享到 Facebook、Line 時顯示的標題、描述和圖片，確保社交分享效果良好。' },
      ],
      dos: [
        '每個頁面有獨特的 Title，不要重複',
        'Title 中放核心關鍵字',
        'Description 要寫得像廣告文案一樣吸引人',
        '為每張圖片寫描述性 alt 文字',
      ],
      donts: [
        '不要所有頁面用相同的 Title',
        '不要讓 Google 自動抓取 Description',
        '不要在 Title 塞太多關鍵字',
      ],
      tips: [
        '用 Yoast SEO 或 Rank Math 外掛來檢查 Meta 長度',
        '在搜尋結果中，標題超過字數會被截斷，所以要精簡',
        '分享到 Line 前，先用 Facebook Debugger 預覽',
      ],
    },
  },
  {
    icon: Article,
    id: 'structure',
    title: '文章架構與內容',
    summary: '結構良好的文章，Google 和讀者都容易理解。',
    content: {
      intro: 'Google 喜歡結構清楚、內容豐富的文章。善用標題層級和段落，讓搜尋引擎理解你的文章重點。',
      points: [
        { title: '標題層級（H1-H6）', desc: 'H1 是文章主標題（每頁只能有一個），H2 是主要段落標題，H3 是子段落。層級要依序使用，不要跳級。' },
        { title: '文章長度建議', desc: '一般建議至少 800 字以上。深度文章（2000-3000 字）更容易獲得高排名，但重點是內容品質而不是字數。' },
        { title: 'FAQ 常見問題區塊', desc: '在文章結尾加入 3-5 個常見問題（FAQ），可以增加被 Google 精選摘要（Featured Snippet）選中的機會。' },
      ],
      dos: [
        '每篇文章只有一個 H1',
        'H2 段落標題要包含關鍵字',
        '使用項目符號和編號清單',
        '在文章前 100 字提到核心關鍵字',
      ],
      donts: [
        '不要跳過標題層級（如 H1 直接跳到 H3）',
        '不要寫太短的文章（少於 300 字）',
        '不要整篇文章都是大段落，沒有分段',
      ],
      tips: [
        '用目錄（Table of Contents）讓讀者快速導航',
        '在文章最後加一段「結語」或「總結」',
        '善用「延伸閱讀」連結到其他相關文章',
      ],
    },
  },
  {
    icon: Image,
    id: 'images',
    title: '圖片 SEO',
    summary: '圖片也要做 SEO，才能從圖片搜尋帶來流量。',
    content: {
      intro: '部落格通常有很多圖片，但很多人忽略了圖片 SEO。優化圖片不只能提升頁面速度，還能從 Google 圖片搜尋帶來額外流量。',
      points: [
        { title: '圖片檔名', desc: '用描述性檔名，例如「taipei-beef-noodle-broth.jpg」而不是「IMG_1234.jpg」。搜尋引擎會讀取檔名。' },
        { title: 'Alt 替代文字', desc: '每張圖片都要寫 alt 文字，描述圖片內容。這對視障讀者很重要，也是搜尋引擎理解圖片的主要方式。' },
        { title: '圖片壓縮與格式', desc: '使用 WebP 格式（比 JPEG 小 30-80%），用 TinyPNG 或 Squoosh 壓縮。每張圖片設定正確的 width 和 height，避免版面位移（CLS）。' },
      ],
      dos: [
        '每張圖片都有描述性檔名',
        '每張圖片都有 alt 文字',
        '使用 WebP 格式，提供 JPEG 備用',
        '指定圖片的 width 和 height',
      ],
      donts: [
        '不要用 IMG_1234.jpg 這種預設檔名',
        '不要留空 alt 文字（除非純裝飾圖）',
        '不要上傳 5MB 以上的圖片',
      ],
      tips: [
        '用 lazy loading 讓圖片滾動到才載入',
        '在圖片附近寫相關文字，加強主題相關性',
        '善用圖片說明（caption）增加內容深度',
      ],
    },
  },
  {
    icon: Link,
    id: 'internal-links',
    title: '內部連結策略',
    summary: '內部連結幫助 Google 理解你的網站結構和主題權重。',
    content: {
      intro: '內部連結是指從你的 A 文章連到 B 文章。這不只能讓讀者留在網站更久，也能把「權重」傳遞給重要頁面。',
      points: [
        { title: '錨點文字（Anchor Text）', desc: '連結的文字要自然描述目標頁面內容，例如「我的九份旅遊攻略」而不是「點這裡」。' },
        { title: '連結數量建議', desc: '每篇文章建議有 3-7 個內部連結。新文章要連到舊的相關文章，舊文章也要回過頭來連到新文章。' },
        { title: '主題群集（Topic Cluster）', desc: '圍繞一個核心主題寫多篇相關文章，互相連結。例如「台北美食」是主題，底下有「台北早午餐」「台北宵夜」「台北咖啡廳」等子文章。' },
      ],
      dos: [
        '每篇新文章都連到至少 3 篇舊文章',
        '用自然的錨點文字（包含關鍵字）',
        '建立主題群集，互相連結',
        '重要頁面要從多個地方連結過去',
      ],
      donts: [
        '不要所有連結都用「點這裡」或「了解更多」',
        '不要一篇文章塞 20 個以上連結',
        '不要只連出去不連回來',
      ],
      tips: [
        '定期檢查是否有「孤立頁面」（沒有任何內部連結指向它）',
        '在文章結尾加「延伸閱讀」區塊放相關連結',
        '用主題群集思維來規劃內容日曆',
      ],
    },
  },
  {
    icon: Gauge,
    id: 'speed',
    title: '頁面速度優化',
    summary: '網站載入速度影響排名和讀者體驗。',
    content: {
      intro: 'Google 把頁面速度列為排名因素之一。載入太慢，讀者會離開，搜尋引擎也會降低你的排名。',
      points: [
        { title: 'Core Web Vitals', desc: 'Google 衡量頁面體驗的三個指標：LCP（最大內容載入時間，要 < 2.5 秒）、FID（互動延遲，要 < 100 毫秒）、CLS（版面位移，要 < 0.1）。' },
        { title: '圖片優化', desc: '圖片是拖慢網站的最大元凶。使用 WebP 格式、正確尺寸、lazy loading，可以大幅提升速度。' },
        { title: 'CDN 與快取', desc: '使用 Cloudflare 等 CDN 讓全球讀者都從最近的伺服器載入。開啟瀏覽器快取讓重複訪問更快。' },
      ],
      dos: [
        '用 PageSpeed Insights 測試每個頁面',
        '圖片壓縮後再上傳',
        '開啟瀏覽器快取（Browser Caching）',
        '使用 CDN（Cloudflare 免費就夠了）',
      ],
      donts: [
        '不要上傳原始相機解析度的照片',
        '不要安裝太多外掛（會拖慢速度）',
        '不要忽略手機版的載入速度',
      ],
      tips: [
        'Cloudflare Pages 已經內建 CDN，不用額外設定',
        '用 Chrome DevTools 的 Lighthouse 定期檢查',
        '首頁圖片用 eager loading，其他用 lazy loading',
      ],
    },
  },
  {
    icon: Code,
    id: 'schema',
    title: 'Schema 結構化資料',
    summary: 'Schema 讓 Google 更理解你的內容，可能顯示為精選摘要。',
    content: {
      intro: 'Schema（結構化資料）是在 HTML 中埋入的額外標記，告訴 Google「這是食譜」「這是常見問題」「這是評論」。有了 Schema，你的搜尋結果可能顯示星級評分、FAQ 下拉、麵包屑等豐富片段。',
      points: [
        { title: '常用的 Schema 類型', desc: '部落格常用的有：Article（文章）、FAQPage（常見問題）、Review（評論）、BreadcrumbList（麵包屑）、Organization（組織資訊）。' },
        { title: 'JSON-LD 格式', desc: '推薦用 JSON-LD 格式（放在 `<head>` 裡的 `<script>` 標籤），這是 Google 最推薦的寫法，容易維護。' },
        { title: 'FAQ Schema 效果', desc: '在文章結尾加入 FAQ Schema，你的搜尋結果可能會顯示可展開的問答區塊，佔據更多版面，吸引更多點擊。' },
      ],
      dos: [
        '每篇文章都加 Article Schema',
        '有 FAQ 就加 FAQPage Schema',
        '用 Google 的 Rich Results Test 測試',
        '確保 Schema 內容和頁面實際內容一致',
      ],
      donts: [
        '不要寫假的 Schema 資料（Google 會懲罰）',
        '不要在一個頁面塞太多 Schema 類型',
        '不要忘記測試 Schema 是否有效',
      ],
      tips: [
        '從 FAQ Schema 開始，效果最明顯',
        '用 Merkle 的 Schema Markup Generator 產生程式碼',
        '定期用 Search Console 的「強化功能」報告檢查',
      ],
    },
  },
  {
    icon: ChartLine,
    id: 'search-console',
    title: 'Search Console 使用',
    summary: 'Search Console 是免費工具，觀察你的 SEO 成效。',
    content: {
      intro: 'Google Search Console（簡稱 GSC）是 Google 官方免費工具，可以觀察你的網站在搜尋結果中的表現，包括哪些關鍵字帶來流量、點擊率多少、有沒有索引問題等。',
      points: [
        { title: '成效報表', desc: '看哪些查詢帶來最多點擊、曝光、平均排名位置。用來了解哪些文章表現好，哪些需要優化。' },
        { title: '網頁體驗報表', desc: '檢查 Core Web Vitals（頁面速度）和行動裝置易用性，找出需要改善的頁面。' },
        { title: '索引報表', desc: '看哪些頁面被 Google 索引了，哪些被排除。如果新文章沒被索引，可以用「網址檢查工具」手動提交。' },
        { title: 'Sitemap 提交', desc: '把 sitemap.xml 的網址提交給 Google，讓 Google 更快發現你的新文章。' },
      ],
      dos: [
        '每週至少看一次成效報表',
        '新文章發布後用「網址檢查工具」提交',
        '定期檢查索引狀況，確認沒有錯誤',
        '設定 sitemap 自動提交',
      ],
      donts: [
        '不要忽略 GSC 的錯誤通知',
        '不要只看曝光不看點擊率',
        '不要忘記提交 sitemap',
      ],
      tips: [
        '用「查詢」篩選特定關鍵字的表現',
        '比較不同時間區間來看成長趨勢',
        '點擊率低但曝光高的文章，優化 Title 和 Description',
      ],
    },
  },
];

export default function SeoTopics() {
  const [openId, setOpenId] = useState<string | null>('keyword');

  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      <div className="container-main max-w-4xl mx-auto">
        <div className="space-y-4">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            const isOpen = openId === topic.id;

            return (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'bg-white shadow-lg ring-1 ring-coral/20' : 'bg-white/70 shadow-sm'
                }`}
              >
                {/* Header */}
                <button
                  onClick={() => setOpenId(isOpen ? null : topic.id)}
                  className="w-full flex items-center gap-4 p-5 md:p-6 text-left hover:bg-white transition-colors"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                    isOpen ? 'bg-coral text-white' : 'bg-coral/10 text-coral'
                  }`}>
                    <Icon size={24} weight="regular" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-medium text-coffee">{topic.title}</h3>
                    <p className="text-sm text-warmgray mt-0.5">{topic.summary}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <CaretDown size={20} className="text-warmgray" />
                  </motion.div>
                </button>

                {/* Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-6 space-y-6 border-t border-sand/30 pt-6">
                        {/* Intro */}
                        <p className="text-coffee leading-relaxed">{topic.content.intro}</p>

                        {/* Key Points */}
                        <div className="space-y-4">
                          <h4 className="text-sm font-medium text-coral tracking-wider uppercase">核心知識</h4>
                          {topic.content.points.map((point) => (
                            <div key={point.title} className="bg-ivory rounded-xl p-4">
                              <h5 className="font-medium text-coffee mb-1">{point.title}</h5>
                              <p className="text-sm text-warmgray leading-relaxed">{point.desc}</p>
                            </div>
                          ))}
                        </div>

                        {/* Dos and Don'ts */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-medium text-mint mb-3 flex items-center gap-2">
                              <CheckCircle size={16} />
                              該做的
                            </h4>
                            <ul className="space-y-2">
                              {topic.content.dos.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-coffee">
                                  <span className="text-mint mt-0.5">✓</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-sunset mb-3 flex items-center gap-2">
                              <XCircle size={16} />
                              不該做的
                            </h4>
                            <ul className="space-y-2">
                              {topic.content.donts.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-coffee">
                                  <span className="text-sunset mt-0.5">✗</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Tips */}
                        <div className="bg-coral/5 rounded-xl p-4">
                          <h4 className="text-sm font-medium text-coral mb-3 flex items-center gap-2">
                            <Lightbulb size={16} />
                            實戰技巧
                          </h4>
                          <ul className="space-y-2">
                            {topic.content.tips.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-sm text-coffee">
                                <span className="text-sunny mt-0.5">★</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
