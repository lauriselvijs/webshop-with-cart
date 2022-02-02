export const getAttributesAsObj = (
  textAttrArr,
  swatchAttrArr,
  selectedSize,
  selectedColorCode
) => {
  if (textAttrArr || swatchAttrArr)
    return {
      size: selectedSize || textAttrArr.items[0].displayValue,
      color: selectedColorCode || swatchAttrArr.items[0].displayValue,
    };
  return {};
};
