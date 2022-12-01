// Validate the card number
export const cardNumberPatternCheck = (cardNumber: string): boolean => {
  let isValid: boolean = false;
  if (
    cardNumber?.startsWith('4') ||
    cardNumber?.startsWith('5') ||
    cardNumber?.startsWith('37')
  ) {
    isValid = true;
  }
  return isValid;
};
