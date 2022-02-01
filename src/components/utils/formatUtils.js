export const formatMoney = (moneyValue, currency = "USD") => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency,
    currencyDisplay: "narrowSymbol",
  }).format(moneyValue);
};
