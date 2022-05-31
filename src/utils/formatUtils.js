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

export const urlQueryToArr = (urlQuery) => {
  const urlQueryString =
    urlQuery && decodeURIComponent(urlQuery).replace(/&/g, "^_^");

  return urlQueryString.split("^_^");
};

export const objToUrlQuery = (urlObj) => {
  let str = [];

  for (let property in urlObj) {
    if (urlObj[property].length !== 0) {
      str.push(
        encodeURIComponent(property) +
          "=" +
          encodeURIComponent(urlObj[property].join("&" + property + "="))
      );
    }
  }

  return str.join("&");
};
