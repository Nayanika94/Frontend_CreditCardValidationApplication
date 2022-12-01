// Validate the card number
export const cardNumberPatternCheck = (
  cardNumber: string,
  type: string
): boolean => {
  let isValid: boolean = false;
  if (
    (cardNumber?.startsWith('4') && type?.indexOf('Visa') > -1) ||
    (cardNumber?.startsWith('5') && type?.indexOf('MasterCard') > -1) ||
    (cardNumber?.startsWith('37') && type?.indexOf('AmericanExpress') > -1)
  ) {
    isValid = true;
  }
  return isValid;
};
