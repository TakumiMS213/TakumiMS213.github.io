/*
 * =========================================================
 * Works 編集用ファイル
 * =========================================================
 *
 * 作品の追加・修正は、基本的にこのファイルだけで行えます。
 *
 * 基本形:
 *
 * {
 *   type: "種別",
 *   title: "作品名",
 *   slug: "example",
 *   description: "作品の説明",
 *   icon: "assets/works/example/icon.png",
 *   iconAlt: "作品アイコンの説明",
 *   url: "リンク先URL",
 *   linkText: "リンクに表示する文字",
 *   muted: false,
 *   media: []
 * },
 *
 * ---------------------------------------------------------
 * slug と詳細記事
 * ---------------------------------------------------------
 *
 * slug: "gearcraft",
 *
 * Worksのカードをクリックすると
 * work.html?id=gearcraft
 * に移動し、works/gearcraft.md を記事として読み込みます。
 *
 * 新しい作品を追加するときは:
 * 1. slug を決める
 * 2. works/slug.md を作る
 * これだけで詳細ページを追加できます。
 *
 * ---------------------------------------------------------
 * 作品アイコンを入れる
 * ---------------------------------------------------------
 *
 * icon: "assets/works/example/icon.png",
 * iconAlt: "作品アイコンの説明",
 *
 * ・icon を空文字 "" にするとアイコンは表示されません。
 * ・PNG / JPG / WebP など通常の画像が使えます。
 *
 * ---------------------------------------------------------
 * 画像を入れる
 * ---------------------------------------------------------
 *
 * media: [
 *   {
 *     type: "image",
 *     src: "assets/works/example/image01.jpg",
 *     alt: "画像の説明",
 *     caption: "任意のキャプション"
 *   }
 * ]
 *
 * ---------------------------------------------------------
 * MP4などの動画を入れる
 * ---------------------------------------------------------
 *
 * media: [
 *   {
 *     type: "video",
 *     src: "assets/works/example/movie.mp4",
 *     poster: "assets/works/example/thumbnail.jpg",
 *     caption: "プレイ動画"
 *   }
 * ]
 *
 * poster は省略可能です。
 *
 * ---------------------------------------------------------
 * YouTubeを入れる
 * ---------------------------------------------------------
 *
 * media: [
 *   {
 *     type: "youtube",
 *     src: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
 *     alt: "動画タイトル",
 *     caption: "紹介動画"
 *   }
 * ]
 *
 * 通常の YouTube URL / youtu.be URL のどちらでも使えます。
 *
 * ---------------------------------------------------------
 * 複数の画像・動画を並べる
 * ---------------------------------------------------------
 *
 * media の中に続けて書くだけです。
 *
 * media: [
 *   { type: "image", src: "image01.jpg", alt: "画面1" },
 *   { type: "image", src: "image02.jpg", alt: "画面2" },
 *   { type: "video", src: "movie.mp4" }
 * ]
 *
 * ・icon を空文字 "" にすると作品アイコンは表示されません。
 * ・url を空文字 "" にすると作品リンクは表示されません。
 * ・caption は不要なら省略できます。
 * ・media 自体が不要なら [] のままでOKです。
 * ・muted: true にすると薄いデザインになります。
 * ・作品の並び順は、このファイルに書いた順番です。
 *
 * おすすめ:
 * 画像や動画は
 * assets/works/作品名/
 * のように作品ごとのフォルダへ置くと整理しやすいです。
 */

window.WORKS = [
  {
    type: "Website",
    title: "ポートフォリオサイト",
    slug: "portfolio-site",
    description: "このリポジトリで公開している自己紹介サイトです。GitHub Pages で軽く運用できます。",
    icon: "Assets/Icons/IMG_1464.jpg",
    iconAlt: "",
    url: "https://github.com/TakumiMS213/TakumiMS213.github.io",
    linkText: "Repository",
    muted: false,
    media: []
  },
  {
    type: "Game",
    title: "GearCraft",
    slug: "gearcraft",
    description: "スチームパンク×タワーディフェンス×ローグライクのゲームです。Unity で制作しました。",
    icon: "Assets/Icons/GearCraft_icon.jpg",
    iconAlt: "",
    url: "",
    linkText: "",
    muted: true,
    media: []
  },
  {
    type: "Game",
    title: "LostNine",
    slug: "lostnine",
    description: "「遺失物」をテーマにしたADVゲームです。Unity で制作しました。",
    icon: "Assets/Icons/LostNine_アイコン.png",
    iconAlt: "",
    url: "",
    linkText: "",
    muted: true,
    media: []
  },
  {
    type: "Game",
    title: "Word Cascade Shooter",
    slug: "word-cascade-shooter",
    description: "文字の滝の中から、お題に合う文字を打ち抜くシューティンクゲームです。Unity で制作しました。",
    icon: "Assets/Icons/wcs_7.png",
    iconAlt: "",
    url: "https://unityroom.com/games/wordcascadeshooter",
    linkText: "Unityroom",
    muted: false,
    media: []
  },
  {
    type: "Game",
    title: "RE:COLOR",
    slug: "recolor",
    description: "サイバーエージェントのプロトスプリントリーグで作成した、色をテーマにしたシューティングパズルゲームです。Unity で制作しました。",
    icon: "Assets/Icons/REcolor_icon.png",
    iconAlt: "",
    url: "https://unityroom.com/games/re_color",
    linkText: "Unityroom",
    muted: false,
    media: []
  }
];
