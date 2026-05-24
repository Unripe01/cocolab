# Site Build Workspace

ここが、最終的なホームページ実装コードの配置先です。

## 現在の実装状態

`新規共有ファイル/totonoe/カラーココロジー研究所_制作指示書.docx` の指示を反映し、サイト構成を6ページに整理しています。

実装済み:

- `index.html`
- `about.html`
- `personal.html`
- `corporate.html`
- `faq.html`
- `contact.html`
- `totonoe/`
- `styles.css`
- `script.js`
- `assets/` 配下の画像アセット

## 現在のページ構成

- `index.html`
  - ホーム。個人向け / 法人向けの入口と、無料診断・お問い合わせへの導線
- `about.html`
  - 竹村英子について。プロフィール、色彩心理コミュニケア、6つの生活習慣、資格、実績
- `personal.html`
  - 個人の方へ。じぶん整え習慣サロン、無料診断、無料健康相談への導線
- `corporate.html`
  - 法人・団体の方へ。研修課題、選ばれる理由、研修メニュー、導入事例
- `faq.html`
  - よくある質問。個人向け / 法人向けのFAQ
- `contact.html`
  - お問い合わせ。Googleフォームとメールへの導線
- `totonoe/index.html`
  - じぶん整え習慣サロンLP

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
