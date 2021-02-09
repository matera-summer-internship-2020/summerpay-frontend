export const phoneMask = (value: string) => {
  let mask = value.replace(/\D/g, '');
  mask = mask.replace(/^(\d{2})(\d+)/g, '($1$2');
  mask = mask.replace(/^\((\d{2})(\d+)/g, '($1) $2');
  mask = mask.replace(/^\((\d{2})\) (\d{4})(\d+)/g, '($1) $2-$3');
  if (mask.length === 15) {
    mask = value.replace(/\D/g, '');
    mask = mask.replace(/^(\d{2})(\d{5})(\d{4})/g, '($1) $2-$3');
  } else {
    mask = mask.replace(/^\((\d{2})\)(\d{4})\-(\d{4})/g, '($1) $2-$3');
  }

  return mask;
};

export const cpfMask = (value: string) => {
  let mask = value ? value.replace(/\D/g, '') : '';

  if (mask.length === 3) {
    mask = mask.replace(/(\d{3})/, '$1');
  } else if (mask.length > 3 && mask.length <= 6) {
    mask = mask.replace(/(\d{3})(\d+)/, '$1.$2');
  } else if (mask.length > 6 && mask.length <= 9) {
    mask = mask.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3');
  } else if (mask.length > 9 && mask.length <= 11) {
    mask = mask.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
  }

  return mask;
};

export const cpfMaskWithAsterisks = (value: string) => {
  const mask = cpfMask(value);

  return mask.replace(/^([\d]{3}\.)/g, '***.').replace(/-[\d]{2}/g, '-**');
};

export const cepMask = (value: string) => {
  let mask = value.replace(/\D/g, '');

  if (mask.length > 5) {
    mask = mask.replace(/(\d{5})(\d+)/, '$1-$2');
  }

  return mask;
};

export const toCurrency = (valueStr: string) => {
  const isNegative: boolean = parseFloat(valueStr) < 0;
  const currencySymbol = 'R$';
  const numberDecimalPlaces = 2;
  const decimalSeparator = ',';
  const thousandSeparator = '.';

  if (valueStr.split(',').length === 1 && valueStr.split('.').length === 1) {
    valueStr = `${parseFloat(valueStr)}${decimalSeparator}00`;
  }

  if (decimalSeparator === ',') {
    valueStr = valueStr.replace(',', '.');
  }

  let mask = valueStr;
  mask = mask.replace(/\D/g, '');

  if (mask.length < numberDecimalPlaces) {
    return isNegative
      ? `${currencySymbol}-${mask}${decimalSeparator}00`
      : `${currencySymbol + mask + decimalSeparator}00`;
  }

  if (mask.length === numberDecimalPlaces) {
    return isNegative
      ? `${currencySymbol}-` + `0${decimalSeparator}${mask}`
      : `${currencySymbol}0${decimalSeparator}${mask}`;
  }

  mask = mask.replace(/(\d+)(\d{2})$/gm, `$1${decimalSeparator}$2`);
  mask = mask.replace(/(\d+)(\d{3},\d{2})$/gm, `$1${thousandSeparator}$2`);
  mask = mask.replace(/^(0\.)/gm, '');
  mask = mask.replace(/(\d+)(\d{3})\.(\d{3},\d{2})$/gm, `$1${thousandSeparator}$2${thousandSeparator}$3`);
  mask = mask.replace(
    /(\d+)(\d{3})\.(\d{3})\.(\d{3},\d{2})$/gm,
    `$1${thousandSeparator}$2${thousandSeparator}$3${thousandSeparator}$4`
  );
  mask = mask.replace(/^(0)(\d)/g, '$2');

  if (isNegative) {
    return `${currencySymbol}-${mask}`;
  }

  return currencySymbol + mask;
};
