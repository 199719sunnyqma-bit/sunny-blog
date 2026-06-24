export interface FoodPost {
  id: number;
  image: string;
  region: string;
  type: string;
  title: string;
  excerpt: string;
  rating: number;
  price: string;
  date: string;
  slug?: string;
}

export const foodPosts: FoodPost[] = [
  {
    id: 0,
    image: '/images/mtcq-hero.jpg',
    region: '南投',
    type: '咖啡廳',
    title: '日月潭附近咖啡廳推薦｜南投日月潭咖啡廳明潭傳奇風物館',
    excerpt: '想找日月潭附近咖啡廳、南投日月潭咖啡廳？明潭傳奇風物館結合紅玉紅茶、特色套餐、甜點與在地風味。',
    rating: 4.6,
    price: '$$',
    date: '2025/05/20',
    slug: 'mingtan',
  },
  {
    id: 1,
    image: '/images/kcj-hero.jpg',
    region: '新竹',
    type: '串燒',
    title: '新竹串燒店推薦｜下班後想喝一杯，竹北串燒店我選這家！',
    excerpt: '想找新竹串燒店或竹北串燒店？烤場見位於竹北光明一路，提供美味串燒、烤魚、櫛瓜、炒麵，適合下班小酌、朋友聚餐。',
    rating: 4.7,
    price: '$$',
    date: '2025/05/18',
    slug: 'kaochangjian',
  },
  {
    id: 1,
    image: '/images/post-2.jpg',
    region: '台北',
    type: '中式',
    title: '隱藏在巷弄裡的米其林牛肉麵',
    excerpt: '這家只有 8 個座位的小店，靠著一碗紅燒牛肉麵征服無數饕客。湯頭熬了 12 小時，牛肉入口即化。',
    rating: 4.8,
    price: '$$',
    date: '2025/12/10',
  },
  {
    id: 2,
    image: '/images/feature-food.jpg',
    region: '台中',
    type: '日式',
    title: '台中人氣拉麵店，濃厚豚骨湯頭令人上癮',
    excerpt: '排隊也要吃！這家拉麵店的豚骨湯頭濃郁不膩，配上軟嫩的叉燒與完美的溏心蛋，每一口都是享受。',
    rating: 4.6,
    price: '$$',
    date: '2025/12/05',
  },
  {
    id: 3,
    image: '/images/food-hero-bg.jpg',
    region: '台北',
    type: '甜點',
    title: '台北東區的法式甜點天堂，每一口都是藝術品',
    excerpt: '這家甜點店的主廚曾赴法國學藝，馬卡龍的口感與內餡搭配恰到好處，是下午茶的最佳選擇。',
    rating: 4.9,
    price: '$$$',
    date: '2025/11/28',
  },
  {
    id: 4,
    image: '/images/post-2.jpg',
    region: '台南',
    type: '小吃',
    title: '台南百年擔仔麵，一碗傳承四代的好味道',
    excerpt: '從 1920 年代開始，這家擔仔麵已經傳承了四代。蝦湯的鮮甜與肉燥的香氣，是台南人最懷念的味道。',
    rating: 4.7,
    price: '$',
    date: '2025/11/20',
  },
  {
    id: 5,
    image: '/images/food-hero-bg.jpg',
    region: '高雄',
    type: '韓式',
    title: '高雄道地韓式烤肉，讓你秒飛首爾',
    excerpt: '由韓國老闆親自經營，從醃製醬料到配菜都堅持道地韓國風味。烤得滋滋作響的五花肉配上生菜，完美！',
    rating: 4.5,
    price: '$$$',
    date: '2025/11/15',
  },
  {
    id: 6,
    image: '/images/feature-food.jpg',
    region: '台中',
    type: '西式',
    title: '台中森林系早午餐，在城市綠洲中享用美味',
    excerpt: '隱身在巷弄裡的早午餐店，被綠植環繞的空間讓人放鬆。班尼迪克蛋的荷蘭醬濃郁滑順，配上鮮蝦超級搭。',
    rating: 4.4,
    price: '$$',
    date: '2025/11/08',
  },
  {
    id: 7,
    image: '/images/food-hero-bg.jpg',
    region: '台北',
    type: '小吃',
    title: '士林夜市美食攻略，這 5 家小吃絕對不能錯過',
    excerpt: '從鹹酥雞到臭豆腐，從珍珠奶茶到大腸包小腸，帶你吃遍士林夜市最道地的美味。',
    rating: 4.6,
    price: '$',
    date: '2025/10/25',
  },
  {
    id: 8,
    image: '/images/post-2.jpg',
    region: '台北',
    type: '日式',
    title: '無菜單日式料理，主廚的驚喜每一道都讓人驚艷',
    excerpt: '坐在板前看著主廚現場料理，從前菜到甜點共 12 道，每一道都是視覺與味覺的雙重享受。',
    rating: 4.8,
    price: '$$$$',
    date: '2025/10/18',
  },
  {
    id: 9,
    image: '/images/feature-food.jpg',
    region: '高雄',
    type: '西式',
    title: '高雄海邊義大利餐廳，看著夕陽吃晚餐',
    excerpt: '位於高雄港邊的義式餐廳，坐在戶外座位可以欣賞港灣夕陽。手工義大利麵口感 Q 彈，配上在地海鮮超新鮮。',
    rating: 4.3,
    price: '$$$',
    date: '2025/10/10',
  },
];

export const foodRegions = ['全部', '台北', '台中', '台南', '高雄'];
export const foodTypes = ['全部', '中式', '日式', '韓式', '西式', '甜點', '小吃'];
