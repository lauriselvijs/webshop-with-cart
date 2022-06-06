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

export const filterProducts = (products, urlQueryArr) => {
  const filteredProducts = products.filter((product) => {
    for (let attribute of product.attributes) {
      if (
        urlQueryArr.some(
          (urlQueryAttr) =>
            urlQueryAttr.includes(attribute.name) &&
            urlQueryAttr.split("=")[0] === "attribute"
        )
      ) {
        return true;
      }
      for (let attributeValue of attribute.items) {
        if (
          urlQueryArr.some((urlQueryAttr) =>
            attributeValue.value.includes(urlQueryAttr.split("=")[1])
          )
        ) {
          return true;
        }
      }
    }

    return false;
  });

  return filteredProducts;
};
