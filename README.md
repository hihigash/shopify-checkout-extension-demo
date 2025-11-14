# Shopify Checkout Extension Demo

このプロジェクトは、Shopify Checkout UI Extensionsのサンプル実装です。pnpmをパッケージマネージャーとして使用しています。

## 📋 前提条件

- Node.js 18以上
- pnpm
- Shopify Partner アカウント
- Shopify開発ストア

## 🚀 セットアップ

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

`shopify.app.toml` ファイルを編集して、以下の情報を設定してください：

- `client_id`: Shopify Partner DashboardからアプリのClient IDを取得
- `application_url`: アプリケーションのURL（開発中は localhost でOK）

## 🛠️ 開発

### 開発サーバーの起動

```bash
pnpm dev
```

このコマンドを実行すると：
1. Shopify CLIがローカル開発サーバーを起動します
2. チェックアウトエクステンションがビルドされます
3. 開発ストアでエクステンションをプレビューできます

### ビルド

```bash
pnpm build
```

### デプロイ

```bash
pnpm deploy
```

## 📁 プロジェクト構造

```
.
├── extensions/
│   └── checkout-ui/
│       ├── src/
│       │   ├── Checkout.tsx                  # メインのチェックアウトエクステンション
│       │   ├── ShippingExtension.tsx         # 配送オプション画面用
│       │   ├── CustomerNoteExtension.tsx     # お客様メモ機能
│       │   └── ThankYouExtension.tsx         # サンクスページ用
│       ├── package.json
│       ├── tsconfig.json
│       └── shopify.extension.toml
├── package.json
└── shopify.app.toml
```

## 🎨 実装されている機能

### 1. Checkout.tsx (メインエクステンション)
- カート内の商品情報表示
- 合計金額表示
- まとめ買い割引メッセージ
- 配送先情報の表示
- カスタム情報バナー

**ターゲット**: `purchase.checkout.block.render`

### 2. ShippingExtension.tsx (配送オプション)
- 送料無料メッセージの表示
- 送料無料まであといくらかの表示

**ターゲット**: `purchase.checkout.shipping-option-list.render-after`

### 3. CustomerNoteExtension.tsx (お客様メモ)
- 配送に関する特記事項の入力
- カスタム属性としての保存

**ターゲット**: `purchase.checkout.block.render`

### 4. ThankYouExtension.tsx (サンクスページ)
- 注文完了メッセージ
- 次のステップの案内
- レビュー依頼

**ターゲット**: `purchase.thank-you.block.render`

## 🔧 使用しているAPI

このサンプルでは、以下のShopify Checkout UI Extensions APIを使用しています：

### コンポーネント
- `Banner`: 通知メッセージの表示
- `BlockStack`: 垂直方向のレイアウト
- `InlineLayout`/`InlineStack`: 水平方向のレイアウト
- `Text`: テキスト表示
- `Heading`: 見出し
- `Button`: ボタン
- `TextField`: テキスト入力フィールド
- `Icon`: アイコン

### Hooks
- `useCartLines()`: カート内の商品情報を取得
- `useTotalAmount()`: 合計金額を取得
- `useShippingAddress()`: 配送先住所を取得
- `useBuyerIdentity()`: 購入者情報を取得
- `useApplyAttributeChange()`: カスタム属性の変更を適用
- `useAttributes()`: 現在の属性を取得
- `useApi()`: エクステンションAPIにアクセス
- `useTranslate()`: 多言語対応

## 📖 エクステンションポイント

Shopify Checkoutには以下のようなエクステンションポイントがあります：

### Checkout画面
- `purchase.checkout.block.render`: チェックアウトページの任意の場所
- `purchase.checkout.header.render-after`: ヘッダーの後
- `purchase.checkout.contact.render-after`: 連絡先情報の後
- `purchase.checkout.shipping-option-list.render-after`: 配送オプションリストの後
- `purchase.checkout.payment-method-list.render-after`: 支払い方法リストの後

### サンクスページ
- `purchase.thank-you.block.render`: サンクスページの任意の場所
- `purchase.thank-you.customer-information.render-after`: お客様情報の後
- `purchase.thank-you.order-status.render-after`: 注文ステータスの後

## 🔗 参考リンク

- [Shopify Checkout UI Extensions ドキュメント](https://shopify.dev/docs/api/checkout-ui-extensions/latest)
- [Shopify CLI ドキュメント](https://shopify.dev/docs/apps/tools/cli)
- [UI Components リファレンス](https://shopify.dev/docs/api/checkout-ui-extensions/latest/components)
- [API Hooks リファレンス](https://shopify.dev/docs/api/checkout-ui-extensions/latest/apis)

## 💡 カスタマイズのヒント

### エクステンションを追加する場合

1. `extensions/checkout-ui/src/` に新しい `.tsx` ファイルを作成
2. `reactExtension()` でターゲットポイントを指定
3. コンポーネントを実装
4. `shopify.extension.toml` に新しいターゲットを追加（必要に応じて）

### スタイリング

Checkout UI Extensionsは、Shopifyのデザインシステムに基づいています。カスタムCSSは使用できませんが、コンポーネントのpropsで外観をカスタマイズできます。

### デバッグ

`console.log()` を使用してデバッグ情報を出力できます。ブラウザの開発者ツールでログを確認してください。

## 📝 ライセンス

MIT

## 🤝 コントリビューション

プルリクエストを歓迎します。大きな変更を加える場合は、まずissueを開いて変更内容を議論してください。
