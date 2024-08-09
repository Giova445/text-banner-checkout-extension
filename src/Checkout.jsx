import {
  reactExtension,
  Text,
  TextBlock,
  BlockStack,
  useSettings,
  Divider,
} from "@shopify/ui-extensions-react/checkout";

// Set the entry points for the extension
const checkoutBlock = reactExtension("purchase.checkout.block.render", () => <App />);
export { checkoutBlock };

function App() {

  const { client_description_bold: descriptionBold ,client_description : description } = useSettings();

  const client_description_bold =  descriptionBold  ?? 'Limited time Anniversary Sale'
  const client_description = description  ?? 'can not be combined with any other offers or specials.';

  return (
    <>
      <Divider />
      <BlockStack padding={"base"}>
        <TextBlock>
          <Text emphasis="bold">{client_description_bold} </Text>
          <Text>{client_description}</Text>
        </TextBlock>
      </BlockStack>
      <Divider />
    
    </>
  )

  
}