/*
 * =========================================================
 * Works 編集用ファイル
 * =========================================================
 *
 * 作品を追加したい場合は、下の WORKS に同じ形式で項目を追加してください。
 *
 * {
 *   type: "種別",
 *   title: "作品名",
 *   description: "作品の説明",
 *   url: "リンク先URL",
 *   linkText: "リンクに表示する文字",
 *   muted: false
 * },
 *
 * ・url を空文字 "" にするとリンクは表示されません。
 * ・linkText は url がある場合だけ使われます。
 * ・muted: true にすると薄いデザインになります。
 * ・作品の並び順は、このファイルに書いた順番です。
 */

window.WORKS = [
  {
    type: "Website",
    title: "Portfolio Site",
    description: "このリポジトリで公開している自己紹介サイトです。GitHub Pages で軽く運用できます。",
    url: "https://github.com/TakumiMS213/TakumiMS213.github.io",
    linkText: "Repository",
    muted: false
  },
  {
    type: "Next",
    title: "Coming Soon",
    description: "今後の制作物をここに追加できます。works.js の内容を書き換えるだけで更新できます。",
    url: "",
    linkText: "",
    muted: true
  }
];
