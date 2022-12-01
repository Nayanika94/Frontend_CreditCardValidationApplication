export interface CardValidation {
  type: CardBrandEnum;
  patterns: number[];
}

export enum CardBrandEnum {
  VISA = 'VISA',
  MASTERCARD = 'MASTERCARD',
  AMERICANEXPRESS = 'AMERICANEXPRESS',
}
