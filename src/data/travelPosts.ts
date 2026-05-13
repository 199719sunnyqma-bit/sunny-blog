export interface TravelPost {
  id: number;
  image: string;
  region: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export const travelPosts: TravelPost[] = [
  {
    id: 1,
    image: '/images/post-1.jpg',
    region: '台北',
    title: '九份老街的夜晚，燈籠下的懷舊時光',
    excerpt: '走進九份老街，彷彿穿越時光隧道。紅燈籠在夜晚點亮，茶香飄散在空氣中，每一個轉角都有驚喜。',
    date: '2025/12/15',
    readTime: '5 分鐘',
  },
  {
    id: 2,
    image: '/images/travel-hero-bg.jpg',
    region: '嘉義',
    title: '阿里山日出與雲海，大自然的壯麗畫卷',
    excerpt: '凌晨四點起床，搭乘阿里山森林小火車，只為了那一抹從雲海中升起的金色曙光。',
    date: '2025/12/08',
    readTime: '7 分鐘',
  },
  {
    id: 3,
    image: '/images/feature-travel.jpg',
    region: '東部',
    title: '太魯閣峽谷步道，走進大自然的鬼斧神工',
    excerpt: '太魯閣的壯觀峽谷讓人屏息，沿著步道行走，感受大自然的磅礡氣勢與細膩之美。',
    date: '2025/11/25',
    readTime: '6 分鐘',
  },
  {
    id: 4,
    image: '/images/feature-pets.jpg',
    region: '台南',
    title: '安平古堡的夕陽，三百年的歷史餘暉',
    excerpt: '站在安平古堡上，看著夕陽緩緩沉入台灣海峽，感受這座古城三百年來的滄桑與韻味。',
    date: '2025/11/18',
    readTime: '4 分鐘',
  },
  {
    id: 5,
    image: '/images/post-3.jpg',
    region: '離島',
    title: '澎湖跳島之旅，藍色大海的夢幻篇章',
    excerpt: '澎湖的藍讓人著迷，從雙心石滬到玄武岩柱，每一座小島都有獨特的風情與故事。',
    date: '2025/11/10',
    readTime: '8 分鐘',
  },
  {
    id: 6,
    image: '/images/about-avatar.jpg',
    region: '台中',
    title: '高美濕地的日落，風車與倒影的絕美交響',
    excerpt: '當夕陽西沉，高美濕地的水面如鏡，風車的剪影與天空的彩霞交織成一幅絕美畫面。',
    date: '2025/11/02',
    readTime: '5 分鐘',
  },
  {
    id: 7,
    image: '/images/pets-hero-bg.jpg',
    region: '南投',
    title: '清境農場的歐風田園，與綿羊的親密接觸',
    excerpt: '在清境農場的綠色山坡上，綿羊悠閒地吃草，遠處的山巒雲霧繚繞，彷彿置身歐洲小鎮。',
    date: '2025/10/20',
    readTime: '6 分鐘',
  },
  {
    id: 8,
    image: '/images/post-1.jpg',
    region: '台北',
    title: '台北 101 觀景台，俯瞰城市的璀璨燈海',
    excerpt: '登上台北 101 的 89 樓觀景台，整個台北市的燈火盡收眼底，感受這座城市的脈動與活力。',
    date: '2025/10/15',
    readTime: '4 分鐘',
  },
  {
    id: 9,
    image: '/images/feature-travel.jpg',
    region: '國外',
    title: '京都千本鳥居，穿越紅色隧道回到日本古都',
    excerpt: '走進伏見稻荷大社的千本鳥居，紅色的鳥居隧道彷彿通往另一個世界，每一步都充滿神秘與敬畏。',
    date: '2025/09/28',
    readTime: '7 分鐘',
  },
];

export const travelRegions = ['全部', '台北', '台中', '台南', '高雄', '東部', '離島', '國外'];
