import {
  reactExtension,
  Text,
  TextBlock,
  BlockStack,
  useSettings,
  Divider,
} from "@shopify/ui-extensions-react/checkout";

// 1. Choose an extension target
const checkoutBlock = reactExtension("purchase.checkout.block.render", () => <App />);
export { checkoutBlock };

function App() {

  const { descriptionBold: clientDescription_bold , description: clientDescription } = useSettings();

  const descriptionBold = clientDescription_bold ?? 'Limited Time sale'
  const description = clientDescription ?? 'can not be combined with any other offers or specials.';

  return (
    <>
      <Divider />
      <BlockStack padding={"base"}>
        <TextBlock>
          <Text emphasis="bold">{descriptionBold} </Text>
          <Text>{description}</Text>
        </TextBlock>
      </BlockStack>
      <Divider />
    
    </>
  )

  
}