import { FormGroup } from '@angular/forms';
import { CardBrandEnum, CardValidation } from './models';

export const getValidationConfigFromCardNo = (
  cardNumber: string
): CardValidation =>
  cards.find((card) => {
    const patterns = card.patterns.map(
      (pattern) => new RegExp(`^${pattern}`, 'g')
    );
    const matchResult = patterns
      .map((pattern) => cardNumber.match(pattern))
      .filter((result) => result);

    return !!matchResult;
  }) || null;

export const cards = Object.freeze([
  {
    type: CardBrandEnum.VISA,
    patterns: [4],
  },
  {
    type: CardBrandEnum.MASTERCARD,
    patterns: [5],
  },
  {
    type: CardBrandEnum.AMERICANEXPRESS,
    patterns: [4],
  },
]);
