export const findPrice = (product, chosenCurrencyName) =>
  product.prices.find((price) => price.currency.label === chosenCurrencyName)
    .amount;

export const checkIfHasAttribute = (product, attributeName) =>
  product.attributes.some((attribute) => attribute.type === attributeName);

export const getAttributeArray = (product, attributeName) =>
  product.attributes.find((attribute) => attribute.type === attributeName);
