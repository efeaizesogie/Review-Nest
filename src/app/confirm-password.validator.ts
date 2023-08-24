import {
    AbstractControl,
    ValidationErrors,
    ValidatorFn,
  } from '@angular/forms';
  
  export const confirmPasswordValidator: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    return control.value.pPassword === control.value.pConfirmPassword
      ? null
      : { PasswordNoMatch: true };
  };