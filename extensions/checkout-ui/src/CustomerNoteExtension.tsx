import React, { useState } from 'react';
import {
  reactExtension,
  Banner,
  BlockStack,
  Button,
  TextField,
  Text,
  useApplyAttributeChange,
  useAttributes,
} from '@shopify/ui-extensions-react/checkout';

// お客様メモ機能
export default reactExtension(
  'purchase.checkout.block.render',
  () => <CustomerNoteExtension />
);

function CustomerNoteExtension() {
  const applyAttributeChange = useApplyAttributeChange();
  const attributes = useAttributes();
  
  const [note, setNote] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSaveNote = async () => {
    try {
      await applyAttributeChange({
        type: 'updateAttribute',
        key: 'customer_note',
        value: note,
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (error) {
      console.error('Failed to save note:', error);
    }
  };

  return (
    <BlockStack spacing="base">
      <Text size="medium" emphasis="bold">
        配送に関する特記事項
      </Text>
      <Text appearance="subdued">
        配達日時のご希望や、その他ご要望がございましたらご記入ください。
      </Text>
      
      <TextField
        label="メモ"
        value={note}
        onChange={setNote}
        multiline={3}
      />
      
      <Button onPress={handleSaveNote}>
        保存
      </Button>

      {saved && (
        <Banner status="success">
          メモを保存しました
        </Banner>
      )}
    </BlockStack>
  );
}
