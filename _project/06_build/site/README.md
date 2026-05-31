# Site Build Workspace

ここが、最終的なホームページ実装コードの配置先です。

## 現在の実装状態

`_project/01_source_materials/site-instructions/●カラーココロジー研究所_制作指示書_第2版.docx` の指示を反映し、サイト構成を6ページ＋プライバシーポリシーに整理しています。

実装済み:

- `index.html`
- `about.html`
- `personal.html`
- `corporate.html`
- `faq.html`
- `contact.html`
- `privacy.html`
- `totonoe/`
- `styles.css`
- `script.js`
- `assets/` 配下の画像アセット
- `assets/favicon.svg`

## 現在のページ構成

- `index.html`
  - ホーム。第2版のキャッチコピー、竹村英子紹介、共感ゾーン、個人向け / 法人向けサービス、色彩心理コミュニケア、無料診断・お問い合わせへの導線
- `about.html`
  - 竹村英子について。想い、日々の暮らし、プロフィール詳細、資格、主な活動実績
- `personal.html`
  - 個人の方へ。6つの生活習慣、じぶん整え習慣サロン、無料診断、無料健康相談への導線
- `corporate.html`
  - 法人・団体の方へ。研修課題、選ばれる理由、研修メニュー、導入事例
- `faq.html`
  - よくある質問。個人向け / 法人向けのFAQ
- `contact.html`
  - お問い合わせ。Googleフォームとメールへの導線
- `privacy.html`
  - プライバシーポリシー。個人情報の利用目的、Googleフォーム、第三者提供、お問い合わせ先
- `totonoe/index.html`
  - じぶん整え習慣サロンLP。会費FAQと誤字修正を反映済み

## 削除済みページ

制作指示書に従い、以下のページは個別ページとしては持たず、内容を6ページ内へ統合しています。

- `methods.html`
- `concept.html`
- `salon.html`
- `diagnosis.html`
- `consultation.html`
- `results.html`
- `column.html`

## 外部リンク

- じぶん整え診断: `https://forms.gle/RboAhF8n61gNSqCeA`
- 60分無料健康相談: `https://forms.gle/tAn8GP7ET8DDqXhD8`
- お問い合わせフォーム: `https://forms.gle/LTE2N4r41x3UzN3E8`

## LP配置

じぶん整え習慣サロンLPは `totonoe/` に配置しています。
本サイトからは次の2箇所で `./totonoe/` へリンクしています。

- `personal.html` の「サロンの詳細を見る」ボタン
- `faq.html` の Q2「詳しくはこちら」

## プライバシーポリシー

`●プライバシーポリシー_カラーココロジー研究所.docx` の本文を `privacy.html` に反映し、全メインページと `totonoe/` のフッターからリンクしています。

## 使っている素材方針

- 既存素材を優先して使う
- 本人写真と既存ロゴを初期実装に反映済み
- LP本体とLP用画像は `totonoe/` 配下に配置済み

## プレビュー方法

依存なしで確認できます。

例:

1. `cd _project/06_build/site`
2. `python3 -m http.server 4173`
3. ブラウザで `http://127.0.0.1:4173`

補足: PowerShell では `python3`、Git Bash では `python` でも可。
