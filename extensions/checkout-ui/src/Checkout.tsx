import React from 'react';
import {
  reactExtension,
  Banner,
  BlockStack,
  Text,
  Heading,
  Button,
  InlineLayout,
  Image,
  useApi,
  useTranslate,
  useCartLines,
  useApplyCartLinesChange,
  useTotalAmount,
  useShippingAddress,
  useBuyerIdentity,
} from '@shopify/ui-extensions-react/checkout';

// 1. エクステンションのターゲットポイントを設定
export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />
);

function Extension() {
  const translate = useTranslate();
  const { extension } = useApi();
  const cartLines = useCartLines();
  const applyCartLinesChange = useApplyCartLinesChange();
  const totalAmount = useTotalAmount();
  const shippingAddress = useShippingAddress();
  const buyerIdentity = useBuyerIdentity();

  // カート内の商品数を計算
  const itemCount = cartLines.reduce((total, line) => total + line.quantity, 0);

  // サンプル機能: カート内の商品数が3以上の場合にメッセージを表示
  const showBulkDiscountMessage = itemCount >= 3;

  return (
    <BlockStack spacing="base">
      {/* ヘッダー */}
      <Heading level={2}>カスタムチェックアウト拡張機能</Heading>
      
      {/* バナー: まとめ買い割引の案内 */}
      {showBulkDiscountMessage && (
        <Banner
          status="success"
          title="まとめ買い割引対象です！"
        >
          3点以上お買い上げいただき、ありがとうございます。
        </Banner>
      )}

      {/* 注文情報の表示 */}
      <BlockStack spacing="tight">
        <Text size="medium" emphasis="bold">
          注文サマリー
        </Text>
        <InlineLayout spacing="base">
          <Text>商品点数:</Text>
          <Text emphasis="bold">{itemCount}点</Text>
        </InlineLayout>
        <InlineLayout spacing="base">
          <Text>合計金額:</Text>
          <Text emphasis="bold">
            {totalAmount?.amount} {totalAmount?.currencyCode}
          </Text>
        </InlineLayout>
      </BlockStack>

      {/* 配送先情報 */}
      {shippingAddress && (
        <BlockStack spacing="tight">
          <Text size="medium" emphasis="bold">
            配送先
          </Text>
          <Text>
            {shippingAddress.firstName} {shippingAddress.lastName}
          </Text>
          {shippingAddress.address1 && <Text>{shippingAddress.address1}</Text>}
          {shippingAddress.city && (
            <Text>
              {shippingAddress.city}, {shippingAddress.provinceCode}{' '}
              {shippingAddress.zip}
            </Text>
          )}
          {shippingAddress.countryCode && (
            <Text>{shippingAddress.countryCode}</Text>
          )}
        </BlockStack>
      )}

      {/* カスタム情報バナー */}
      <Banner status="info" title="安心してお買い物ください">
        全商品に30日間返金保証がついています。
      </Banner>

      {/* サンプルボタン */}
      <Button
        onPress={() => {
          console.log('Button pressed in checkout extension');
        }}
      >
        詳細を確認
      </Button>
    </BlockStack>
  );
}
