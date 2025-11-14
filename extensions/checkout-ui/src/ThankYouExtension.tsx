import React from 'react';
import {
  reactExtension,
  Banner,
  BlockStack,
  Text,
  InlineStack,
  Icon,
  useCartLines,
} from '@shopify/ui-extensions-react/checkout';

// サンクスページ用のエクステンション
export default reactExtension(
  'purchase.thank-you.block.render',
  () => <ThankYouExtension />
);

function ThankYouExtension() {
  const cartLines = useCartLines();

  return (
    <BlockStack spacing="base">
      <Banner status="success" title="ご注文ありがとうございます！">
        ご注文を承りました。確認メールをお送りしましたので、ご確認ください。
      </Banner>

      <BlockStack spacing="tight">
        <Text size="large" emphasis="bold">
          次のステップ
        </Text>
        <InlineStack spacing="tight" blockAlignment="center">
          <Icon source="checkmark" />
          <Text>商品の準備を開始します</Text>
        </InlineStack>
        <InlineStack spacing="tight" blockAlignment="center">
          <Icon source="delivery" />
          <Text>配送状況はメールでお知らせします</Text>
        </InlineStack>
        <InlineStack spacing="tight" blockAlignment="center">
          <Icon source="customer" />
          <Text>ご不明な点がございましたら、お気軽にお問い合わせください</Text>
        </InlineStack>
      </BlockStack>

      <Banner status="info">
        商品レビューをお待ちしております。商品到着後、ぜひご感想をお聞かせください。
      </Banner>
    </BlockStack>
  );
}
