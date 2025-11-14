import React from 'react';
import {
  reactExtension,
  BlockStack,
  Text,
  InlineStack,
  Link,
  useShop,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.thank-you.block.render',
  () => <ThankYouExtension />
);

function ThankYouExtension() {
  const shop = useShop();
  
  // 共有用のテキストとストアURL
  const shareText = `${shop.name}で素敵な商品を購入しました！`;
  const storeUrl = `https://${shop.myshopifyDomain}`;

  // 各SNSの共有URL
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(storeUrl)}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(storeUrl)}`;
  const lineShareUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(storeUrl)}&text=${encodeURIComponent(shareText)}`;

  return (
    <BlockStack spacing="base">
      <Text size="large" emphasis="bold">
        購入をシェアしよう！
      </Text>
      
      <Text appearance="subdued">
        お友達にシェアして、お気に入りの商品を共有しませんか？
      </Text>

      <InlineStack spacing="base">
        <Link to={twitterShareUrl} external>
          X (Twitter)
        </Link>
        
        <Link to={facebookShareUrl} external>
          Facebook
        </Link>
        
        <Link to={lineShareUrl} external>
          LINE
        </Link>
      </InlineStack>
    </BlockStack>
  );
}
