export const formatToStringList = (arr: string[]): string => {
  return arr.reduce((acc, cur) => {
    cur = cur[0].toUpperCase() + cur.slice(1);
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
