# Site Build Workspace

ここが、最終的なホームページ実装コードの配置先です。

## 想定する中身

- フロントエンドアプリ
- 画像 / public アセット
- ページ実装
- スタイル
- 必要な設定ファイル

## 現在の実装状態

現時点では、優先度 A の 3 ページを起点に、サイト全体を静的マルチページとして拡張しています。

実装済み:

- `index.html`
- `personal.html`
- `corporate.html`
- `about.html`
- `concept.html`
- `salon.html`
- `diagnosis.html`
- `consultation.html`
- `methods.html`
- `results.html`
- `faq.html`
- `column.html`
- `contact.html`
- `styles.css`
- `script.js`
- `assets/` 配下の初期画像

## 使っている素材方針

- あるものは既存素材をそのまま使う
- 不足写真は、後からフリー素材へ差し替え可能な構成にしている
- 現在は、本人写真と既存ロゴ、BtoCチラシを初期実装に反映済み
- 現時点の優先度 A プロトタイプでは、既存素材だけで成立するように組んでいる

## すでに反映済みの前提

- ブランド主語
- サイトマップ
- 主要ページの役割
- `DESIGN.md v1`
- `TECHNICAL.md v1`
- トップ / 個人向け / 法人向けの構成ラフ
- 優先度 A ページの主要コピー初稿
- 写真候補と不足素材の整理
- 優先度 A ページの簡易ワイヤー

## 次にやること

- 優先度 A プロトタイプの見直し
- 必要ならフリー素材の追加差し替え
- 各ページの文言精度調整
- 将来のフォーム接続や CMS 更新導線の検討
- 公開前チェック項目はルートの `TECHNICAL.md` を参照

## ファイル構成

- `index.html`
  - トップページ
- `personal.html`
  - 個人向けトップ
- `corporate.html`
  - 法人向けトップ
- `about.html`
  - プロフィールページ
- `concept.html`
  - じぶん整え習慣の考え方
- `salon.html`
  - じぶん整え習慣サロン案内
- `diagnosis.html`
  - 無料診断案内
- `consultation.html`
  - 無料相談 / 個別相談案内
- `methods.html`
  - カラーココロジー研究所 / 方法論
- `results.html`
  - 実績・お客様の声
- `faq.html`
  - よくある質問
- `column.html`
  - コラム / お知らせ
- `contact.html`
  - お問い合わせ
- `styles.css`
  - 共通スタイル
- `script.js`
  - モバイルメニューなどの最小JS
- `assets/`
  - 初期画像アセット

## プレビュー方法

依存なしで確認できます。  
例:

1. `cd _project/06_build/site`
2. `python3 -m http.server 4173`
3. ブラウザで `http://127.0.0.1:4173`
