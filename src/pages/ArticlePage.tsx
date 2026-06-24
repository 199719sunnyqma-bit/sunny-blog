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
  'mingtan': {
    slug: 'mingtan',
    title: '日月潭附近咖啡廳推薦｜南投日月潭咖啡廳明潭傳奇風物館',
    subtitle: '想找日月潭附近咖啡廳、南投日月潭咖啡廳？明潭傳奇風物館結合紅玉紅茶、特色套餐、甜點與在地風味。',
    description: '日月潭附近咖啡廳推薦明潭傳奇風物館，位於南投魚池，提供芒萁織味套餐、手沖紅玉紅茶、紅玉泡芙，是旅行途中放慢節奏的好選擇。',
    date: '2025/05/20',
    tags: ['美食', '南投', '日月潭', '咖啡廳', '合作邀約'],
    heroImage: '/images/mtcq-hero.jpg',
    heroAlt: '日月潭附近咖啡廳推薦｜南投日月潭咖啡廳明潭傳奇風物館全餐合照',
    readTime: '10 分鐘',
    sections: [
      {
        type: 'paragraph',
        content: '每次來日月潭，我最喜歡的不是把行程排得滿滿，而是找一間舒服的店，坐下來吃點東西、喝杯茶，順便觀察這個地方到底有什麼味道。身為一個喜歡吃喝玩樂的 SEO 技術人員，最近又開始做部落格接案，我其實很在意一間店能不能被寫出「內容感」：不是只有漂亮照片，也不是只有打卡，而是它有沒有自己的餐點特色、地方記憶，還有讓人願意多停留一下的理由。\n\n這次想分享的是位在南投魚池的 **明潭傳奇風物館**。如果你正在搜尋「日月潭附近咖啡廳」或「南投日月潭咖啡廳」，但不想只喝一杯咖啡就離開，而是希望同時吃得到正餐、甜點、紅茶，甚至想把它安排成日月潭行程中的一站，明潭傳奇風物館會是蠻值得放入口袋名單的選擇。',
      },
      {
        type: 'heading',
        content: '日月潭附近咖啡廳，不一定只能喝咖啡',
      },
      {
        type: 'image',
        src: '/images/mtcq-interior.jpg',
        alt: '日月潭附近咖啡廳，不一定只能喝咖啡',
      },
      {
        type: 'paragraph',
        content: '很多人搜尋日月潭附近咖啡廳，第一個想到的可能是湖景、咖啡、甜點、拍照。但我自己會更在意「這間店有沒有跟日月潭這個地方產生關聯」。畢竟來到南投日月潭，如果只是喝一杯在任何城市都喝得到的咖啡，會有點可惜。\n\n明潭傳奇風物館比較吸引我的地方，是它的菜單有把紅玉紅茶、馬告、芒萁這些元素放進餐點裡。它不是單純做一張很安全的咖啡廳菜單，而是有嘗試把南投魚池、日月潭一帶的風味，轉成套餐、飲品與甜點。對我來說，這樣的店很適合寫成旅遊型文章，因為它不只是「哪裡有咖啡廳」，而是能延伸出「為什麼來日月潭可以安排這一站」。',
      },
      {
        type: 'heading',
        content: '我這次最喜歡：芒萁織味套餐',
      },
      {
        type: 'image',
        src: '/images/mtcq-set.jpg',
        alt: '我這次最喜歡：芒萁織味套餐',
      },
      {
        type: 'paragraph',
        content: '這次我點的是 **芒萁織味套餐**，主餐選擇 **芒萁肉茶湯麵**，副餐搭配 **生菜沙拉**，飲品選 **手沖紅玉紅茶**，最後還吃了 **紅玉泡芙**。如果你跟我一樣，旅行時不想只吃小點，而是希望有一份完整餐點，這個套餐我覺得是蠻剛好的選擇。\n\n芒萁肉茶湯麵是比較有飽足感的主餐，不是咖啡廳常見的輕食。**芒萁**的香氣讓整體多一點精緻感，不會只是單純吃肉配麵，對想在日月潭附近找地方用餐的人來說，這道會比只點甜點更有滿足感。\n\n副餐我選的是生菜沙拉，搭配特製芒萁馬告優格醬。這個搭配我覺得蠻有記憶點，因為馬告本身帶有獨特香氣，放在沙拉醬裡，會讓生菜不只是清爽而已，而是多了一種比較山林感的味道。尤其主餐已經是豬里肌飯，配一份沙拉剛好可以平衡油脂感，吃起來比較不膩。',
      },
      {
        type: 'heading',
        content: '手沖紅玉紅茶，是這一餐的重點之一',
      },
      {
        type: 'image',
        src: '/images/mtcq-tea.jpg',
        alt: '手沖紅玉紅茶，是這一餐的重點之一',
      },
      {
        type: 'paragraph',
        content: '來到南投日月潭咖啡廳，我自己會建議不要只看咖啡，也可以試試紅玉紅茶。這次套餐飲品我選的是 **手沖紅玉紅茶**，一壺熱茶慢慢喝，會比一般手搖飲或冰飲更有「坐下來休息」的感覺。\n\n我很喜歡這種旅途中可以放慢速度的安排。尤其日月潭行程常常會騎車、走步道、搭船或到處拍照，中間如果有一段時間可以坐下來喝熱茶，整個節奏會舒服很多。手沖紅玉紅茶的香氣不像咖啡那麼直接，但它是慢慢出來的，適合搭配餐點，也適合吃完飯後繼續坐一下。\n\n如果你是想找日月潭附近咖啡廳，但同行的人有人想喝咖啡、有人想喝茶，明潭傳奇風物館的飲品選擇也比較彈性。菜單上除了手沖紅玉紅茶，也有美式咖啡、拿鐵、日月潭手沖精品咖啡，以及梅子檸檬氣泡飲。這點對多人出遊來說很重要，因為不是每個人都想喝同一種飲料。',
      },
      {
        type: 'heading',
        content: '紅玉泡芙：小小一顆，但很適合收尾',
      },
      {
        type: 'image',
        src: '/images/mtcq-puff.jpg',
        alt: '紅玉泡芙：小小一顆，但很適合收尾',
      },
      {
        type: 'paragraph',
        content: '套餐最後搭配的紅玉泡芙，我覺得是整餐的甜點收尾。它不是那種很巨大、吃完會太撐的甜點，而是剛好讓這一餐有結尾感。紅茶風味做進甜點裡，會讓整體從主餐、沙拉、紅茶到泡芙之間有一點連貫性，不會像硬湊出來的套餐。\n\n如果只是下午來，不想吃正餐，也可以考慮茶點特惠組。菜單上有飲品三選一、甜點三選一的組合，可以選手沖紅玉紅茶、美式咖啡或梅子檸檬氣泡飲，再搭配紅茶泡芙、馬卡龍或紅茶年輪蛋糕。對只想找南投日月潭咖啡廳坐一下的人來說，這種組合會比單點更簡單。',
      },
      {
        type: 'heading',
        content: '正餐、下午茶、披薩、小食都有，適合不同時段安排',
      },
      {
        type: 'image',
        src: '/images/mtcq-pizza.jpg',
        alt: '正餐、下午茶、披薩、小食都有，適合不同時段安排',
      },
      {
        type: 'paragraph',
        content: '從明潭傳奇風物館的菜單來看，它不是只有咖啡與甜點，而是比較完整的複合式餐飲配置。主打的 **芒萁織味套餐** 有三種主餐可以選，包含黑松露帶骨豬里肌飯、芒萁肉茶湯麵，以及蛋奶素可吃的鮮蔬茶湯麵；副餐則可選鮮蔬炸物或生菜沙拉，飲品包含手沖紅玉紅茶、美式咖啡與梅子檸檬氣泡飲，並附限量手工紅茶泡芙。',
      },
      {
        type: 'image',
        src: '/images/mtcq-snacks.jpg',
        alt: '正餐、下午茶、披薩、小食都有，適合不同時段安排',
      },
      {
        type: 'paragraph',
        content: '如果是下午茶時段，則有茶點特惠組，能用飲品搭配甜點。想多人分食，也有 11 吋披薩，口味包含煙燻鮭魚蔬菜、馬告鹹豬肉、百菇泡菜等。單點小食也不少，像芒萁肉茶湯麵、鮮蔬茶湯麵、燒烤雞翅、黃金脆蝦圈圈、鮮蔬炸物、雞塊、洋蔥圈與薯塊都可以搭配。',
      },
      {
        type: 'image',
        src: '/images/mtcq-drinks.jpg',
        alt: '正餐、下午茶、披薩、小食都有，適合不同時段安排',
      },
      {
        type: 'paragraph',
        content: '飲品部分除了紅玉紅茶，也有紅玉鮮奶茶、手沖精品咖啡、拿鐵、美式咖啡與氣泡飲；甜點則有紅茶年輪蛋糕、紅茶泡芙與馬卡龍。',
      },
      {
        type: 'heading',
        content: '為什麼我覺得它適合寫進日月潭行程？',
      },
      {
        type: 'paragraph',
        content: '我自己在做 SEO 內容時，很在意一篇文章能不能解決搜尋者的問題。搜尋「日月潭附近咖啡廳」的人，表面上是在找咖啡廳，但背後可能有幾種需求：有人想找吃午餐的地方，有人想找下午茶，有人想找可以坐久一點的空間，也有人是帶寵物出門，希望店家不要太拘束。\n\n明潭傳奇風物館在這些需求上剛好都有一些對應。它有正餐套餐，也有茶點與甜點；有咖啡，也有紅玉紅茶；有小食，也有披薩可以分享。加上店家資訊中提到是友善寵物空間，對有帶毛小孩旅行的人來說，也多了一個可以考慮的理由。\n\n我會建議把它安排在日月潭行程的中段，不一定要一早就去。像是上午先到日月潭周邊走走，中午或下午再來明潭傳奇風物館用餐，點一份套餐或茶點，休息一下再接續後面的行程。這樣不會太趕，也比較符合日月潭本身慢步調的旅行感。',
      },
      {
        type: 'heading',
        content: '推薦怎麼點？',
      },
      {
        type: 'image',
        src: '/images/mtcq-order.jpg',
        alt: '推薦怎麼點？',
      },
      {
        type: 'paragraph',
        content: '如果你是第一次來，我會優先推薦 **芒萁織味套餐**。想吃飽一點，可以選黑松露帶骨豬里肌飯；如果想吃比較有湯感的餐點，可以選芒萁肉茶湯麵；若是蛋奶素，則可以選鮮蔬茶湯麵。副餐部分，想清爽一點選生菜沙拉，想吃炸物就選鮮蔬炸物。\n\n飲品我私心推薦手沖紅玉紅茶，尤其是你平常就喜歡茶香的人，來日月潭喝紅玉紅茶會比喝一般飲料更有地方感。如果你是咖啡派，也可以選美式咖啡或另外單點日月潭手沖精品咖啡。甜點部分，紅玉泡芙很適合當套餐收尾；如果是下午茶，可以考慮紅茶年輪蛋糕或馬卡龍。\n\n多人同行的話，可以再加點披薩或小食。像馬告鹹豬肉披薩、煙燻鮭魚蔬菜披薩，會比較適合大家分食；如果只是想邊聊天邊吃一點，洋蔥圈、薯塊、雞塊或蝦圈也都比較輕鬆。',
      },
      {
        type: 'heading',
        content: '日月潭附近咖啡廳，可以吃得更有地方感',
      },
      {
        type: 'paragraph',
        content: '如果你正在找日月潭附近咖啡廳，明潭傳奇風物館不是那種只有咖啡、蛋糕和拍照角落的店。它比較像是一個可以把日月潭旅行節奏放慢的地方，有紅玉紅茶、有套餐、有甜點，也有一些帶著在地風味的餐點設計。\n\n以我這次的用餐經驗來說，最喜歡的是芒萁織味套餐的完整度。手沖紅玉紅茶讓整餐更有日月潭感，最後再用紅玉泡芙收尾，整體不是浮誇路線，但很適合旅行途中好好坐下來吃一餐。\n\n下次如果你來南投魚池、日月潭旅行，不想只是隨便找一間咖啡廳坐坐，也想吃到有一點在地味道的餐點，可以把明潭傳奇風物館放進你的口袋名單。搜尋南投日月潭咖啡廳時，這裡會是我覺得蠻值得安排的一站。',
      },
    ],
    shopInfo: {
      name: '明潭傳奇風物館',
      address: '南投縣魚池鄉水社村中山路510巷10號',
      phone: '+49 2855 067',
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
