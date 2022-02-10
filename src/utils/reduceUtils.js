export const findPrice = (product, chosenCurrencyName) =>
  product.prices.find((price) => price.currency.label === chosenCurrencyName)
    .amount;

export const checkIfHasAttribute = (product, attributeName) =>
  product.attributes.some((attribute) => attribute.type === attributeName);

export const getAttributeArr = (product, attributeName) =>
  product.attributes.filter((attribute) => attribute.type === attributeName);

export const getTotalItemCount = (cartItems) =>
  cartItems.reduce((total, item) => total + parseInt(item.count), 0);

export const getTotalItemAmount = (cartItems, chosenCurrencyName) =>
  cartItems.reduce(
    (total, item) =>
      total + findPrice(item, chosenCurrencyName) * parseInt(item.count),
    0
  );
