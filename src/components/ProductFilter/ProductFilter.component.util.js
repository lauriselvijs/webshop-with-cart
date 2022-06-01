export const getRestAttributes = (attributes) => {
  const restAttributesArr = attributes.filter((attribute) => {
    if (
      attribute.name === "Color" ||
      attribute.items.some((attributeItem) => attributeItem.value === "Yes")
    ) {
      return false;
    }
    return true;
  });

  return restAttributesArr;
};
