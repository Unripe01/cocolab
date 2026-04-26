# Project Workspace

このプロジェクトの作業用ルートです。  
このセッションでは、最終アウトプットを次の2系統で管理します。

1. ホームページ構想
2. 実装コード

## 現在の運用方針

- 新しく共有された未整理資料は、ルート直下の `新規共有ファイル/` に一旦入れる
- 既存原本は、ルート直下から `_project/01_source_materials/` へ分類移動済み
- 整理資料、戦略資料、原稿、実装コードは `_project/` 配下に集約する
- ルート直下は `README.md`、`DESIGN.md`、`TECHNICAL.md`、`_project/`、`新規共有ファイル/` を入口とする最小構成に保つ

## ドキュメント同期ルール

- 構成変更、移動、命名変更を行ったら、関連する `md` も同じターンで更新する
- 運用ルールが変わったら、最低でも `README.md` と `00_admin` 配下を見直す
- 古い説明を残す場合は、現行ルールと混同しないように `archive` 扱いを明記する

## 新規共有ファイルの扱い

1. 追加資料は、まずルート直下の `新規共有ファイル/` に入れる
2. 精査前は未整理資料として扱う
3. 内容確認後に `01_source_materials/` の適切な棚へ移動する
4. 必要なら同ターンで `workspace-inventory.md` なども更新する

## 主要フォルダ

- `00_admin`
  - セッション運用、決定事項、棚卸し、必要スキル
- `01_source_materials`
  - 原本の整理済み分類棚
- `02_research`
  - 現行サイト分析、抽出メモ、追加質問
- `03_strategy`
  - ブランド設計、情報設計、導線設計
- `04_content`
  - メッセージ、ページ設計、原稿
- `05_design`
  - 参考、ワイヤー、確定アセット
- `06_build`
  - 実装コード
- `07_delivery`
  - プレビュー、納品、引き渡し物

## いま見ればよいファイル

- デザイン方針の正本: [../DESIGN.md](../DESIGN.md)
- 技術仕様の正本: [../TECHNICAL.md](../TECHNICAL.md)
- 優先度Aページ構成ラフ: [04_content/priority-a-core-page-structure-rough.md](./04_content/priority-a-core-page-structure-rough.md)
- 優先度Aページ主要コピー初稿: [04_content/priority-a-core-page-copy-draft.md](./04_content/priority-a-core-page-copy-draft.md)
- 優先度Aページ写真監査: [05_design/priority-a-photo-asset-audit.md](./05_design/priority-a-photo-asset-audit.md)
- 優先度Aページ簡易ワイヤー: [05_design/priority-a-simple-wireframes.md](./05_design/priority-a-simple-wireframes.md)
- 優先度A静的プロトタイプ: [06_build/site/index.html](./06_build/site/index.html)
- `DESIGN.md v1` 作成時の brief: [05_design/next-session-design-brief.md](./05_design/next-session-design-brief.md)
- セッション前提: [00_admin/session-operating-model.md](./00_admin/session-operating-model.md)
- 必要スキル: [00_admin/codex-skills.md](./00_admin/codex-skills.md)
- 現在の整理状況: [00_admin/workspace-inventory.md](./00_admin/workspace-inventory.md)
- 事前戦略メモ: [03_strategy/refresh-plan-v1.md](./03_strategy/refresh-plan-v1.md)
- 確定判断: [03_strategy/confirmed-decisions-2026-04-12.md](./03_strategy/confirmed-decisions-2026-04-12.md)
- 構成回答反映判断: [03_strategy/confirmed-decisions-2026-04-20.md](./03_strategy/confirmed-decisions-2026-04-20.md)
- 追加回答原本: [02_research/questions/refresh-plan-v1-answer.md](./02_research/questions/refresh-plan-v1-answer.md)
- 構成回答原本: [02_research/questions/site-structure-answer-20260420.md](./02_research/questions/site-structure-answer-20260420.md)
- デザイン方針: [05_design/design-approach.md](./05_design/design-approach.md)
- クライアント報告用サイト構成: [07_delivery/handoff/site-structure-final-v1-for-hideko.md](./07_delivery/handoff/site-structure-final-v1-for-hideko.md)
- 実装置き場: [06_build/site/README.md](./06_build/site/README.md)

## 原本の現在地

- プロフィール系: `01_source_materials/profiles`
- BtoC関連: `01_source_materials/b2c-offers`
- BtoB関連: `01_source_materials/b2b-offers`
- お客様の声 / 実績補強: `01_source_materials/voices-case-studies`
- ブランド素材: `01_source_materials/brand-assets`
- 写真: `01_source_materials/photos`
- 媒体掲載: `01_source_materials/media-publications`
- 過去販促物: `01_source_materials/legacy-promotions`
- 生成済み草案: `01_source_materials/generated-drafts`

## ここからの基本順序

1. 優先度 A プロトタイプを見直す
2. 残りページと詳細導線の実装に広げる
