---
name: 竹村英子ホームページ技術仕様
description: 実装、保守、QA、AIコーディングエージェント向けの静的マルチページサイト仕様。
version: 1.0.0
status: initial-spec
updated: 2026-04-26
tags: [static-site, html, css, accessibility, delivery]
---

# TECHNICAL.md

このファイルは、竹村英子ホームページ刷新の技術仕様正本である。  
`DESIGN.md` が「どう見せるか」を定義し、`TECHNICAL.md` は「どう実装し、どう保守し、どこまでを公開可能とみなすか」を定義する。

AIエージェント、実装者、レビュー担当者は、実装判断で迷ったらこの順で確認する。

1. `TECHNICAL.md`
2. `DESIGN.md`
3. `_project/06_build/site/README.md`
4. `_project/04_content/`
5. `_project/07_delivery/handoff/`

---

## 01 / 実行環境の契約

### 実行環境の要約

| 項目 | 仕様 |
| --- | --- |
| サイト種別 | 静的マルチページサイト |
| 実行環境 | ブラウザのみ |
| 実装ルート | `_project/06_build/site/` |
| ビルド工程 | なし |
| パッケージマネージャ | なし |
| フレームワーク | なし |
| JavaScript | Vanilla JSのみ |
| CSS | グローバルCSS 1ファイル |
| サーバーサイド処理 | なし |
| CMS | なし |
| フォームバックエンド | なし |
| デプロイ先 | 任意の静的ホスティング |

### 変更禁止に近い前提

- 明示的な方針変更がない限り、React、Vue、Next.js、Astro、Vite、Tailwind、Sass、npm、pnpm、bundlerを導入しない。
- 実装ファイルを `_project/06_build/site/` の外へ移動しない。
- 本番表示に関わるコードを `_project/06_build/site/` 以外へ追加しない。
- 未確認の実績、声、数値、企業名、導入事例を推測で追加しない。
- 実際の送信先がないフォームを「送信できるフォーム」のように見せない。
- 診断、予約、相談、決済の外部リンクを変更する場合は、必ずこのファイルの「10 / 外部連携レジストリ」も同時に更新する。

### ローカルプレビュー

リポジトリルートから実行する。

```bash
cd _project/06_build/site
python3 -m http.server 4173
```

ブラウザで開く。

```text
http://127.0.0.1:4173
```

QAではローカルサーバーで確認する。  
HTMLファイルを直接開く確認は、軽い本文確認に限る。リンクや相対パスの確認には使わない。

---

## 02 / ファイル構成の契約

### 公開サイトファイル

```text
_project/06_build/site/
  index.html
  personal.html
  corporate.html
  about.html
  concept.html
  salon.html
  diagnosis.html
  consultation.html
  methods.html
  results.html
  faq.html
  column.html
  contact.html
  styles.css
  script.js
  assets/
    logo-horizontal.jpg
    logo-horizontal-v2.png
    profile.jpg
    salon-flyer.jpg
```

### ファイルごとの責務

| パス | 責務 | 編集するタイミング |
| --- | --- | --- |
| `*.html` | ページ本文、意味構造、内部リンク、外部リンク | 原稿、セクション順、ページ固有マークアップを変更するとき |
| `styles.css` | トークン、レイアウト部品、コンポーネント、レスポンシブ挙動 | 見た目や共通レイアウトを変更するとき |
| `script.js` | メニュー開閉と現在年表示のみ | 小さな共通インタラクションを変更するとき |
| `assets/` | 公開用に最適化した画像 | 実装で使う画像を追加・差し替えするとき |
| `_project/01_source_materials/` | 原本資料 | HTMLから直接参照しない |

### ルート直下の制御ファイル

| ファイル | 目的 |
| --- | --- |
| `README.md` | ワークスペース入口 |
| `DESIGN.md` | デザイン方針と視覚ガードレール |
| `TECHNICAL.md` | 技術仕様、実装、QAガードレール |

リポジトリの運用方針が変わらない限り、ルート直下に新しい作業ファイルを増やさない。

---

## 03 / ページルーティングと責務

すべてのページリンクは `_project/06_build/site/` からの相対リンクを基準にする。

| ページ | URL | 主な役割 | 主CTA | 補助CTA |
| --- | --- | --- | --- | --- |
| `index.html` | `/` | 竹村英子さんが何者かを伝え、個人向け / 法人向けへ振り分ける | `personal.html` | `corporate.html`, `diagnosis.html` |
| `personal.html` | `/personal.html` | 40代以上女性向けの支援を紹介し、無料診断やサロンへつなぐ | `diagnosis.html` | `concept.html`, `salon.html` |
| `corporate.html` | `/corporate.html` | 企業人事・法人向け支援を説明する | `contact.html` | `#menu`, `results.html` |
| `about.html` | `/about.html` | プロフィール、資格、信頼材料を伝える | `personal.html` | `corporate.html`, `methods.html` |
| `concept.html` | `/concept.html` | `じぶん整え習慣` の考え方を説明する | `diagnosis.html` | `salon.html` |
| `salon.html` | `/salon.html` | サロンの対象、内容、流れ、外部参加導線を説明する | `https://honwaka-llc.com/lp/NYkm7qUC` | `consultation.html`, 決済リンク |
| `diagnosis.html` | `/diagnosis.html` | 無料診断を説明し、外部診断ページへつなぐ | `https://www.co-co-lab.com/stress-shindan` | `consultation.html`, `salon.html` |
| `consultation.html` | `/consultation.html` | 無料相談 / 個別相談と予約導線を説明する | `https://www.co-co-lab.com/consultation` | `https://www.co-co-lab.com/book-online` |
| `methods.html` | `/methods.html` | カラーココロジー研究所と方法論を説明する | `personal.html` | `corporate.html` |
| `results.html` | `/results.html` | 実績、声、信頼材料を通じて信頼を作る | `diagnosis.html` | `contact.html` |
| `faq.html` | `/faq.html` | 個人向け / 法人向けのよくある質問に答える | `diagnosis.html` | `contact.html` |
| `column.html` | `/column.html` | コラム / お知らせの入口を作る | `personal.html` | `corporate.html`, `results.html` |
| `contact.html` | `/contact.html` | 個人向け / 法人向けの連絡入口をまとめる | `mailto:` | `tel:`, 外部リンク |

### ページ完成条件

各ページは、次を満たしたときだけ公開可能とみなす。

- 明確な `<h1>` が1つだけある
- ページの役割が1つに絞られている
- 次に進むCTAが最低1つある
- 共通ヘッダーと共通フッターが入っている
- 公開面に制作中の文言が出ていない
- 未確認の企業名・団体名を掲載していない
- ローカルリンクが切れていない
- 表示テキストに `TODO`、`〇〇`、`仮`、`今後追加`、`確認中` が残っていない

---

## 04 / HTML文書の契約

すべてのHTMLページは、以下の構造を基本とする。

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PAGE TITLE | 竹村英子</title>
    <meta name="description" content="PAGE DESCRIPTION" />
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <a class="skip-link" href="#main">本文へ移動</a>
    <header class="site-header">...</header>
    <main id="main">...</main>
    <footer class="site-footer">...</footer>
    <script src="./script.js"></script>
  </body>
</html>
```

### head要素の必須ルール

| 要素 | ルール |
| --- | --- |
| `lang` | `ja` 固定 |
| charset | UTF-8固定 |
| viewport | 必須 |
| title | `ページ名 | 竹村英子` の形式 |
| description | ページ固有。70から130文字程度を目安にする |
| stylesheet | 必ず `./styles.css` |

### ヘッダーの契約

必須構造:

```html
<header class="site-header">
  <div class="site-shell header-inner">
    <a class="brand" href="./index.html" aria-label="竹村英子 ホームへ">
      <img src="./assets/logo-horizontal-v2.png" alt="カラーココロジー研究所 ロゴ" />
      <span class="brand-copy">
        <span class="brand-title">竹村英子</span>
        <span class="brand-sub">color cocology laboratory</span>
      </span>
    </a>
    <nav class="site-nav" data-site-nav>...</nav>
    <div class="header-actions">
      <a class="btn btn-soft" href="./contact.html">お問い合わせ</a>
      <button class="menu-toggle" type="button" aria-label="メニューを開く" aria-expanded="false" data-menu-toggle>メ</button>
    </div>
  </div>
</header>
```

ルール:

- `aria-current="page"` は現在ページのナビゲーションリンク1つだけに付ける。
- `data-site-nav` と `data-menu-toggle` は `script.js` と連動しているため削除しない。
- ヘッダー右側の問い合わせCTAは常に `./contact.html` にする。
- グローバルナビ項目を変更する場合は、全HTMLページを同時に更新する。

### フッターの契約

必須リンク:

```text
ホーム
竹村英子について
個人の方へ
法人・団体の方へ
実績・お客様の声
コラム / お知らせ
お問い合わせ
```

コピーライト年は必ず以下を使う。

```html
© <span data-current-year></span>
```

各ページに年を直書きしない。

---

## 05 / CSSトークンカタログ

すべての視覚プリミティブは、`styles.css` の `:root` に定義する。  
新しいスタイルは、まず既存トークンで表現できるか確認する。

### 色トークン

| トークン | 値 | 役割 |
| --- | --- | --- |
| `--bg` | `#f5eee5` | メインの温かいページ背景 |
| `--bg-strong` | `#efe2d4` | 少し強い背景色 |
| `--paper` | `rgba(255, 251, 246, 0.92)` | 基本パネル面 |
| `--paper-strong` | `#fffaf4` | 強めの紙面色 |
| `--surface` | `rgba(255, 255, 255, 0.88)` | 汎用の白系透過面 |
| `--line` | `rgba(90, 69, 50, 0.18)` | 境界線、区切り線 |
| `--ink` | `#2f2a26` | 主本文色 |
| `--muted` | `#6d645d` | 補助本文色 |
| `--rose` | `#a84f59` | 個人向け / BtoCアクセント、主CTA |
| `--rose-soft` | `#cf8a8e` | やわらかいローズ補助色 |
| `--sage` | `#7a8f77` | 落ち着いた補助アクセント |
| `--teal` | `#355d63` | 法人向け / BtoBアクセント、副CTA |
| `--gold` | `#d8b57a` | 温かい証拠・補助アクセント |

### 影トークン

| トークン | 値 | 用途 |
| --- | --- | --- |
| `--shadow` | `0 28px 60px rgba(55, 36, 24, 0.12)` | 大きな浮遊要素、モバイルメニュー |
| `--shadow-soft` | `0 16px 36px rgba(55, 36, 24, 0.08)` | カード、パネル、セクション帯 |

### 角丸トークン

| トークン | 値 | 用途 |
| --- | --- | --- |
| `--radius-xl` | `36px` | メインパネル、大きなカード、セクション帯 |
| `--radius-lg` | `24px` | ルートカード、ページバナーカード |
| `--radius-md` | `18px` | タイムライン項目 |
| `--radius-sm` | `12px` | 小さな要素用の予備 |

### レイアウトトークン

| トークン | 値 | 用途 |
| --- | --- | --- |
| `--max-width` | `1180px` | コンテンツ最大幅 |
| `--gutter` | `clamp(20px, 3vw, 40px)` | レスポンシブ余白の補助 |

### トークン運用ルール

- コンポーネント内に新しいブランド色を直書きしない。
- 新色が必要な場合は `:root` に追加し、このファイルにも記録する。
- 個人向け / 温かい支援導線はローズ系を使う。
- 法人向け / 相談導線はティール系を使う。
- 具体的な理由なく、青、紫、黒、鮮やかな緑をアクセントとして追加しない。

---

## 06 / タイポグラフィ仕様

### フォント読み込み

`styles.css` では以下を読み込む。

```css
@import url("https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@500;600;700&family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap");
```

### フォントの役割

| 役割 | フォント | フォールバック | 用途 |
| --- | --- | --- | --- |
| 明朝系表示 | `Shippori Mincho` | `serif` | `h1`, `h2`, `h3`, 数値実績 |
| ゴシック本文 | `Zen Kaku Gothic New` | `sans-serif` | 本文、ナビ、ボタン、UIラベル |

### 文字サイズスケール

| 要素 / クラス | サイズ | 太さ | 行高 | 字間 | メモ |
| --- | --- | --- | --- | --- | --- |
| `h1` | `clamp(2.9rem, 6vw, 5.2rem)` | 明朝の継承値 | `1.22` | `-0.04em` | トップページヒーロー |
| `.page-banner-copy h1` | `clamp(2.4rem, 5vw, 4.2rem)` | 明朝の継承値 | `1.22` | 継承 | 下層ページヒーロー |
| `h2` | `clamp(2rem, 4vw, 3rem)` | 明朝の継承値 | `1.22` | `-0.03em` | セクション見出し |
| `h3` | `clamp(1.2rem, 2vw, 1.6rem)` | 明朝の継承値 | `1.22` | 通常 | カード見出し |
| `body` | ブラウザ基準、約`16px` | `400` | `1.7` | 通常 | 読本文 |
| `.lead` | `clamp(1.05rem, 1.8vw, 1.22rem)` | `400` | 継承 | 通常 | 導入文 |
| `.subtle` | 継承 | `400` | 継承 | 通常 | 補助文 |
| `.eyebrow` | `0.78rem` | `700` | 継承 | `0.18em` | セクションラベル |
| `.metric-value` | `clamp(2rem, 4vw, 3rem)` | 明朝の継承値 | `1` | 通常 | 数値実績 |
| `.metric-label` | `clamp(1.15rem, 2vw, 1.5rem)` | 明朝の継承値 | `1.45` | 通常 | テキスト実績 |

### タイポグラフィ運用ルール

- 日本語本文の読みやすさを優先し、本文行高を `1.7` 未満にしない。
- 日本語本文を全角英字風・全大文字風に装飾しない。
- 新しいWebフォントを追加する場合は、このファイルに記録する。
- 文字サイズは `clamp()` で最小値と最大値を持たせる。
- 本文に負の字間を使わない。

---

## 07 / レイアウトプリミティブ

### `.site-shell`

```css
width: min(calc(100% - 32px), var(--max-width));
margin: 0 auto;
```

モバイル:

```css
width: min(calc(100% - 24px), var(--max-width));
```

すべての主要セクションの内側ラッパーとして使う。

### `.section`

```css
padding: clamp(56px, 9vw, 112px) 0;
```

標準の縦セクションに使う。  
ページ固有の理由がない限り、セクション上下に独自marginを重ねない。

### `.section-head`

```css
max-width: 760px;
margin-bottom: 28px;
```

ラベル、見出し、補足文を持つセクション導入に使う。

### グリッドクラス

| クラス | デスクトップ | モバイル時 | 用途 |
| --- | --- | --- | --- |
| `.hero-grid` | `1.15fr / 0.85fr` | `980px` 以下で1カラム | トップページヒーロー |
| `.page-banner-grid` | `1.04fr / 0.72fr` | `980px` 以下で1カラム | 下層ページヒーロー |
| `.route-grid` | 2カラム | `980px` 以下で1カラム | 2つの入口 |
| `.split-grid` | 2カラム | `980px` 以下で1カラム | 2から4枚の関連カード |
| `.card-grid` | 3カラム | `980px` 以下で1カラム | 3つの価値カード |
| `.pillar-grid` | 3カラム | `980px` 以下で1カラム | 3つの方法論・柱 |
| `.menu-grid` | 2カラム | `980px` 以下で1カラム | 法人向けメニュー |
| `.metric-grid` | `repeat(auto-fit, minmax(180px, 1fr))` | `980px` 以下で1カラム | 数値実績、証拠 |
| `.info-grid` | 2カラム | `980px` 以下で1カラム | 問い合わせ情報 |
| `.split-columns` | 2カラム | `980px` 以下で1カラム | 2つの編集パネル |
| `.footer-grid` | 文脈依存 | CTAでは1カラム | CTAカード |

### レスポンシブブレイクポイント

| ブレイクポイント | 挙動 |
| --- | --- |
| `max-width: 980px` | ナビゲーションを折りたたみ、主要グリッドを1カラム化 |
| `max-width: 720px` | `site-shell` の余白を縮小、ロゴ縮小、カードpadding縮小、フッター縦積み |

実際の崩れが確認できない限り、新しいブレイクポイントを追加しない。

---

## 08 / コンポーネント仕様

### ボタン

基本形:

```html
<a class="btn btn-primary" href="./diagnosis.html">無料診断を見る</a>
```

| 種類 | クラス | 視覚的役割 | 用途 |
| --- | --- | --- | --- |
| Primary | `.btn.btn-primary` | ローズグラデーション、白文字 | 個人向け / BtoCの主CTA |
| Secondary | `.btn.btn-secondary` | ティールグラデーション、白文字 | 法人向け / BtoBの主CTA |
| Soft | `.btn.btn-soft` | 明るい面、枠線あり | 補助CTA |
| Text | `.btn-text` | インラインのティール文字 | 低強度のテキスト導線 |

ルール:

- ページ遷移には `<a>` を使う。
- `<button>` はUI挙動だけに使う。現時点ではメニュー開閉のみ。
- ボタン文言はリンク先または行動内容が分かるものにする。
- 外部CTAリンクには `target="_blank" rel="noopener noreferrer"` を付ける。

### パネル

基本形:

```html
<article class="panel reveal">
  ...
</article>
```

| 種類 | クラス | 用途 |
| --- | --- | --- |
| 標準 | `.panel` | 汎用の囲みコンテンツ |
| 温かい面 | `.panel.panel--tint` | 個人向け、情緒的な補助情報 |
| セージ系面 | `.panel.panel--accent` | 落ち着いた補助導線 |

ルール:

- `.panel` の中にさらに `.panel` を入れ子にしない。
- セクション内カードは、必要以上に大きな囲みを重ねない。

### カード

| クラス | 用途 |
| --- | --- |
| `.route-card` | 導線選択、声、実績カード |
| `.value-card` | 3カラムの価値説明 |
| `.pillar-card` | 3つの柱、方法論 |
| `.menu-card` | 法人向けメニュー |
| `.metric-card` | 数値実績、短い証拠 |
| `.proof-card` | 信頼材料 |
| `.cta-card` | フッター前CTA |
| `.mini-panel` | 小さな補助パネル |

共通形:

```html
<article class="value-card panel reveal reveal-delay-1">
  <h3>見出し</h3>
  <p>説明文</p>
</article>
```

### ページバナー

下層ページの冒頭に使う。

```html
<section class="page-banner">
  <div class="site-shell page-banner-grid">
    <div class="page-banner-copy reveal">
      <span class="eyebrow">English Label</span>
      <h1>ページ見出し</h1>
      <p class="lead">リード文</p>
      <p class="subtle">補足文</p>
    </div>
    <div class="page-banner-card reveal reveal-delay-1">...</div>
  </div>
</section>
```

ビジュアルカードが不要なページでは、`page-banner-grid` を省略して `.site-shell` 内に `.page-banner-copy` だけを置いてよい。

### セクション帯

フッター前CTAや強調コールアウトに使う。

```html
<div class="site-shell section-band section-band--teal">
  <span class="eyebrow">Next Step</span>
  <h2>...</h2>
  <p class="lead">...</p>
  <div class="button-row">...</div>
</div>
```

| クラス | 用途 |
| --- | --- |
| `.section-band` | 温かい個人向けコールアウト |
| `.section-band.section-band--teal` | 法人向け、または中立的な次アクション |

### タイムライン

流れの説明に使う。

```html
<ol class="timeline reveal reveal-delay-1">
  <li>
    <span class="timeline-step">01</span>
    <div>
      <strong>Step title</strong>
      <p class="subtle">Step explanation.</p>
    </div>
  </li>
</ol>
```

ルール:

- ステップ番号は `01`、`02`、`03`、`04` の2桁表記にする。
- 各ステップは、タイトル1つと短い説明1つに絞る。

### FAQ

ネイティブの `details` / `summary` を使う。

```html
<details class="faq-item">
  <summary>質問</summary>
  <p class="subtle">回答</p>
</details>
```

ルール:

- 1項目につき質問は1つ。
- 必要なら各セクションの最初の項目だけ `open` にする。
- すべての回答にCTAボタンを入れない。

### リスト

意味のある箇条書きには `.bullet-list` を使う。

```html
<ul class="bullet-list">
  <li>項目</li>
</ul>
```

HTMLリストで表現できる箇所では、本文中に手動の `・` を並べない。

---

## 09 / JavaScript仕様

`script.js` は、グローバルな軽い拡張だけを担当する。

### セレクタ

| セレクタ | 必須要素 | 挙動 |
| --- | --- | --- |
| `[data-menu-toggle]` | ヘッダーメニューボタン | モバイルナビを開閉する |
| `[data-site-nav]` | ヘッダーナビ | `.is-open` を付与される |
| `[data-current-year]` | フッターの年表示 | 現在年が入る |

### 挙動

- メニューボタンをクリックすると、ナビに `.is-open` が付く / 外れる。
- ナビ内リンクをクリックすると、ナビが閉じる。
- `aria-expanded` はメニュー開閉状態と一致させる。
- 現在年は `new Date().getFullYear()` で入れる。

### JavaScript運用ルール

- JSで本文コンテンツを生成しない。
- JSでリモートコンテンツを取得しない。
- JSが無効でもリンクと本文は読めるようにする。
- 新しいJSは、対象要素の存在確認をしてから実行する。
- `script.js` が肥大化する場合は、静的サイト方針を見直す。

---

## 10 / 外部連携レジストリ

HTML内で使う外部リンクは、すべてここに記録する。

| 目的 | URL / Scheme | 使用ページ | メモ |
| --- | --- | --- | --- |
| 無料診断 | `https://www.co-co-lab.com/stress-shindan` | `diagnosis.html` | 既存の外部診断ページ |
| 相談ページ | `https://www.co-co-lab.com/consultation` | `consultation.html`, `contact.html` | 既存の外部相談ページ |
| 予約ページ | `https://www.co-co-lab.com/book-online` | `consultation.html`, `contact.html` | 既存の外部予約ページ |
| サロン案内 | `https://honwaka-llc.com/lp/NYkm7qUC` | `salon.html`, `contact.html` | 外部サロンLP |
| サロン参加 / 決済 | `https://honwaka-llc.com/p/r/ZigpisYe` | `salon.html` | 外部参加・決済導線 |
| メール | `mailto:dekococoiro@gmail.com` | `contact.html` | 公開連絡先メール |
| 電話 | `tel:09049094163` | `contact.html` | 公開連絡先電話 |

### 外部リンクのマークアップ

HTTP(S) の外部リンク:

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">リンク文</a>
```

メールリンク:

```html
<a href="mailto:dekococoiro@gmail.com">dekococoiro@gmail.com</a>
```

電話リンク:

```html
<a href="tel:09049094163">090-4909-4163</a>
```

### 外部連携ルール

- 外部ページをiframeで埋め込まない。
- 決済や運営条件について、確認済み以上の説明を追加しない。
- 内部フォーム送信があるように見せない。
- 外部URLを変更したら、このレジストリと該当HTMLを同じターンで更新する。

---

## 11 / アセット仕様

### 公開アセット

| アセット | サイズ | 用途 | メモ |
| --- | ---: | --- | --- |
| `assets/logo-horizontal-v2.png` | `1959 x 803` | ヘッダー / フッターロゴ | 優先ロゴ |
| `assets/logo-horizontal.jpg` | 現在の `file` 出力では寸法不明 | 旧ロゴ予備 | 意図的に削除するまで保持 |
| `assets/profile.jpg` | `2048 x 3071` | プロフィール・人物写真 | プロフィール写真由来 |
| `assets/salon-flyer.jpg` | `1414 x 2000` | サロン案内チラシ | BtoCチラシ由来 |

### アセット運用ルール

- HTMLは `_project/06_build/site/assets/` 内の画像だけを参照する。
- 原本は `_project/01_source_materials/` に残す。
- 新しい実装用画像は、ASCIIの小文字ファイル名にする。
- 画像には意味のある `alt` を入れる。
- 本当に必要な場合以外、装飾的なストック写真を追加しない。
- 大きな画像を追加する前に、表示用途に合わせて最適化する。

### 現在の画像マークアップ

ロゴ:

```html
<img src="./assets/logo-horizontal-v2.png" alt="カラーココロジー研究所 ロゴ" />
```

プロフィール写真:

```html
<img src="./assets/profile.jpg" alt="竹村英子さんのプロフィール写真" />
```

サロンチラシ:

```html
<img src="./assets/salon-flyer.jpg" alt="じぶん整え習慣サロンの既存チラシ" />
```

---

## 12 / コンテンツと表現の管理

### 公開してよい確認済み表現

| 内容 | 許可表現 |
| --- | --- |
| 支援歴 | `30年以上` |
| ストレス診断実績 | `20,000人以上` または `2万人以上` |
| BtoC主力商品 | `じぶん整え習慣サロン` |
| サロン動画数 | `動画101本` |
| サロン配信 | `週2回、5か月間` |
| 個人向け主対象 | `40代以上女性` |
| 法人向け主対象 | `企業人事` |
| 屋号 | `カラーココロジー研究所` |

### 公開実績例として扱う名称

現在、公開HTMLで実績例として扱える名称:

- 関西電力労働組合
- 大蔵省税関研修所
- 近畿電気通信局
- JTBコミュニケーションズ
- 大阪府高齢者大学
- 京都第二赤十字看護専門学校
- 大阪府看護協会
- グラムール美容専門学校
- さかいJOBステーション
- 大阪ガス社内報
- 学校教職員研究会会報
- COMPANY TANK

### 確認なしで公開しないもの

- 日本機設工業株式会社様
- 現在公開許可が確認できていない企業名・団体名
- 原本に紐づけられない直接引用の声
- 医療的、治療的、成果保証に見える表現
- 運営元に確認していない価格、返金、会員条件、決済条件

### 公開面に残してはいけない制作中表現

公開HTML納品前に以下を検索する。

```text
TODO
FIXME
〇〇
仮
未定
確認中
確認予定
今後追加
公開後に追加
想定しています
前提で設計
外部導線
現行の導線
```

`今後` のような一般語は内部ドキュメントでは使ってよい。  
ただし公開HTMLでは、未来更新を説明するページでない限り使わない。

### 名称ルール

- `じぶん整え習慣` を使う。
- `じぶん整え習慣サロン` を使う。
- 公開HTMLでは `ごきげん体質` を使わない。
- `カラーココロジー研究所` は屋号・信頼資産として扱い、サイト全体の主語にはしない。

---

## 13 / SEO・メタ情報仕様

### ページごとの必須項目

| 項目 | ルール |
| --- | --- |
| Title | `ページ名 | 竹村英子` |
| Meta description | ページ固有。制作中表現を入れない |
| H1 | 1つだけ |
| H2階層 | セクション見出しとして使う |
| リンク | リンク先が分かる文言にする |
| 画像 | 意味のあるaltを入れる |

### まだ未実装の公開前タスク

本番公開前に追加または判断する。

- favicon
- canonical URL
- OGPタグ
- `og:image`
- sitemap
- `robots.txt`
- 構造化データ
- アクセス解析

これらは中途半端に追加しない。公開前タスクとしてまとめて対応する。

---

## 14 / アクセシビリティ仕様

### 現在守ること

- 全ページに以下を入れる:
  - `<a class="skip-link" href="#main">本文へ移動</a>`
  - `<main id="main">`
  - 1つの `<h1>`
  - 意味のあるセクション見出し
- モバイルメニューボタンには以下を入れる:
  - `type="button"`
  - `aria-label="メニューを開く"`
  - `aria-expanded="false"`
  - `data-menu-toggle`
- 現在ページのナビリンクには以下を入れる:
  - `aria-current="page"`
- 外部リンクはアイコンだけ、または曖昧な文言だけにしない。

### 手動QA

納品前に確認する。

1. ページ上部からTab移動する。
2. スキップリンクが表示される。
3. モバイルメニューボタンにフォーカスできる。
4. メニューを開閉できる。
5. 主要CTAの文言が読み取れる。
6. FAQの `details` / `summary` がJSなしで動く。

---

## 15 / QAコマンド

リポジトリルートから実行する。

### Git状態

```bash
git status --short --untracked-files=all
```

納品前の期待値:

```text
意図しないファイルがない
```

### 空白・パッチチェック

```bash
git diff --check
```

期待値:

```text
出力なし
```

### 公開面の制作中表現検索

```bash
rg -n "TODO|FIXME|〇〇|仮|未定|確認中|確認予定|今後追加|公開後に追加|想定しています|前提で設計|外部導線|現行の導線|ごきげん体質|日本機設" _project/06_build/site
```

期待値:

```text
出力なし
```

### 外部リンク一覧

```bash
rg -n "https?://|mailto:|tel:" _project/06_build/site/*.html
```

出力結果を、このファイルの「10 / 外部連携レジストリ」と照合する。

### ローカルプレビュー

```bash
cd _project/06_build/site
python3 -m http.server 4173
```

確認幅:

- デスクトップ: 約 `1440px`
- タブレット: 約 `980px`
- モバイル: 約 `390px`

---

## 16 / 実装レシピ

### 新しい標準ページを追加する

1. 近い既存ページをコピーする。
2. `<title>`、meta description、ナビの `aria-current`、`<h1>` を更新する。
3. 冒頭は `page-banner` を使う。
4. 既存のグリッド・カードクラスを使う。
5. グローバルナビに載せる必要があるページだけ、ヘッダーとフッターを全ページ更新する。
6. `_project/06_build/site/README.md` を更新する。
7. 新しい技術パターンが増えた場合は、このファイルも更新する。

### 新しいCTAを追加する

1. 種類を決める:
   - 個人向け主CTA: `.btn-primary`
   - 法人向け主CTA: `.btn-secondary`
   - 補助CTA: `.btn-soft`
2. リンク先が分かる文言にする。
3. 外部リンクなら `target="_blank" rel="noopener noreferrer"` を付ける。
4. 新しいURLなら「10 / 外部連携レジストリ」に追加する。

### 新しいセクションを追加する

基本形:

```html
<section class="section">
  <div class="site-shell">
    <div class="section-head reveal">
      <span class="eyebrow">Label</span>
      <h2>Section heading</h2>
      <p class="subtle">Support copy.</p>
    </div>
    ...
  </div>
</section>
```

### 新しい画像を追加する

1. 最適化済みファイルを `_project/06_build/site/assets/` に置く。
2. 原本は `_project/01_source_materials/` に残す。
3. ファイル名はASCIIにする。
4. `alt` を入れる。
5. このファイルの「11 / アセット仕様」に追加する。

### 共通コンポーネントを変更する

1. 先に利用箇所を検索する。
2. `styles.css` を変更する。
3. 代表ページを確認する:
   - `index.html`
   - `personal.html`
   - `corporate.html`
   - `results.html`
   - `contact.html`
4. `390px` 幅のモバイル表示を確認する。

---

## 17 / 納品レベル

### Level 1: 構成プロトタイプ

最低条件:

- ページが存在する
- ナビゲーションが動く
- 本文が読める
- デザイン方向が大きく外れていない

### Level 2: クライアント確認用プレビュー

最低条件:

- 公開HTMLに制作中表現がない
- 主要CTAが機能する
- 実績ページとサロンページに判断材料がある
- モバイルナビが動く
- `git diff --check` が通る

### Level 3: 公開可能な最小納品

最低条件:

- Level 2をすべて満たす
- 外部リンク確認済み
- 連絡先確認済み
- favicon / OGP / sitemap の扱いを決めている
- ページタイトルとdescriptionを確認済み
- 確認済みの主張だけを掲載している
- 未確認の企業名・団体名がない
- デスクトップとモバイルの表示QA済み

### Level 4: 本番運用

最低条件:

- Level 3をすべて満たす
- ホスティング設定済み
- ドメイン設定済み
- アクセス解析の扱いを決めている
- フォーム / 予約 / 診断の運用責任が明文化されている
- コラム / お知らせの更新フローが明文化されている

---

## 18 / AIエージェント向けプロンプトガイド

AIコーディングエージェントに依頼するときは、以下を使う。

### 一般的なサイト編集

```text
TECHNICAL.md と DESIGN.md を使用してください。サイトは静的HTML/CSS/Vanilla JSのまま維持してください。ドキュメント同期が必要な場合を除き、編集対象は _project/06_build/site に限定してください。新しいCSSを追加する前に既存クラスを再利用してください。
```

### 新しいセクション追加

```text
既存の section / site-shell / section-head パターンを使って新しいセクションを追加してください。カードとグリッドは既存コンポーネントを使ってください。既存コンポーネントで表現できない場合だけ、新しい視覚プリミティブを追加してください。
```

### 公開コピーQA

```text
公開HTMLを確認し、制作中表現、未確認の主張、壊れたCTA文言、根拠のない企業名・団体名を洗い出してください。原本資料やアーカイブは変更しないでください。
```

### 外部リンク更新

```text
該当する公開HTMLすべての外部リンクを更新し、TECHNICAL.md の「10 / 外部連携レジストリ」も更新してください。HTTPリンクには target="_blank" rel="noopener noreferrer" を維持してください。
```

### コンポーネント修正

```text
共有CSSは保守的に修正してください。先にクラスの利用箇所を検索してください。980pxと720pxのレスポンシブ挙動を維持してください。index、personal、corporate、results、contactを代表ページとして確認してください。
```

---

## 19 / 変更管理

以下が変わった場合は、同じターンで `TECHNICAL.md` を更新する。

- サイトの実行方式
- ビルド工程
- ページ一覧
- 共通コンポーネントクラス
- 外部リンクレジストリ
- 公開アセット一覧
- コンテンツ表現ルール
- QAコマンド
- 納品基準

ビジュアル方向、トーン、タイポグラフィ思想、色設計、レイアウトのムードが変わった場合は、`TECHNICAL.md` ではなく `DESIGN.md` を更新する。
