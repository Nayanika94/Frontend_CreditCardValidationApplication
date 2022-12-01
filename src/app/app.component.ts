import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { cardNumberValidator } from './validators/cardNumberValidator';
import { Creditcard } from './models/creditcard';
import { CreditcardServiceService } from './services/creditcard-service.service';
import { cardTypeValidator } from './validators/cardTypeValidator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoading = true;
  creditCardNumberGroup: FormGroup;
  submitted = false;
  creditcard: Creditcard;

  constructor(private creditCardService: CreditcardServiceService) {
    this.creditcard = new Creditcard();
  }

  ngOnInit() {
    this.creditCardNumberGroup = new FormGroup({
      cardNumber: new FormControl(null, [
        Validators.required,
        Validators.minLength(13),
        Validators.maxLength(16),
        cardNumberValidator(),
      ]),
      type: new FormControl('', cardTypeValidator()),
    });

    const storedID = localStorage.getItem('UUID');
    if (storedID) {
      this.creditCardService.findById(storedID).subscribe((res) => {
        this.creditCardNumberGroup.patchValue({
          cardNumber: res.number,
        });
        this.isLoading = false;
      });
    } else {
      this.isLoading = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    // if (this.creditCardNumberGroup.invalid) {
    //   return;
    // }

    console.log(this.creditCardNumberGroup);
    this.creditCardService
      .save(this.creditCardNumberGroup.value.cardNumber)
      .subscribe((result) => {
        localStorage.setItem('UUID', result.id);
        const type = this.setType(result);
        this.creditcard.type = type;
        this.creditCardNumberGroup.controls.type.setValue(type);
      });
  }

  onReset() {
    this.creditCardNumberGroup.reset();
    this.creditcard.type = '';
  }

  setType(result: Creditcard) {
    if (this.creditCardNumberGroup.value.cardNumber.charAt(0) === '4')
      return (result.type = 'Visa');
    else if (this.creditCardNumberGroup.value.cardNumber.charAt(0) === '5')
      return (result.type = 'Mastercard');
    else if (this.creditCardNumberGroup.value.cardNumber.charAt(0) === '3') {
      if (this.creditCardNumberGroup.value.cardNumber.charAt(1) === '7') {
        return (result.type = 'AmericanExpress');
      }
    }
  }
}
