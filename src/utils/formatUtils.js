export const formatMoney = (moneyValue, currency = "USD") => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency,
    currencyDisplay: currency === "AUD" ? "symbol" : "narrowSymbol",
  }).format(moneyValue);
};

export const pluralize = (singular, times) => {
  if (times === 1) return singular;
  else return singular + "s";
};
