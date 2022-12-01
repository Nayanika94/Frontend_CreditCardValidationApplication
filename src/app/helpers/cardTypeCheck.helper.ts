export const cardTypeCheck = (type: string): boolean => {
  let isValid: boolean = false;
  if (
    type?.indexOf('Visa') ||
    type?.indexOf('MasterCard') ||
    type?.indexOf('AmericanExpress') > -1
  ) {
    isValid = true;
  }
  return isValid;
};
