import { ValidatorFn, AbstractControl } from '@angular/forms';
import { cardNumberPatternCheck } from '../helpers/cardNumberPatternCheck.helper';
import { cardTypeCheck } from '../helpers/cardTypeCheck.helper';

export function cardNumberValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const isValid = cardNumberPatternCheck(control.value);
    return isValid ? null : { cardNumberPatternCheck: isValid };
  };
}

export function cardTypeValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const isValid = cardTypeCheck(control.value);
    return isValid ? null : { cardTypeCheck: isValid };
  };
}
