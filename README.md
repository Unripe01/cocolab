# Workspace Entry

このワークスペースの作業入口は [_project/README.md](./_project/README.md) です。

デザイン方針の現行正本は [DESIGN.md](./DESIGN.md) です。

技術仕様の現行正本は [TECHNICAL.md](./TECHNICAL.md) です。

## 方針

- 新しく共有された未整理資料は `新規共有ファイル/` に一旦置く
- 原本資料は `_project/01_source_materials/` に分類済み
- 戦略資料は `_project/03_strategy/`
- 原稿は `_project/04_content/`
- 実装コードは `_project/06_build/site/`
- 既存サイトの保全バックアップは `08_backup/lolipopbackup/`

ルート直下には、今後新しい作業ファイルを置かない運用にします。
ただし、既存サイトの保全用として `08_backup/` を例外的に残します。

例外:

- `DESIGN.md`
  - 実装前のデザイン判断を固定するための制御ドキュメント
- `TECHNICAL.md`
  - 実装・保守・納品判断を固定するための技術仕様ドキュメント
- `新規共有ファイル/`
  - Google Drive 共有の一次受け口
- `08_backup/`
  - 既存サイトを再確認・比較・移行漏れ確認するための保全バックアップ
