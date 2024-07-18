import {
  reactExtension,
  Banner,
  BlockStack,
  SkeletonTextBlock,
  Text,
  BlockStack,
  useSettings,
  useApi,
  useTranslate,
} from "@shopify/ui-extensions-react/checkout";

// 1. Choose an extension target
export default reactExtension("purchase.checkout.block.render", () => (
  <Extension />
));

function Extension() {
  const translate = useTranslate();
  const { extension } = useApi();

  

  return <SkeletonTextBlock lines={2}/>;
  
}