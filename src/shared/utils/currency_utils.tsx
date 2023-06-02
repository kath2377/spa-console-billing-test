export const formatCurrency = (currency: number) => {
  return Intl.NumberFormat(undefined, {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(currency);
};
