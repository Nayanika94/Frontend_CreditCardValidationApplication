import { ValidatorFn, AbstractControl } from '@angular/forms';
import { cardNumberPatternCheck } from '../helpers/cardNumberPatternCheck.helper';

export function cardNumberValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const isValid = cardNumberPatternCheck(control.value);
    return isValid ? null : { cardNumberPatternCheck: isValid };
  };
}
