export interface PetProfile {
  name: string;
  species: string;
  age: string;
  gender: string;
  illustration: string;
  borderColor: string;
  traits: string[];
  bio: string;
}

export interface PetsPost {
  id: number;
  image: string;
  subject: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  likes: number;
}

export const dogProfile: PetProfile = {
  name: '娜冏',
  species: '台灣土狗',
  age: '1歲半',
  gender: '女生',
  illustration: '/images/dog-real-4.jpg',
  borderColor: '#F4A261',
  traits: ['活潑好動', '貪吃鬼', '愛撒嬌', '好奇心強'],
  bio: '娜冏是一隻精力充沛的台灣土狗女孩，每天最期待的就是出門散步和吃零食。雖然有時候會把家裡弄得一團亂（玩具散滿地的那種），但那雙無辜的大眼睛和燦爛笑容總是讓人捨不得生氣。最喜歡在公園奔跑追蝴蝶，還有跟其他狗狗交朋友！',
};

export const catProfile: PetProfile = {
  name: '烏娜',
  species: '米克斯貓（三花）',
  age: '2歲',
  gender: '女生',
  illustration: '/images/cat-una-1.jpg',
  borderColor: '#F4D35E',
  traits: ['傲嬌女王', '睡覺專家', '愛吃魚', '討厭洗澡'],
  bio: '烏娜是家裡的傲嬌小公主，白天最愛在冰箱上或紙箱上睡午覺，晚上則變身跑酷選手在家裡衝來衝去。雖然表面上對愛理不理，但其實會偷偷蹭過來討摸摸。最討厭的事情是洗澡，最喜歡的是罐頭和紙箱。',
};

export const petsPosts: PetsPost[] = [
  {
    id: 1,
    image: '/images/dog-real-2.jpg',
    subject: '娜冏',
    category: '出遊',
    title: '娜冏的週末公園冒險，遇見了新朋友！',
    excerpt: '週末帶娜冏去大公園放風，沒想到遇見了一隻黃金獵犬，兩隻狗居然一拍即合，追著跑了整個下午。',
    date: '2025/12/05',
    likes: 128,
  },
  {
    id: 2,
    image: '/images/cat-una-3.jpg',
    subject: '烏娜',
    category: '趣事',
    title: '烏娜又把自己塞進紙箱了，這次是鞋盒大小！',
    excerpt: '明明已經是隻大貓了，烏娜還是堅持要擠進各種小紙箱。今天居然成功塞進了鞋盒，只露出一顆貓頭，超級可愛！',
    date: '2025/11/30',
    likes: 256,
  },
  {
    id: 3,
    image: '/images/feature-pets.jpg',
    subject: '娜冏、烏娜',
    category: '日常',
    title: '難得的和平時光，娜冏和烏娜一起曬太陽',
    excerpt: '平常總是打鬧的兩個小傢伙，今天居然難得地安靜並肩坐在窗邊曬太陽。趕快拍下這珍貴的一刻！',
    date: '2025/11/22',
    likes: 312,
  },
  {
    id: 4,
    image: '/images/dog-real-1.jpg',
    subject: '娜冏',
    category: '趣事',
    title: '偷吃慣犯娜冏，這次被當場抓包！',
    excerpt: '只是去廚房倒杯水，回來就發現娜冏站在椅子上，嘴巴還叼著半塊雞肉。那心虛的表情實在太好笑了。',
    date: '2025/11/15',
    likes: 189,
  },
  {
    id: 5,
    image: '/images/cat-una-2.jpg',
    subject: '烏娜',
    category: '日常',
    title: '烏娜：這個鍵盤是我的床，你的工作可以等一下',
    excerpt: '每次一打開電腦，烏娜就會跳上來躺在鍵盤上。今天還順手打翻了我的咖啡，看來是在抗議我工作太久沒理她。',
    date: '2025/11/08',
    likes: 245,
  },
  {
    id: 6,
    image: '/images/dog-real-4.jpg',
    subject: '娜冏',
    category: '出遊',
    title: '娜冏第一次看到大海，那個表情太經典了',
    excerpt: '帶娜冏去宜蘭海邊，牠第一次看到海浪衝過來的表情簡直 priceless！先是嚇到後退，然後開始追著浪花跑。',
    date: '2025/10/28',
    likes: 421,
  },
  {
    id: 7,
    image: '/images/cat-una-1.jpg',
    subject: '烏娜',
    category: '趣事',
    title: '烏娜對金魚的執念：我可以跟牠當朋友嗎？',
    excerpt: '家裡新買了一缸金魚，烏娜從此每天趴在魚缸前盯著看，尾巴搖個不停。不知道是在想交朋友還是在想加菜。',
    date: '2025/10/20',
    likes: 178,
  },
  {
    id: 8,
    image: '/images/feature-pets.jpg',
    subject: '娜冏、烏娜',
    category: '趣事',
    title: '玩具爭奪戰開打！娜冏 VS 烏娜，誰會贏？',
    excerpt: '一個絨毛玩具引發的家庭戰爭。娜冏咬著不放，烏娜用爪子拍打的戰術，最後的贏家居然是...玩具被扯爛了。',
    date: '2025/10/12',
    likes: 267,
  },
  {
    id: 9,
    image: '/images/dog-real-3.jpg',
    subject: '娜冏',
    category: '日常',
    title: '娜冏三歲生日快樂！特製狗狗蛋糕慶祝',
    excerpt: '幫娜冏準備了特製的無糖狗狗蛋糕，上面還插了三根小蠟燭。看到蛋糕的那一刻，娜冏的尾巴搖得像直升機螺旋槳！旁邊還有牠最愛的玩具們。',
    date: '2025/10/01',
    likes: 534,
  },
];

export const petsFilters = ['全部', '娜冏', '烏娜', '日常', '出遊', '趣事'];
