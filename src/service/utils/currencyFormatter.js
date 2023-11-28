export const formatCurrency = (price, locale = 'en-US') => new Intl.NumberFormat(locale).format(price);
