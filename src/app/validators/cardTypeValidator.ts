import { ValidatorFn, AbstractControl } from '@angular/forms';
import { cardTypeCheck } from '../helpers/cardTypeCheck.helper';

export function cardTypeValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const isValid = cardTypeCheck(control.value);
    return isValid ? null : { cardTypeCheck: isValid };
  };
}
