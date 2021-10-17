export const formatToStringList = (arr: string[] | null): string => {
  if (!arr) return "";

  return arr.reduce((acc, cur) => {
    cur = capitalize(cur);
    return acc ? `${acc} · ${cur}` : cur;
  }, "");
};

export const formatPriceRating = (priceRating: number): string => {
  let str = "";
  for (let i = 0; i < priceRating; i++) {
    str = str + "$";
  }

  return str;
};

export const capitalize = (str: string): string => {
  return str ? str[0].toUpperCase() + str.slice(1) : "";
};
