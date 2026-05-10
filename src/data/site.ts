import {
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  Camera,
  Gem,
  Handshake,
  HelpCircle,
  Landmark,
  MessageCircle,
  Phone,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Store,
  Watch
} from "lucide-react";

export const company = {
  tradeName: "買い取りバンク",
  name: "株式会社FirstCourage",
  nameEn: "FirstCourage Inc.",
  area: "全国対応（本社：大阪）",
  business: "ブランド品・時計・ジュエリー・貴金属の催事買取、LINE無料査定、買取相談",
  license: "古物商許可番号：第000000000000号",
  address: "〒540-0009 大阪府大阪市中央区谷町９丁目２－１２－３０２",
  representative: "代表取締役：山田 太郎",
  phone: "0120-000-000",
  phoneHours: "10:00-18:00 / 土日祝も相談受付",
  lineUrl: "https://line.me/R/ti/p/@firstcourage-placeholder",
  contactEmail: "info@example.com",
  noStoreNote: "実店舗を持たず、全国各地の催事会場とLINE査定でご相談を承ります。"
} as const;

export const metrics = [
  { label: "催事開催実績", value: "120", unit: "会場以上", note: "" },
  { label: "買取相談件数", value: "3,500", unit: "件以上", note: "" },
  { label: "査定料", value: "0", unit: "円", note: "LINE・電話相談も無料" }
] as const;

export const navItems = [
  { label: "初めての方へ", href: "/first-time" },
  { label: "買取方法", href: "/purchase-methods" },
  { label: "買取品目", href: "/items" },
  { label: "参考価格", href: "/prices" },
  { label: "FAQ", href: "/faq" },
  { label: "会社概要", href: "/company" }
] as const;

export const trustPoints = [
  {
    title: "会社情報と許認可を明示",
    body: "所在地・代表者名・古物商許可番号を掲載し、催事買取でも運営元が確認できる状態にします。",
    icon: ShieldCheck
  },
  {
    title: "査定だけでも相談可能",
    body: "売却を急かさず、まずは写真や電話で状態を確認。初めての方にもわかる言葉で説明します。",
    icon: SearchCheck
  },
  {
    title: "無理な営業をしない",
    body: "金額や手続きに納得できない場合は見送り可能。しつこい連絡を前提にしない導線にしています。",
    icon: Handshake
  }
] as const;

export const purchaseMethods = [
  {
    title: "催事買取",
    lead: "お近くの催事会場で、ブランド品や貴金属を対面で相談できます。",
    body: "実店舗がなくても、会社情報と許認可を明示したうえで全国の催事会場にて対応します。査定内容はその場で説明し、無理な売却をおすすめしません。",
    icon: Store,
    href: "/purchase-methods#event"
  },
  {
    title: "LINE査定",
    lead: "写真を送るだけで、売れるかどうか・目安を気軽に相談できます。",
    body: "バッグ、時計、ジュエリーなどの写真をLINEで送信。来場前に相談できるため、初めての方にも使いやすい導線です。",
    icon: MessageCircle,
    href: "/purchase-methods#line"
  },
  {
    title: "電話相談",
    lead: "写真を送るのが苦手な方も、電話で相談できます。",
    body: "品物の種類や点数、催事会場の確認などをスタッフが案内します。ご家族の整理やまとめ売りの相談にも対応します。",
    icon: Phone,
    href: "/purchase-methods#phone"
  }
] as const;

export const itemCategories = [
  { name: "ブランドバッグ", description: "ハンドバッグ、ショルダー、トート、古いモデルも相談可能", icon: BriefcaseBusiness },
  { name: "ブランド財布・小物", description: "財布、キーケース、カードケース、スカーフなど", icon: Sparkles },
  { name: "高級時計", description: "ロレックス、オメガ、タグ・ホイヤーなど", icon: Watch },
  { name: "ジュエリー", description: "リング、ネックレス、ピアス、ブランドジュエリー", icon: Gem },
  { name: "金・貴金属", description: "金、プラチナ、インゴット、切れたネックレスも相談可", icon: Landmark },
  { name: "アパレル", description: "ブランド衣類、コート、ジャケットなど", icon: BadgeCheck },
  { name: "靴", description: "パンプス、スニーカー、革靴、ブーツ", icon: Award },
  { name: "アクセサリー", description: "ブレスレット、ブローチ、カフス、装飾小物", icon: Sparkles },
  { name: "宝石", description: "ダイヤモンド、色石、鑑定書なしの品物も相談可能", icon: Gem },
  { name: "その他ブランド品", description: "点数が多い整理品も、まとめてLINEや電話で相談できます", icon: HelpCircle }
] as const;

export const brands = [
  "ルイ・ヴィトン",
  "シャネル",
  "エルメス",
  "グッチ",
  "ディオール",
  "プラダ",
  "セリーヌ",
  "ロエベ",
  "カルティエ",
  "ティファニー",
  "ブルガリ",
  "ロレックス",
  "オメガ",
  "タグ・ホイヤー",
  "パテック フィリップ",
  "その他"
] as const;

export const priceReferences = [
  {
    item: "ルイ・ヴィトン モノグラム バッグ",
    category: "ブランドバッグ",
    condition: "使用感あり・付属品なし",
    price: "45,000-120,000円",
    note: "型番・状態・相場により変動"
  },
  {
    item: "シャネル チェーンショルダー",
    category: "ブランドバッグ",
    condition: "角スレあり・ギャランティあり",
    price: "180,000-650,000円",
    note: "年代・素材・付属品により変動"
  },
  {
    item: "ロレックス デイトジャスト",
    category: "高級時計",
    condition: "稼働品・保証書なし",
    price: "350,000-900,000円",
    note: "年式・文字盤・ブレス状態により変動"
  },
  {
    item: "K18 ネックレス",
    category: "金・貴金属",
    condition: "切れ・変形あり",
    price: "当日の相場で査定",
    note: "重量と品位を確認"
  },
  {
    item: "カルティエ リング",
    category: "ジュエリー",
    condition: "箱なし・小傷あり",
    price: "25,000-180,000円",
    note: "素材・石・サイズにより変動"
  },
  {
    item: "ティファニー ネックレス",
    category: "ジュエリー",
    condition: "シルバー変色あり",
    price: "3,000-35,000円",
    note: "モデルと状態により変動"
  }
] as const;

export const flowSteps = [
  {
    title: "写真を送る・電話で相談",
    body: "LINEで品物の写真を送るか、電話で種類や点数をお知らせください。",
    icon: Camera
  },
  {
    title: "査定の目安を確認",
    body: "状態や相場を確認し、わかる範囲で目安と次の手順をお伝えします。",
    icon: SearchCheck
  },
  {
    title: "催事会場または詳細相談へ",
    body: "必要に応じて催事会場や持ち物、本人確認書類についてご案内します。",
    icon: CalendarDays
  },
  {
    title: "ご納得後にお取引",
    body: "査定内容を説明し、ご納得いただいた場合のみ買取手続きへ進みます。",
    icon: Handshake
  }
] as const;

export const eventHistory = [
  "関西エリア（大阪本社を拠点）ブランド品査定会",
  "関東エリア 商業施設催事",
  "中部エリア 期間限定相談会"
] as const;

export const testimonials = [
  {
    name: "50代 女性",
    body: "初めてで不安でしたが、LINEで先に相談できたので会場へ行きやすかったです。",
    note: ""
  },
  {
    name: "60代 男性",
    body: "時計と貴金属をまとめて相談しました。説明が丁寧で、無理に決めなくてよい雰囲気でした。",
    note: ""
  },
  {
    name: "40代 女性",
    body: "古いバッグでも写真だけで確認してもらえたので、まず聞いてみてよかったです。",
    note: ""
  }
] as const;

export const faqs = [
  {
    question: "査定だけでも大丈夫ですか？",
    answer: "はい、査定だけでもご相談いただけます。金額や説明に納得できない場合は売却しなくて問題ありません。"
  },
  {
    question: "LINE査定では何を送ればよいですか？",
    answer: "品物全体、ブランドロゴ、型番やシリアル、傷や汚れがわかる写真を送っていただくと確認がスムーズです。"
  },
  {
    question: "催事買取は怪しくありませんか？",
    answer: "運営会社、所在地、代表者、古物商許可番号を明示し、催事会場でも査定内容を丁寧に説明します。不安な点は事前にLINEや電話で確認できます。"
  },
  {
    question: "付属品がなくても売れますか？",
    answer: "箱、保証書、保存袋がない品物もご相談可能です。ブランドや状態によって査定額は変わります。"
  },
  {
    question: "古いブランドバッグや傷のある品物も相談できますか？",
    answer: "はい、古いモデル、角スレ、金具のくすみ、破損がある品物もまずは写真でご相談ください。"
  },
  {
    question: "電話での相談もできますか？",
    answer: `はい、${company.phone} にて受け付けています。写真送付が苦手な方や、ご家族の整理品の相談にも対応します。`
  }
] as const;

export const articles = [] as const;

export const imagePrompts = [
  {
    fileName: "stock-marble-consultation-watch-ring.png",
    role: "トップページのヒーロー画像。上品なブランド品と相談しやすさを一瞬で伝える。",
    prompt:
      "Use case: photorealistic-natural. Asset type: website hero image for a Japanese luxury brand buying consultation service. Scene/backdrop: bright clean consultation table in a refined private event booth, white and warm neutral interior. Subject: elegant leather handbag, watch, jewelry tray, smartphone showing a LINE chat-style assessment screen without readable text, and a calm staff hand gesture. Style/medium: photorealistic editorial commercial photography. Composition/framing: landscape 16:9, usable negative space on left, products on right, eye-level. Lighting/mood: soft natural light, trustworthy, warm, clean. Color palette: white, navy accents, subdued gold, dark gray. Constraints: no brand logos, no readable text, no people faces, no flashy luxury, no watermark."
  },
  {
    fileName: "home-line-assessment.png",
    role: "LINE査定ページ・CTA用。写真を送るだけの気軽さを表現する。",
    prompt:
      "Use case: photorealistic-natural. Asset type: LINE assessment feature image. Scene/backdrop: clean desk with smartphone, handbag detail photos, small jewelry case, soft stationery. Subject: smartphone with generic chat bubbles and image thumbnails, no readable text or official logo. Style/medium: warm realistic product-lifestyle photo. Composition/framing: square, top-down 45 degree angle, clear focus on phone and product photos. Lighting/mood: approachable, calm, safe. Color palette: white, linen, navy, muted gold. Constraints: no brand marks, no readable UI text, no aggressive sale atmosphere, no watermark."
  },
  {
    fileName: "event-booth.png",
    role: "催事買取説明用。実店舗なしでも会場で安心して相談できる雰囲気を作る。",
    prompt:
      "Use case: photorealistic-natural. Asset type: event buying booth image. Scene/backdrop: tasteful temporary consultation booth inside a bright shopping facility, small sign with no readable text, tidy table, chairs, privacy-conscious spacing. Subject: staff silhouette from behind explaining documents to an older customer, no identifiable faces. Style/medium: realistic editorial photo. Composition/framing: 4:3, clean lines, booth and consultation table visible. Lighting/mood: safe, professional, friendly. Color palette: white, charcoal, navy, restrained gold. Constraints: no readable text, no crowded scene, no pressure-sales feeling, no watermark."
  },
  {
    fileName: "stock-mixed-luxury-goods-flatlay-wide.png",
    role: "買取品目一覧用。バッグ・時計・ジュエリー・貴金属を上品に見せる。",
    prompt:
      "Use case: product-mockup. Asset type: category overview image. Scene/backdrop: premium white marble and linen surface. Subject: generic luxury-style handbag without logo, wristwatch without logo, gold necklace, ring, wallet, neatly arranged. Style/medium: photorealistic catalog editorial. Composition/framing: wide flat lay, balanced spacing for cropping. Lighting/mood: clean, refined, not flashy. Color palette: ivory, navy shadow, muted gold, soft gray. Constraints: no recognizable brand logos, no text, no watermark."
  },
  {
    fileName: "home-trust-hero.png",
    role: "会社概要・安心訴求用。許認可と運営元が明確である印象を出す。",
    prompt:
      "Use case: photorealistic-natural. Asset type: trust and company information image. Scene/backdrop: clean office desk with neatly placed documents, certificate folder, pen, business card with unreadable placeholder text. Subject: hands placing a document beside a small jewelry box. Style/medium: realistic business editorial photography. Composition/framing: landscape 4:3, calm and uncluttered. Lighting/mood: transparent, sincere, professional. Color palette: white, dark gray, navy, muted gold. Constraints: no readable legal numbers, no brand logo, no faces, no watermark."
  }
] as const;

