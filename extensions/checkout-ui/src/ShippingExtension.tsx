import React from 'react';
import {
  reactExtension,
  Banner,
  BlockStack,
  Text,
  InlineLayout,
  useCartLines,
  useTotalAmount,
} from '@shopify/ui-extensions-react/checkout';

// 配送方法選択画面用のエクステンション
export default reactExtension(
  'purchase.checkout.shipping-option-list.render-after',
  () => <ShippingExtension />
);

function ShippingExtension() {
  const cartLines = useCartLines();
  const totalAmount = useTotalAmount();

  // 高額商品の場合、送料無料のメッセージを表示
  const freeShippingThreshold = 10000; // 例: 10,000円以上で送料無料
  const currentAmount = parseFloat(totalAmount?.amount || '0');
  const isFreeShipping = currentAmount >= freeShippingThreshold;
  const amountUntilFreeShipping = freeShippingThreshold - currentAmount;

  return (
    <BlockStack spacing="base">
      {isFreeShipping ? (
        <Banner status="success" title="送料無料">
          このご注文は送料無料の対象です！
        </Banner>
      ) : amountUntilFreeShipping > 0 ? (
        <Banner status="info">
          あと {amountUntilFreeShipping.toFixed(0)} {totalAmount?.currencyCode || 'JPY'} で送料無料になります
        </Banner>
      ) : null}
    </BlockStack>
  );
}
