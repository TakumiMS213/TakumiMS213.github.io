# Works 詳細記事の編集方法

Works一覧の情報はルートの `works.js`、詳細ページの本文はこのフォルダ内のMarkdownファイルで管理します。

## 既存作品

- `portfolio-site.md`
- `gearcraft.md`
- `lostnine.md`
- `word-cascade-shooter.md`
- `recolor.md`

## 新しい作品を追加する

1. `works.js` に作品を追加する
2. その作品に `slug: "example"` を設定する
3. `works/_template.md` をコピーして `works/example.md` を作る
4. Markdownを編集する

Worksカードをクリックすると、自動的に `work.html?id=example` が開き、`works/example.md` が読み込まれます。

## Markdownで使える主な書き方

```md
## 見出し

普通の文章。

- 箇条書き
- 箇条書き

**太字**

[リンク](https://example.com)

![画像](assets/works/example/image.png)
```

動画はHTMLを直接書けます。

```html
<video controls playsinline>
  <source src="assets/works/example/movie.mp4" type="video/mp4">
</video>
```

YouTube:

```html
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="紹介動画"
  allowfullscreen>
</iframe>
```
