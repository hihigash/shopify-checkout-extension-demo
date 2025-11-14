# Shopify Checkout Extension - SNS共有機能

購入完了ページ（Thank You Page）にSNS共有ボタンを表示するShopify Checkout UI Extensionのサンプルです。

## 前提条件

- Node.js 18以上
- pnpm
- Shopify Partner アカウント
- Shopify開発ストア

## セットアップ

### 1. pnpmのインストール

```bash
npm install -g pnpm
```

### 2. 依存関係のインストール

```bash
pnpm install
```

### 3. Shopify CLIの認証

```bash
pnpm shopify auth login
```

### 4. アプリの設定

`shopify.app.toml` を編集して、Shopify Partner Dashboardから取得した `client_id` を設定してください。

## 開発

### 開発サーバーの起動

```bash
pnpm dev
```

このコマンドを実行すると、ローカル開発サーバーが起動し、開発ストアでエクステンションをプレビューできます。

### ビルド

```bash
pnpm build
```

### デプロイ

```bash
pnpm deploy
```

## プロジェクト構造

```
.
├── extensions/
│   └── checkout-ui/
│       ├── src/
│       │   └── ThankYouExtension.tsx    # SNS共有機能
│       ├── package.json
│       ├── tsconfig.json
│       └── shopify.extension.toml
├── package.json
└── shopify.app.toml
```

## 実装内容

### ThankYouExtension.tsx

購入完了ページでSNSへの共有リンクを表示します。

**対応SNS:**
- X (Twitter)
- Facebook
- LINE

**エクステンションポイント:** `purchase.thank-you.block.render`

## カスタマイズ

### 共有メッセージの変更

`ThankYouExtension.tsx` の `shareText` を編集することで、共有時のメッセージを変更できます。

```tsx
const shareText = `${shop.name}で素敵な商品を購入しました！`;
```

### SNSの追加・削除

`ThankYouExtension.tsx` 内で共有URLを追加・削除することで、対応SNSをカスタマイズできます。

## 参考リンク

- [Shopify Checkout UI Extensions ドキュメント](https://shopify.dev/docs/api/checkout-ui-extensions/latest)
- [Shopify CLI ドキュメント](https://shopify.dev/docs/apps/tools/cli)
